const Router = require('express').Router;
const User = require('../models/User');
const { registerValidation, loginValidation } = require('../validations');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const router = Router();


router.post('/register', async (req, res) => {

    //validate data
    const { error } = registerValidation(req.body);
    if(error){
        return res.status(400).send(error.details[0].message);
    }

    //check if user already exists
    const userExists = await User.findOne({username: req.body.username});
    console.log("userExists:", userExists);
    if(userExists){
        return res.status(409).send('User already registered');
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const user = new User({
        username: req.body.username,
        password: hashedPassword
    }); 

    try{
        const savedUser = await user.save();
        res.send({user: savedUser._id});

    } catch(err){
        res.status(400).send(err);
    }
});


router.post('/signin', async (req, res) => {

    //validate data
    const { error } = loginValidation(req.body);
    if(error){
        return res.status(400).send(error.details[0].message);
    }

    //check if user already exists
    const user = await User.findOne({username: req.body.username});
    if(!user){
        return res.status(409).send('Wrong username or password');
    }

    //check password
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if(!validPass){
        return res.status(400).send("Invalid email or password!");
    }

    //token
    const token = jwt.sign({
        _id: user._id, 
        username: user.username
    }, process.env.TOKEN_SECRET);

    res.header('access-token', token).send(token);
    res.send('Successfully signedin');
});

module.exports = router;
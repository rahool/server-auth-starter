let jwt = require('jsonwebtoken');

let verifyToken = (req, res, next) => {
    let token = req.header('authorization'); // Express headers are auto converted to lowercase

    if (!token){
        return res.status(401).send('Access denied!');
    }

    if (token.startsWith('Bearer ')) {
        // Remove Bearer from string
        token = token.slice(7, token.length);
    }

    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = verified;
        next();
    } catch (err) {
        res.status(400).send('Invalid token!');
    }

};

module.exports.verifyToken = verifyToken;

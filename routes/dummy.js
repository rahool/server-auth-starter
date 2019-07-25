const Router = require('express').Router;
const { verifyToken } = require('./middleware');

const router = Router();

router.get('/unprotected', (req, res) => {
    res.json({
            data: {
                name: "unprotected data",
                message: "Successfully fetched unprotected data!"
            }
    });
});

router.get('/protected', verifyToken, (req, res) => {
    res.json({
            data: {
                name: "protected data",
                message: "Successfully fetched protected data!"
            }
    });
});

module.exports = router;
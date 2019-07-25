const Router = require('express').Router;
const { verifyToken } = require('./middleware');

const router = Router();

router.get('/dummy', verifyToken, (req, res) => {
    res.json({
            data: {
                name: "xyz",
                message: "Successfully fetched data!"
            }
    });
});

module.exports = router;
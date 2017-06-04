const express = require('express');
const router = express.Router();

router.post('/postDouble', function (req, res) {
    let num = req.body.num;

    res.json({
        name: req.body.name,
        result: num * 2
    });
});

module.exports = router;
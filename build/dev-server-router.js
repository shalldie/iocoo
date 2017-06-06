const express = require('express');
const router = express.Router();

router.post('/postMsg', function (req, res) {
    let name = req.body.name;

    res.json({
        msg: `Hello ~ ${name} !!! timeStamp:${+new Date}`
    });
});

module.exports = router;
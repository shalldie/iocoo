const express = require('express');
const router = express.Router();

router.post('/postMsg', function (req, res) {
    let name = req.body.name;
    
    setTimeout(function () {
        res.json({
            msg: `Hello ~ ${name} !!! timeStamp:${+new Date}`
        });
    }, 2000);
});

module.exports = router;
const express = require('express');
let router = express.Router();
let db = require('../model/db');


router.get('/test', (req, res) => {
    let sql = 'select * from user';
    db.querySql(sql).then(ret => {
        res.send({status: 1, data: ret})
    }, err => {
        console.log(err);
        res.send({status: 0, errMsg: err})
    });
});


module.exports = router;

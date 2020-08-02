let express = require('express');
let router = express.Router();
let db = require('../model/db');

//新增日记
router.post('/add', (req, res) => {
    let sql = 'INSERT INTO diary(userid, text, createtime) VALUES('+req.body.userid+', \''+req.body.text+'\', '+req.body.createtime+');';
    db.querySql(sql).then(ret => {
        res.send({status: 1})
    }, err => {
        res.send({status: 0, errMsg: err})
    })
});
//获取全部日记
router.get('/list', (req, res) => {
    let sql = 'SELECT * FROM diary WHERE userid='+req.query.id+';';
    db.querySql(sql).then(ret => {
        res.send({status: 1, data: ret})
    }, err => {
        res.send({status: 0, errMsg: err})
    })
});
//获取已收藏的日记
router.get('/favorites', (req, res) => {
    let sql = 'SELECT * FROM diary WHERE stared=\'1\' AND userid='+req.query.id+';';
    db.querySql(sql).then(ret => {
        res.send({status: 1, data: ret})
    }, err => {
        res.send({status: 0, errMsg: err})
    })
});

module.exports = router;
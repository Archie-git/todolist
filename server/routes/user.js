let express = require('express');
let router = express.Router();
let db = require('../model/db');

//用户登录
router.post('/login', (req, res) => {
    let sql = 'SELECT * FROM user WHERE email=\''+req.body.email+'\' and password=\''+req.body.password+'\';';
    db.querySql(sql).then(ret => {
        if(ret.length === 1){
            res.send({status: 1, data: ret[0],  msg: '登录成功'})
        }else{
            res.send({status: 0, errMsg: '用户不存在或密码错误'})
        }
    }, err => {
        res.send({status: 0, errMsg: '登录失败'})
    })
});

//用户注册
router.post('/add', (req, res) => {
    let sql = 'SELECT * FROM user WHERE email=\''+req.body.email+'\';';
    db.querySql(sql).then(ret => {
        if(ret.length === 0){
            sql = 'INSERT INTO user(email, password) VALUES(\''+req.body.email+'\', \''+req.body.password+'\');';
            db.querySql(sql).then(() => {
                res.send({status: 1, msg: '用户注册成功'})
            }, err => {
                res.send({status: 0, errMsg: '注册失败'})
            })
        }else{
            res.send({status: 0, errMsg: '用户已存在'})
        }
    }, err => {
        res.send({status: 0, errMsg: '注册失败'})
    });
});

//获取用户信息
router.get('/info', (req, res) => {
    let sql = 'SELECT * FROM user WHERE id='+req.query.id+';';
    db.querySql(sql).then(ret => {
        res.send({status: 1, data: ret[0]})
    }, err => {
        res.send({status: 0, errMsg: err})
    })
});

module.exports = router;

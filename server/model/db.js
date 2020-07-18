let mysql = require('mysql');
let dbConfig = require('../config/dbConfig');

//创建数据库，指定字符集和编码方式
// CREATE DATABASE IF NOT EXISTS mydiary DEFAULT CHARACTER SET=utf8mb4 DEFAULT COLLATE utf8mb4_general_ci;

//创建连接池
let pool = mysql.createPool(dbConfig);

//连接池执行sql语句
exports.querySql = (sql) => {
    return new Promise((resolve, reject) => {
        pool.query(sql, (err, ret) => {
            if(err){
                reject(err)
            }else{
                resolve(ret)
            }
        })
    })
};
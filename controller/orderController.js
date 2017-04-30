var db = require('../utils/db');
var config = require('../config/app_config');
var sd = require('silly-datetime');
var https = require('https');

exports.deleteOrderById = function (req, res, next) {
    var data = req.params;
    console.log(data);
    var sql = 'DELETE FROM t_orderitem WHERE id = ?'
    db.exec(sql,[data.id],function (err, result) {
        if (err) {
            console.log(err);
            return;
        }
    })
    res.end();

}

exports.addOrder = function (req, res, next) {
    var data = req.body;
    var post = (JSON.parse(JSON.stringify(data)));
    var sql = 'INSERT INTO t_orderitem SET ?';
    db.exec(sql,post,function (err, result) {
        var rs={}
        if(err){
            rs.errorCode = 1;
            rs.msg = 'error'
            res.json(rs)
            res.end()
        }
        rs.errorCode = 0;
        rs.msg = 'success'
        res.json(rs)
        res.end()
    })
}

exports.findAllOrder = function (req, res, next) {
    var data = req.body;
    var userId = data.id || 0;
    var values_order = [userId, 0, 5];
    var sql_order = userId != 0 ?
        'SELECT * FROM t_orderitem where id = ?  LIMIT ?,? ':
        'SELECT * FROM t_orderitem LIMIT ?,? ';

    db.exec(sql_order, values_order, function (err, result) {
        if (err) {
            console.log('get historyOrder from db err');
            res.end();
            return;
        }

        res.json(result);
        res.end();
    });
};


var db = require('../utils/db');
var config = require('../config/app_config');
var sd = require('silly-datetime');
var https = require('https');
var dateUtil = require('../utils/date')
var moment = require('moment')

exports.deleteOrderById = function (req, res, next) {
    var data = req.params;
    var sql = 'DELETE FROM t_orderitem WHERE oid = ?'
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
    var create_time = moment.format('L')
    console.log(create_time);
    post['create_time'] = create_time
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
    var userId = data.user_id || 0;
    var values_order = [userId];
    var sql = 'select * from t_orderitem o left join t_product p on o.product_id = p.pid left join t_merchant m on m.mid = o.mer_id'
    var sql_order = userId != 0 ? sql+' where user_id = ? ': sql;

    db.exec(sql_order, values_order, function (err, result) {
        if (err) {
            console.log('get historyOrder from db err');
            return res.end();
        }
        res.json(result)
    });
};


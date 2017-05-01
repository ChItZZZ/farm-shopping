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
    var userId = data.user_id || 0;
    var values_order = [userId];
    var sql_order = userId != 0 ?
        'SELECT * FROM t_orderitem where user_id = ?  ':
        'SELECT * FROM t_orderitem ';

    db.exec(sql_order, values_order, function (err, result) {
        if (err) {
            console.log('get historyOrder from db err');
            return res.end();
        }
        var rs = [];
        result.length && result.forEach(function (v, i) {
            rs.push(v)
            var sql_product = 'SELECT * FROM t_product left join t_merchant WHERE t_product.id = ? AND t_product.mer_id = t_merchant.mid';
            db.exec(sql_product,[v.product_id],function (err, result) {
                if(err) {
                    return res.json(rs);
                }
                rs[i].title = result.length && result[0].title;
                rs[i].price = result.length && result[0].price;
                rs[i].imgUrl = result.length && result[0].pic_url;
                rs[i].merchantName = result.length && result[0].name
                // var sql_merchant = 'SELECT name FROM t_merchant WHERE mid = ?'
                // db.exec(sql_merchant,[v.mer_id],function (err, result) {
                //     if(err){
                //         return res.json(rs)
                //     }
                //     rs[i].merchantName = result.length && result[0].name
                //     res.json(rs);
                //     res.end();
                // })
            })
        })
    });
};


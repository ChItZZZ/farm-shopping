/**
 *
 * Created by my on 2017/4/29.
 */

var db = require('../utils/db')

exports.findAllAddress = function (req, res, next) {
    var values_order = [0, 5];
    var sql_order = 'SELECT * FROM t_useraddress LIMIT ?,? ';
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

exports.updateAddress = function (req, res, next) {
    var data = req.body;
    var id = req.params.id;
    //id 是address的id
    var sql = 'UPDATE t_product SET address= ? ,zipcode = ? , phone = ? WHERE id = ?'
    var values = [data.title,data.price,data.phone];
    db.exec(sql, values, function (err, result) {
        var rs = {}
        if (err) {
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
exports.addAddress = function (req, res, next) {
    var data = req.body;
    console.log(data);
    console.log(JSON.stringify(data));
    console.log(JSON.parse(JSON.stringify(data)));
    var post = (JSON.parse(JSON.stringify(data)));
    var sql = 'INSERT INTO t_product SET ?';
    db.exec(sql, post, function (err, result) {
        var rs = {}
        if (err) {
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

exports.deleteAddressById = function (req, res, next) {
    var data = req.params;
    var values_order = data.id;
    var sql_order = 'DELETE FROM t_product WHERE id = ?'
    db.exec(sql_order, values_order, function (err, result) {
        if (err) {
            console.log('get historyOrder from db err');
            res.end();
            return;
        }
        res.json(result);
        res.end();
    })
}




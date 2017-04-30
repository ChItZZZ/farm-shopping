/**
 * Created by my on 9/10/16.
 */
var db = require('../utils/db')

exports.findAllItems = function (req, res, next) {
    var values_order = [0, 5];
    var sql_order = 'SELECT * FROM t_product p LEFT JOIN t_merchant m on p.mer_id = m.mid';
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

exports.updateItem = function (req, res, next) {
    var data = req.body;
    var id = req.params.id;
    var sql = 'UPDATE t_product SET title= ? ,price = ?WHERE id = ?'
    var values = [data.title,data.price,id];
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
exports.addItem = function (req, res, next) {
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

exports.deleteItemById = function (req, res, next) {
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




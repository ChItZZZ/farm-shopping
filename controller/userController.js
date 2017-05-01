var db = require('../utils/db')

exports.findAllUsers = function(req, res, next) {
    var values_order = [0,5];
    var sql_order = 'SELECT * FROM t_user';
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

exports.registerUser = function (req, res, next) {
    var data = req.body;
    var post = (JSON.parse(JSON.stringify(data)));

    var sql = 'INSERT INTO t_user SET ?';
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

exports.deleteUserById = function (req, res, next) {
    var data = req.params;
    var values_order = data.uid;
    var sql_order = 'DELETE FROM t_user WHERE uid = ?'
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


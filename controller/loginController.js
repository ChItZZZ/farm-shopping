/**
 *
 * Created by my on 2017/4/30.
 */

var db = require('../utils/db')
exports.userLogin = function (req, res, next) {
    var param = req.body;
    var username = param.username;
    var password = param.password;
    var sql = 'SELECT password FROM t_user WHERE username = ?'
    db.exec(sql,[username],function (err, result) {
        var rs = {};
        var pwd = result && result[0] && result[0].password;
        var checked = pwd == password
        if(err || !checked){
            rs.errorCode = 1;
            rs.msg = 'login fail'
            return res.send(rs)
        }
        rs.errorCode = 0;
        rs.msg = 'success'
        res.json(rs)
        res.end()
    })
}

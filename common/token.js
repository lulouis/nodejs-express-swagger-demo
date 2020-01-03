const jwt = require('../common/jwt');

module.exports = function(req, res, next) {
    var token = req.body.authorization || req.query.authorization || req.headers['authorization']
    if (token) {
        // console.log('token', token);
        jwt.verify(token, ()=>{
            next();
        }, (err)=>{
            res.json(err);
        });
    }
    else{
        res.json({
            success: false,
            message: '没有传token,请先登录'
        });
    }
}
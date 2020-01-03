var redis = require('redis');
var JWTR =  require('jwt-redis').default;

var redisClient = redis.createClient();
var jwtr = new JWTR(redisClient);

var secret = 'grace1996';
var payload = {};

var jwt = {};

const EXPIRES = 14400;

jwt.sign = function (response) {
  jwtr.sign(payload, secret, { expiresIn: EXPIRES })
  .then((token)=>{
    // Token verification
    jwtr.verify(token, secret).then(()=>{
      response({
        access_token: token,
        expires_in: EXPIRES,
        scope: 'admin',
        token_type: 'Bearer',
      });
    });
  });
}

jwt.verify = function (token, next, error) {
  jwtr.verify(token.replace('Bearer ', ''), secret)
  .then(()=>{
      next();
  })
  .catch(()=>{
    error({
      success: false,
      message: '无效的token,请重新登录'
    });
  });
}

exports = module.exports = jwt;
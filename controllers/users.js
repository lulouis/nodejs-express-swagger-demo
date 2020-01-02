var express = require('express');
var router = express.Router();

// /**
//  * This function comment is parsed by doctrine
//  * @route GET /users/list
//  * @group foo - Operations about user
//  * @param {string} email.query.required - eg: user@domain
//  * @param {string} password.query.required - user's password.
//  * @returns {object} 200 - An array of user info
//  * @returns {Error}  default - Unexpected error
//  */
// router.get('/list', function(req, res, next) {
//   var path = require('path');
//   // 通过NODE_ENV来设置环境变量，如果没有指定则默认为生产环境
//   var env = process.env.NODE_ENV || 'prd';
//   env = env.toLowerCase();
//   // 载入配置文件
//   var file = path.resolve('./config', env);
//   var config = {}
//   try {
//     config = require(file)
//   } catch (err) {
//     throw err;
//   }
//   // res.render('index', config);
//   res.end(JSON.stringify(config));
// });

/**
 * 用于测试基础 GET 请求的接口
 * @route GET /users/hello
 * @summary GET 测试
 * @group 测试
 * @returns {object} 200 - 返回 world
 * @security JWT
 */
router.get('/hello', (req, res) => {
  res.send('hello world!')
})

module.exports = router;

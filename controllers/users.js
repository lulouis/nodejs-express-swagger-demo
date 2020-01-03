var express = require('express');
var router = express.Router();
var token = require('../common/token');

/**
 * 用于测试基础 GET 请求的接口
 * @route GET /users/hello
 * @summary GET 测试
 * @group 测试
 * @returns {object} 200 - 返回 world
 * @security JWT
 */
router.get('/hello', token, (req, res) => {
  res.send('hello world!');
});

module.exports = router;

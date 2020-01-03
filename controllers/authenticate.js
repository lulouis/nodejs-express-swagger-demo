var express = require('express');
var router = express.Router();

const jwt = require('../common/jwt');

// /**
//  * 登录验证 POST 请求的接口
//  * @route POST /authenticate
//  * @summary POST 登录验证
//  * @group 验证
//  * @param {string} username.query.required - eg: sunjiaying
//  * @returns {object} 200 - 返回 world
//  */
router.post('/', (req, res) => {
  if (req.body == undefined || req.body.username == undefined || req.body.password == undefined) {
    res.json({
      success: false,
      message: '用户名和密码不能为空'
    });
    return;
  }

  // 在此判断用户名和密码是否正确，以下假设正确
  if (true) {
    jwt.sign((body)=>{
      res.json(body);
    });
  }
});

module.exports = router;

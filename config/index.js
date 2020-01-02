var path = require('path');

exports.getConfig = function() {
    // 通过NODE_ENV来设置环境变量，载入配置文件
    
    var env = process.env.NODE_ENV || 'prd';
    env = env.toLowerCase();
    //var file = path.resolve('./config', env);
    var file =path.join(__dirname, env)
    var config = require(file)
    return config
}

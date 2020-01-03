var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var ejs = require('ejs');


var app = express();
// 引入swagger
var swagger = require('./swagger/index');
swagger.initSwagger(app)

// 引入post解析中间件
var bodyParser = require('body-parser');
var multer = require('multer');
let upload = multer()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(upload.array())
app.use(cookieParser());
// view engine setup
app.use(express.static(path.join(__dirname, 'static')));
app.set('views', path.join(__dirname, 'views'));
app.engine('.html', ejs.__express);
app.set('view engine', 'html');

// 引入跨域中间件
var cors = require('cors')
let corsOptions = {
    origin: '*'
}
app.use(cors(corsOptions))

// 引入日志中间件
let morgan = require('morgan')
app.use(morgan('short'))

//路由挂载
var routers = require('./routers/index');
routers.SetRouters(app)

// 通过NODE_ENV来设置环境变量，载入配置文件
var config = require('./config/index').getConfig()
// 引入http服务中间件
const http = require('http')
http.createServer(app).listen(config.port, () => console.log(`http webapi at http://localhost:${config.port}`))
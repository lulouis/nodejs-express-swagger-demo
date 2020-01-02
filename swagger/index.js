const path =require('path');
// swagger配置信息
const swaggerConfig = {
    swaggerDefinition: {
        info: {
            title: '某WEBAPI 网关',
            description: 'swagger && OAuth2.0 && Restful',
            version: '1.0.0',
        },
        produces: [
            "application/json",
            "application/xml"
        ],
        schemes: ['http', 'https'],
        securityDefinitions: {
            JWT: {
                type: 'apiKey',
                in: 'header',
                name: 'Authorization',
                description: '',
            }
        }
    },
    route: {
        url: "/swagger", // 访问swagger的地址
        docs: "/swagger.json" //swagger文件 api
    },
    basedir: __dirname,
    files: [
        path.join(__dirname, '../controllers/*.js')
    ]
}

exports.initSwagger = function(app) {
    var swaggerGenerator = require('express-swagger-generator')(app)
    swaggerGenerator(swaggerConfig)
}
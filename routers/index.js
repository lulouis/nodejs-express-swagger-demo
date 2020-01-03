var authenticateRouter = require('../controllers/authenticate');
var indexRouter = require('../controllers/index');
var usersRouter = require('../controllers/users');


exports.SetRouters = function(app) {
    app.use('/authenticate', authenticateRouter);
    app.use('/', indexRouter);
    app.use('/users', usersRouter);
}

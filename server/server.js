var express = require('express');
var app = express();

// configure server with middleware and routing
require('./config/middleware.js')(app, express);

// export app for testing and flexibility, required by index.js
module.exports = app;

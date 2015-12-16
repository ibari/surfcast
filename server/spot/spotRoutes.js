var spotController = require('./spotController.js');

module.exports = function (app) {
  app.get('/', spotController.getData);
};

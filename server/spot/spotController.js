var request = require('request');
var keys = require('../config/keys');

module.exports = {
  getData: function (req, res) {
    var spot_id = req.param('spot_id');
    var url = 'http://magicseaweed.com/api/' + keys.mswApiKey + '/forecast/?spot_id=' + spot_id;

    request(url, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        res.send(body);
      }
    });
  }
};

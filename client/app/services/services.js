angular.module('surfcast.services', [])

.factory('Spots', function () {
  var spots = {};

  spots.list = [
    {
      id: 163,
      name: 'Steamer Lane'
    },
    {
      id: 162,
      name: 'Mavericks'
    },
    {
      id: 256,
      name: 'Davenport'
    },
    {
      id: 257,
      name: 'Four Mile'
    }
  ]; 
  
  return spots; 
})

.factory('Spot', function ($http) {
  var getData = function (id) {
    return $http({
      url: '/api/spot',
      method: 'GET',
      params: {spot_id: id}
    })
    .then(function (resp) {
      return resp.data;
    }, function (resp) {
      console.error('Error fetching spot data: ', resp);
    });
  };

  return {
    getData: getData
  };
})

.factory('Chart', function() {
  var xAxisTickFormatFunction = function() {
    return function(d) {
      return d3.time.format('%a')(new Date(d));
    };
  };

  var colorFunction = function() {
    return function(d, i) {
      return '#00BFFF';
    };
  };

  var formatData = function(data) {
    var chartData = {};

    chartData.key = "Series 1";
    chartData.values = [];

    _.each(data, function(item) {
      var value = [item.timestamp, item.swell.maxBreakingHeight];
      chartData.values.push(value);
    });

    return [chartData];
  };

  return {
    xAxisTickFormatFunction: xAxisTickFormatFunction,
    colorFunction: colorFunction,
    formatData: formatData
  }
});

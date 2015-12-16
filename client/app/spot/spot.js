angular.module('surfcast.spot', [])

.controller('SpotController', function ($scope, Spot, Spots, Chart) {
  $scope.spots = Spots.list;
  $scope.spot = $scope.spots[0];
  $scope.xAxisTicks = Chart.xAxisTickFormatFunction;
  $scope.colors = Chart.colorFunction;

  $scope.getForecast = function () {
    Spot.getData($scope.spot.id)
      .then(function (data) {
        $scope.data = Chart.formatData(data);
      })
      .catch(function (error) {
        console.error('Error fetching spot data: ', error);  
      });
  };

  $scope.getForecast();  
});

angular.module('surfcast', [
  'surfcast.services',
  'surfcast.spot',
  'ngRoute',
  'nvd3ChartDirectives'
])
.config(function($routeProvider, $httpProvider) {
  $httpProvider.defaults.useXDomain = true;
  delete $httpProvider.defaults.headers.common['X-Requested-With'];

  $routeProvider
    .when('/spot', {
      templateUrl: 'app/spot/spot.html',
      controller: 'SpotController'
    })
    .otherwise({
      redirectTo: '/spot'
    });
});



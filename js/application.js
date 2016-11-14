angular.module('movieTrailers.controllers', []);
angular.module('movieTrailers.services', []);
angular.module('movieTrailers.directives', []);
angular.module('movieTrailers.filters', []);

window.MovieTrailers = angular.module('MovieTrailers', [
  'ui.router',
  'movieTrailers.controllers',
  'movieTrailers.directives',
  'movieTrailers.filters',
  'movieTrailers.services',
  'ngAria',
  'ngAnimate'
]);

MovieTrailers.config(function($urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
});

/* application routes */
MovieTrailers.config(['$stateProvider','$locationProvider','$urlRouterProvider',
 function($stateProvider, $locationProvider, $urlRouterProvider) {
  $locationProvider.html5Mode(true);
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'views/home.html',
      controller: 'HomeCtrl'
    });
  }
]);

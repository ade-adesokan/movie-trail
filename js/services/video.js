angular.module('movieTrailers.services')
  .factory('__Video', ['$http', function($http){
    return {
      get: function(title, cb){
        $http.get('https://www.googleapis.com/youtube/v3/search?part=snippet&q='+title+'&key=AIzaSyADNaNsvnVHdQGVixF-oud5pFvCoP--Ycs')
        .then(function success(response){
          cb(null, response);
        },
         function failure(response){
            cb(err);
         });
      }
    }
  }]);
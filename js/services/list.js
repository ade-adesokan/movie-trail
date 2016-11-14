angular.module('movieTrailers.services')
  .factory('__List', ['$http', function($http){
    return {
      getTopRatedByYear: function(year, cb){
        $http.get('https://api.themoviedb.org/3/discover/movie?api_key=504a8bdb3558a63aee150d596ebc34bb&language=en-US&sort_by=vote_count.desc&include_adult=false&include_video=true&page=1&primary_release_year='+year)
        .then(function success(response){
          cb(null, response);
        },
         function failure(response){
            cb(err);
         });
      }
    }
  }]);


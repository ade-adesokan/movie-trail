angular.module('movieTrailers.controllers')
  .controller('HomeCtrl', ['$scope', '$sce', '__Video', '__List', function($scope, $sce, __Video, __List){
    
    var date = new Date();
    var year = date.getFullYear();
    var imageBaseUrl = 'https://image.tmdb.org/t/p/w500';

    __List.getTopRatedByYear(year, function(err, response) {
      var movieList = response.data.results;
      var topRatedMovies = [];
      _.forEach(movieList, function(movie) {
        var movieMod = {};
        movieMod.title = movie.title;
        movieMod.imageUrl = imageBaseUrl + movie.poster_path;
        topRatedMovies.push(movieMod);
      });
      $scope.topRatedMovies_1 = topRatedMovies.splice(0,5);
      $scope.topRatedMovies_2 = topRatedMovies.splice(0,5);
      $scope.topRatedMovies_3 = topRatedMovies.splice(0,5);
      $scope.topRatedMovies_4 = topRatedMovies.splice(0,5);
      $scope.search($scope.topRatedMovies_1[0].title);
    });

    $scope.search = function(title) {
      __Video.get(title + ' trailer', function(err, response){
        var movieData  = response.data.items[0];
        var videoId = movieData.id.videoId;
        $scope.videoUrl = $sce.trustAsResourceUrl('https://www.youtube.com/embed/' + videoId + '?autoplay=1');
        $('html, body').animate({scrollTop:0}, 'slow');
      });
    }
  }]);
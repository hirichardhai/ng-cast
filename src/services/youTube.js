angular.module('video-player')
  .service('youTube', function($http) {
  // TODO

    this.ytQuery = function(query, callback) {
      $http({
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search',
        params: {
          q: query,
          max: 5,
          key: window.YOUTUBE_API_KEY,
          part: 'snippet'
        },
      }).then(function successCallback(response) {
        callback(response);

      }, function errorCallback(response) {
        
        console.log('error, could not get data');
      
      });
    
    };
    
  }); 
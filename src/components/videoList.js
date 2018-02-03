angular.module('video-player')
  .component('videoList', {
    // TODO
    bindings: {
      videos: '<',
      clicker: '<'
    },

    templateUrl: 'src/templates/videoList.html'
  });

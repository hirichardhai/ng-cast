angular.module('video-player')
  .component('videoListEntry', {
    // TODO

    bindings: {
      video: '<',
      clicker: '<'
    },
	
    templateUrl: 'src/templates/videoListEntry.html'

  });

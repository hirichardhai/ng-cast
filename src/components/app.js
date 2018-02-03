angular.module('video-player')

  .component('app', {
    // TODO
    
    templateUrl: 'src/templates/app.html',

    controller: function() {
      this.videos = window.exampleVideoData;
      this.video = window.exampleVideoData[0];
      this.clicker = (video) => {
        //on click grab video id
        //replace this.video to video 
        this.video = video;   
      };
    }
  
  });

  

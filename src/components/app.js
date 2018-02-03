angular.module('video-player')

  .component('app', {
    // TODO
    
    templateUrl: "src/templates/app.html",

    controller: function() {
      this.exampleData = window.exampleVideoData;
      this.video = window.exampleVideoData[0];
    }
  
  });

  

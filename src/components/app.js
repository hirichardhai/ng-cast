angular.module('video-player')

  .component('app', {
    // TODO
    
    templateUrl: 'src/templates/app.html',

    controller: function(youTube) {
      this.videos = window.exampleVideoData;
      this.video = window.exampleVideoData[0];
      this.clicker = (video) => {
        //on click grab video id
        //replace this.video to video 
        console.log('ok');
        this.video = video;
        //work
      };
      this.search = (query) => {
        var test = (response) =>{

          this.videos = response.data.items;
          this.video = response.data.items[0];
        };
  
        youTube.ytQuery(query, test);
      };
    }
  
  });

  

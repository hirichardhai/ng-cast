angular.module('video-player')

  .component('search', {
    // TODO

    bindings: {
      search: '<'
    },

    controller: function() {


      this.search = (query) => {
        // youTube(query);
      console.log('clicked');
      };
    },

    templateUrl: 'src/templates/search.html'

  });

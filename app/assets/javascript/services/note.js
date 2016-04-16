(function () {
  'use strict';

  angular.module('NoteWrangler')

  .factory('Note', function($resource) {
    return $resource('/notes/:id', {id: '@id'}, {
      update: {
        method: 'PUT'
      }
    });
  });

})();

(function() {
  'use strict';

  angular.module('NoteWrangler')

  .controller('NotesShowController', function(Note, $routeParams, $location) {
    var vm = this;

    vm.note = Note.get({id: $routeParams.id});

    vm.deleteNote = function(note) {
      note.$remove().then(function() {
        $location.path('/notes');
      });
    };
  });

})();

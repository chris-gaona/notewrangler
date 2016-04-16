(function() {
  'use strict';

  angular.module('NoteWrangler')

  .controller('NotesShowController', function(Note, $routeParams) {
    var vm = this;

    vm.note = Note.get({id: $routeParams.id});

  });

})();

(function() {
  'use strict';

  angular.module('NoteWrangler')

  .controller('NotesIndexController', function(Note) {
    var vm = this;

    vm.notes = Note.query();
    
  });

})();

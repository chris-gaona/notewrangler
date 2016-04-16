(function() {
  'use strict';

  angular.module('NoteWrangler')

  .controller('NotesEditController', function(Note, $routeParams, $location) {
    var vm = this;

    vm.note = Note.get({id: $routeParams.id});

    console.log(vm.note);

    vm.isSubmitting = false;

    vm.saveNote = function(note) {
      vm.isSubmitting = true;

      note.$update().finally(function() {
        vm.isSubmitting = false;
        $location.path('/notes/' + note.id);
      });
    };
  });

})();

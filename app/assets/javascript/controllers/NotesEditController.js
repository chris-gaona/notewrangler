(function() {
  'use strict';

  angular.module('NoteWrangler')

  .controller('NotesEditController', function(Note, Category, User, $routeParams, $location) {
    var vm = this;

    vm.note = Note.get({id: $routeParams.id});

    vm.categories = Category.query();

    vm.users = User.query();

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

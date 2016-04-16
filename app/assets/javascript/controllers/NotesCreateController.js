(function() {
  'use strict';

  angular.module('NoteWrangler')

  .controller('NotesCreateController', function(Note, $location) {
    var vm = this;

    vm.note = new Note();

    vm.isSubmitting = false;

    vm.saveNote = function(note) {
      vm.isSubmitting = true;

      note.$save().then(function() {
        $location.path('/notes');

      }).catch(function(errors) {
        //validations
        
      }).finally(function() {
        vm.isSubmitting = false;

      });
    };

  });

})();

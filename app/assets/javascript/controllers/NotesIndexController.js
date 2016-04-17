(function() {
  'use strict';

  angular.module('NoteWrangler')

  .controller('NotesIndexController', function(Note) {
    var vm = this;

    vm.notes = Note.query();

    vm.search = {};

    //used window.sc in the console on browser
    //to check for the objects in vm.search
    // window.sc = vm.search;
  });

})();

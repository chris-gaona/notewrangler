(function() {
  'use strict';

  angular.module('NoteWrangler')

  .controller('UserIndexController', function(User) {
    var vm = this;

    vm.users = User.query();

  });

})();

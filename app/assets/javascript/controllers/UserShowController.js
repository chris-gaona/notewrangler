(function() {
  'use strict';

  angular.module('NoteWrangler')

  .controller('UserShowController', function(User, $routeParams) {
    var vm = this;

    vm.user = User.get({id: $routeParams.id});

  });

})();

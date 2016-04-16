(function () {
  'use strict';

  angular.module('NoteWrangler')

  .directive('nwPageNav', function() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'assets/templates/directives/nwPageNav.html',
      controller: function($location) {
        var vm = this;

        vm.isPage = function(name) {
          // if name coming into function is notes...
          //if it looks like notes and a slash comes before it...
          //and either is ending of line with $ ...
          //or | it has another slash after it
          //     /\/notes($|\/)/
          //return true or false

          return new RegExp("/" + name + "($|/)").test($location.path());
        };
      },
      controllerAs: 'nav'
    };
  });

})();

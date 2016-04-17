(function () {
  'use strict';

  angular.module('NoteWrangler')

  .directive('title', function($timeout) {
    return function(scope, element, attrs) {
      $timeout(function () {
        element.tooltip();
      }, 0);

      scope.$on('$destroy', function() {
        element.tooltip('destroy');
      });
    };
  });

})();

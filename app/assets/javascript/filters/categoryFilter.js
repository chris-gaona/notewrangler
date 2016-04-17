(function () {
  'use strict';

  angular.module('NoteWrangler')

  .filter('categoryFilter', function() {
    //collection is equal to everyone from ng-repeat
    //category is what comes after the colon
    return function(collection, category) {
      var newCollection = [];

      if (category && category.id) {

        for (var i = 0; i < collection.length; i++) {
          if (collection[i].categoryId === category.id) {
            newCollection.push(collection[i]);
          }
        }

        return newCollection;

      } else {
        return collection;
      }//if statement


    };
  });

})();

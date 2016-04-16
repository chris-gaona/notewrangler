(function() {
  'use strict';

  angular.module('NoteWrangler')

  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        redirectTo: '/notes'
      })

      .when('/notes', {
        templateUrl: 'assets/templates/notes/index.html',
        controller: 'NotesIndexController',
        controllerAs: 'allnotes'
      })

      .when('/notes/new', {
        templateUrl: 'assets/templates/notes/new.html',
        controller: 'NotesCreateController',
        controllerAs: 'newNote'
      })

      .when('/notes/:id', {
        templateUrl: 'assets/templates/notes/show.html',
        controller: 'NotesShowController',
        controllerAs: 'showNote'
      })

      .when('/notes/:id/edit', {
        templateUrl: 'assets/templates/notes/edit.html',
        controller: 'NotesEditController',
        controllerAs: 'editNote'
      })

      .when('/users', {
        templateUrl: 'assets/templates/users/index.html',
        controller: 'UsersIndexController',
        controllerAs: 'userIndex'
      })

      .when('/users/:id', {
        templateUrl: 'assets/templates/users/show.html',
        controller: 'UsersShowController',
        controllerAs: 'userShow'
      })
  });
})();

(function () {
  'use strict';

  angular.module('testMe', [
    'ui.router',
    'api.users',
    'components.users'
  ])
  .config(function ($urlRouterProvider) {
    $urlRouterProvider.otherwise('/users');
  });
})();

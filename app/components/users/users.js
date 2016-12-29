(function () {
  'use strict';
  angular.module('components.users', [])
  .controller('UsersController', function () {
    var vm = this;
  })
  .config(function ($stateProvider) {
    $stateProvider
      .state('users', {
        url: '/users',
        templateUrl: 'components/users/uers.html',
        controller: 'UsersController as uc'
      });
  });
})();

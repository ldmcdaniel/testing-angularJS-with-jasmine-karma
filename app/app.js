(function () {
  'use strict';

  angular.module('testMe', ['ui.router']).config(function ($urlRouteProvider) {
    $urlRouteProvider.otherwise("/");
  });
})();

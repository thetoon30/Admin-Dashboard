(function() {
  'use strict';

  var module = angular.module('singApp.package', [
    'ui.router'
  ]);

  module.config(appConfig);

  appConfig.$inject = ['$stateProvider'];

  function appConfig($stateProvider) {
    $stateProvider
      .state('app.package', {
        url: '/package',
        templateUrl: 'app/modules/package/package.html'
      })
  }
})();

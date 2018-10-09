(function () {
  'use strict';

  var module = angular.module('singApp.ecommerce.grid', [
    'ui.router'
  ]);

  module.config(appConfig);

  appConfig.$inject = ['$stateProvider'];

  function appConfig($stateProvider) {
    $stateProvider
      .state('app.ecommerce-product-grid', {
        url: '/ecommerce/products',
        templateUrl: 'app/modules/ecommerce-product-grid/ecommerce-product-grid.html'
      })
  }
})();

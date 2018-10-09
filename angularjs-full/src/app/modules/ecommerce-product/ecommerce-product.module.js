(function () {
  'use strict';

  var module = angular.module('singApp.ecommerce.product', ['ngSanitize']);

  module.config(appConfig);

  appConfig.$inject = ['$stateProvider'];

  function appConfig($stateProvider) {
    $stateProvider
      .state('app.ecommerce-product', {
        url: '/ecommerce/product',
        templateUrl: 'app/modules/ecommerce-product/ecommerce-product.html'
      })
  }
})();

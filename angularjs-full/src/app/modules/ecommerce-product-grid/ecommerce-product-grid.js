(function () {
  'use strict';

  angular.module('singApp.ecommerce.grid')
    .controller('ProductsCtrl', ProductsCtrl);

  angular.module('singApp.ecommerce.grid')
    .controller('PageCtrl', PageCtrl);

  angular.module('singApp.ecommerce.product')
    .controller('ProductsCtrl', ProductsCtrl);

  function PageCtrl($scope) {
    $scope.isSpecificPageOpened = false;
    $scope.isModalOpened = false;
    $scope.isPageOpened = false;
    $scope.prevTitle = '';
    $scope.title = '';
    $scope.optionsToDisplay = [];
    $scope.activeFilters = {};
    $scope.filters = [{
      id: 0,
      label: 'Type',
      options: ['Shoes', 'Boots', 'Trainers'],
    },
    {
      id: 1,
      label: 'Brands',
      options: ['All', 'Nike', 'Adidas'],
    },
    {
      id: 2,
      label: 'Size',
      options: [7, 8, 9, 10, 11, 12, 12.5, 13],
    },
    {
      id: 3,
      label: 'Colour',
      options: ['All', 'White', 'Black'],
    },
    {
      id: 4,
      label: 'Range',
      options: ['All', '-', 'None'],
    },
    {
      id: 5,
      label: 'Range',
      options: ['All', '-', 'None'],
    },
    {
      id: 6,
      label: 'Sort',
      options: ['Favourite', 'Price', 'Popular'],
    }];

    $scope.toggleFilter = function (field, value) {
      if ($scope.activeFilters[field] === value) {
        $scope.activeFilters[field] = null;
      } else {
        $scope.activeFilters[field] = value;
      }
    }

    $scope.closeModal = function () {
      $scope.isModalOpened = false;
      $scope.isPageOpened = false;
      $scope.isSpecificPageOpened = false;
      $scope.optionsToDisplay = [];
    }

    $scope.openModal = function (title) {
      $scope.title = title;
      $scope.isModalOpened = true;
    }

    $scope.openPage = function (label) {
      $scope.isPageOpened = true;
      $scope.titleBuffer = $scope.title;
      $scope.title = label;
      $scope.optionsToDisplay = $scope.filters.find(function (f) {
        return f.label === label
      }).options;
    }

    $scope.closePage = function () {
      $scope.isPageOpened = false;
      $scope.title = $scope.titleBuffer;
      $scope.optionsToDisplay = [];
    }

    $scope.openSpecificPage = function (label) {
      $scope.isSpecificPageOpened = true;
      $scope.isModalOpened = true;
      $scope.isPageOpened = true;
      $scope.title = label;
      $scope.optionsToDisplay = $scope.filters.find(function (f) {
        return f.label === label
      }).options;
    }

    $scope.isActive = function (field, value) {
      return $scope.activeFilters[field] === value;
    }
  }

  function ProductsCtrl($scope) {
    $scope.products = [{
      id: 0,
      starred: true,
      image: 'assets/images/products/product1.jpg',
      title: 'TRAINERS',
      subtitle: 'Trainers In White',
      price: 76,
      change: function () {
        this.starred = !this.starred;
      },
      isSale: false,
      rating: 4.7,
    },
    {
      id: 1,
      starred: false,
      label: 'Sale',
      image: 'assets/images/products/product5.jpeg',
      title: 'BOOTS',
      subtitle: 'Trainers In Blue',
      price: {
        old: 56,
        new: 45,
        percents: 20,
      },
      change: function () {
        this.starred = !this.starred;
      },
      isSale: true,
      rating: 4.5,
    },
    {
      id: 2,
      starred: false,
      label: 'New',
      image: 'assets/images/products/product4.jpeg',
      title: 'FLAT SANDALS',
      subtitle: 'Trainers In Black',
      price: 55,
      change: function () {
        this.starred = !this.starred;
      },
      isSale: false,
      rating: 5.0,
    },
    {
      id: 3,
      starred: false,
      image: 'assets/images/products/product7.jpg',
      title: 'TRAINERS',
      subtitle: 'Trainers In White',
      price: {
        old: 101,
        new: 70,
        percents: 30,
      },
      change: function () {
        this.starred = !this.starred;
      },
      isSale: true,
      rating: 4.8,
    },
    {
      id: 4,
      starred: false,
      image: 'assets/images/products/product6.jpg',
      title: 'TRAINERS',
      subtitle: 'Trainers In White',
      price: 76,
      change: function () {
        this.starred = !this.starred;
      },
      isSale: false,
      rating: 4.9,
    },
    {
      id: 5,
      starred: true,
      label: 'New',
      image: 'assets/images/products/product3.jpg',
      title: 'BOOTS',
      subtitle: 'Trainers In Orange',
      price: {
        old: 56,
        new: 45,
        percents: 20,
      },
      change: function () {
        this.starred = !this.starred;
      },
      isSale: true,
      rating: 4.2,
    },
    {
      id: 6,
      starred: false,
      label: 'Sale',
      image: 'assets/images/products/product8.jpg',
      title: 'TRAINERS',
      subtitle: 'Trainers In White',
      price: {
        old: 101,
        new: 70,
        percents: 30,
      },
      change: function () {
        this.starred = !this.starred;
      },
      isSale: true,
      rating: 4.0,
    },
    {
      id: 7,
      starred: false,
      label: 'New',
      image: 'assets/images/products/product2.jpg',
      title: 'TRAINERS',
      subtitle: 'Trainers In White',
      price: 55,
      change: function () {
        this.starred = !this.starred;
      },
      isSale: false,
      rating: 4.9,
    },
    ];
  };

})();

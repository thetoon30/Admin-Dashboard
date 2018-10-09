(function () {
  'use strict';

  angular.module('singApp.ecommerce.product')
    .controller('SelectsController', SelectsController)
    .controller('StarController', StarController)
    .controller('DescriptionController', DescriptionController)
    .directive('postRepeatDirective', carouselDemo);

  function SelectsController($scope) {
    $scope.size = null;
    $scope.quantility = 1;

    $scope.changeSize = function (value) {
      $scope.size = value;
    };

    $scope.changeQuantility = function (value) {
      $scope.quantility = value;
    };
  };

  function StarController($scope) {
    $scope.starred = false;

    $scope.changeStarredBanner = function () {
      $scope.starred = !$scope.starred;
    };
  };

  function DescriptionController($scope) {
    $scope.description = [
      {
        id: 0,
        extraClass: 'description-info',
        title: 'PRODUCT DESCRIPTION',
        body: '<p class="dot-before">Sneakers (also known as athletic shoes, tennis shoes, gym shoes, runners, takkies, or trainers) are shoes primarily designed for sports or other forms of physical exercise, but which are now also often used for everyday wear.</p><p class="dot-before">The term generally describes a type of footwear with a flexible sole made of rubber or synthetic material and an upper part made of leather or synthetic materials.</p>',
      },
      {
        id: 1,
        title: 'PRODUCT CODE',
        body: 135234,
      },
      {
        id: 2,
        title: 'SHARE',
        body: '<div>Share photo with a tag <a href="#">#whitetrainers</a><div class="description-social"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-instagram"></i></a><a href="#"><i class="fa fa-twitter"></i></a></div></div>',
      },
      {
        id: 3,
        title: 'TECHNOLOGY',
        body: '<ul class="description-list"><li class="dot-before">Ollie patch</li><li class="dot-before">Cup soles</li><li class="dot-before">Vulcanized rubber soles</li></ul>',
      },
      {
        id: 4,
        title: 'RATING & REVIEWS',
        body: '<div><div class="rating">4.8<i class="fa fa-star"></i></div><div class="reviews">32 Reviews</div><a href="#">Read all</a></div>',
      },
    ];
  };

  function carouselDemo(jQuery) {
    return function (scope, element, attrs) {
      var slider = $('.slick');
      var slidesToShow = calc();

      function calc() {
        var width = window.innerWidth;
        var slides = 4;

        if (width < 360) {
          slides = 1;
        } else if (width < 575) {
          slides = 2;
        } else if (width < 992) {
          slides = 3;
        }

        return slides;
      }

      function initSlider(s) {
        if (scope.$last) {
          slider.slick({
            slidesToShow: s,
            slidesToScroll: 1,
            infinite: false,
            nextArrow: '<button class="carousel-btn carousel-btn--right"><i class="fa fa-angle-right fa-2x"></i></button>',
            prevArrow: '<button class="carousel-btn carousel-btn--left"><i class="fa fa-angle-left fa-2x"></i></button>',
          });
        }
      }

      initSlider(slidesToShow);

      $(window).on('resize', function () {
        var slides = calc();

        if (slides !== slidesToShow) {
          slidesToShow = slides;
          slider.slick('slickSetOption', 'slidesToShow', slidesToShow);
        }
      })
    };
  };

})();

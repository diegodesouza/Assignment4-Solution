(function () {
  'use strict';

  angular.module('MenuApp')
    .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {

    // Redirect to home page if no other URL matches
    $urlRouterProvider.otherwise('/');

    // *** Set up UI states ***
    $stateProvider

    // Home page
      .state('home', {
        url: '/',
        templateUrl: 'src/templates/home.template.html'
      })

    // Categories page
      .state('categories', {
        url: '/categories',
        templateUrl: 'src/templates/categories.html',
        controller: 'CategoriesComponentController as ctrl',
        resolve: {
          categories: ['MenuDataService', function (MenuDataService) {
            return MenuDataService.getAllCategories();
          }]
        }
      })

    // Items page
      .state('items', {
        url: '/items/{categoryShortName}',
        templateUrl: 'src/templates/items.html',
        controller: 'ItemsComponentController as ctrl',
        resolve: {
          items: ['$stateParams', 'MenuDataService', function($stateParams, MenuDataService) {
            return MenuDataService.getItemsForCategory($stateParams.categoryShortName)
          }]
        }
      });
  }
})();

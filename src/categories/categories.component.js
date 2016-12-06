(function () {
  'use strict';

  angular.module('data')
    .component('categories', {
      templateUrl: 'src/categories/categories.template.html',
      bindings: {
        categories: '<'
      }
    });

})();

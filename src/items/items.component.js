(function () {
  'use strict';

  angular.module('data')
    .component('items', {
      templateUrl: 'src/items/items.template.html',
      bindings: {
        items: '<'
      }
    });
})();

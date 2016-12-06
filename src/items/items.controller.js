(function () {
  'use strict';

  angular.module('MenuApp')
    .controller('ItemsComponentController', ItemsComponentController);

  ItemsComponentController.$inject = ['$stateParams','items'];
  function ItemsComponentController($stateParams, items) {
    this.items = items;
  }

})();

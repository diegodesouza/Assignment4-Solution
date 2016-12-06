(function () {
  'use strict';

  angular.module('MenuApp')
    .controller('ItemsComponentController', ItemsComponentController);

  ItemsComponentController.$inject = ['items'];
  function ItemsComponentController(items) {
    this.items = items;
  }

})();

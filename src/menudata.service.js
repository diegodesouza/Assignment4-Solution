(function () {

  angular.module('data')
    .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
    .service('MenuDataService', MenuDataService);


  MenuDataService.$inject = ['$q', '$http', 'ApiBasePath']
  function MenuDataService($q, $http, ApiBasePath) {
    var service = this;

    service.getAllCategories = function() {
      return $http({
        method: "GET",
        url: (ApiBasePath + "/categories.json")
      }).then(function(response){
        return response.data;
      });
    }

    service.getItemsForCategory = function(categoryShortName) {
      return $http({
        method: "GET",
        url: ('https://davids-restaurant.herokuapp.com/menu_items.json?category='+categoryShortName)
        // url: (ApiBasePath + "/menu_items.json"),
        // params: {
          // category: categoryShortName
        // }
      }).then(function(response){
        console.log('respone', response)
        return response.data.menu_items;
      });
    }
  }
})();

(function() {
    "use strict"
    class productsListController {
        constructor() {

            this.templateUrl = 'views/productsList.html';

            this.controller = function (productsService) {
                this.products = productsService.get();
            }
        };

    }

    angular.module('shop')
    .component('productsList', new productsListController)

})();

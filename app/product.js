(function() {
    "use strict"
    class productController {
        constructor(cartService) {
            this.bindings = {
                product: '<'
            }

            this.templateUrl = 'views/product.html';

            this.controller = function (cartService) {

                this.addProduct = function (product) {
                    console.log(product);
                    cartService.addProduct(product);
                }
            }
         };
    }

    angular.module('shop')
    .component('product', new productController())

})();

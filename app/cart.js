(function() {
    "use strict"
    class cartController {
        constructor(cartService) {
            this.templateUrl = 'views/cart.html';

            this.productCart = cartService.getAllProducts();
        };

    }

    angular.module('shop')
    .component('cart', new cartController())

})();

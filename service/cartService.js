(function () {
    'use strict'

    function cartService() {
        let productsInCart = [];

        return {
            getAllProducts() {
                return productsInCart;
            },

            addProduct(product) {
                console.log(product);
                productsInCart.push(product);
                console.log(productsInCart);
            },

            removeProduct(productId) {

            }

        };
    }

    angular.module('shop')
    .factory('cartService', cartService)
})();
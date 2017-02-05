angular.module('shop', ["ngRoute"])
.config(function ($routeProvider) {
    $routeProvider.when('/cart', {
        templateUrl: 'views/cart.html'
    });
});
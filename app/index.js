(function() {
    "use strict"
    class shopMainController {
        constructor() {
            this.template = `
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="navbar navbar-inverse"></div>
                        </div>
                        <div class="col-md-12">
                            search
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <products-list></products-list>
                        <cart></cart>
                    </div>
                </div>
            `;
         };

    }

    angular.module('shop')
    .component('shopComponent', new shopMainController())

})();

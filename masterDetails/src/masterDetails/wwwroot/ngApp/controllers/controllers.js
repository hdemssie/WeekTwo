var MasterDetails;
(function (MasterDetails) {
    var Controllers;
    (function (Controllers) {
        var Product = (function () {
            function Product(id, name, price) {
                this.id = id;
                this.name = name;
                this.price = price;
            }
            return Product;
        }());
        var products = [
            new Product(1, "milk", 2.99),
            new Product(2, "cheese", 2.99),
            new Product(3, "laptop", 900),
            new Product(5, "rubik's cube", 5.99)
        ];
        var MasterControllers = (function () {
            function MasterControllers() {
                this.products = products;
            }
            return MasterControllers;
        }());
        Controllers.MasterControllers = MasterControllers;
        var DetailsControllers = (function () {
            function DetailsControllers($stateParams) {
                this.product = products.filter(function (p) { return p.id == $stateParams["id"]; })[0];
                // { return {p.id == $stateParams[`id`] })[0]; the fat arrow function with curly brace showes that we will handle it 
            }
            return DetailsControllers;
        }());
        Controllers.DetailsControllers = DetailsControllers;
    })(Controllers = MasterDetails.Controllers || (MasterDetails.Controllers = {}));
})(MasterDetails || (MasterDetails = {}));

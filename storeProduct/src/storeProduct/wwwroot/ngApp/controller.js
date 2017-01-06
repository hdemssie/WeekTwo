var StoreProductApp;
(function (StoreProductApp) {
    var StoreProductController = (function () {
        function StoreProductController() {
            this.food = [
                { name: "Kale", price: 0.99, isExpensive: true },
                { name: "Rosemary", price: 0.56, isExpensive: false },
                { name: "Olive", price: 2.99, isExpensive: true }
            ];
            this.clothes = [
                { name: "Suit", price: 450.00, isExpensive: true },
                { name: "Dress", price: 150.00, isExpensive: true },
                { name: "Jeans", price: 100.00, isExpensive: false }
            ];
            this.toys = [
                { name: "Dinky", price: 25.00, isExpensive: true },
                { name: "Corgi", price: 20.00, isExpensive: false },
                { name: "Lego", price: 140.00, isExpensive: false }
            ];
        }
        return StoreProductController;
    }());
    angular.module("StoreProductApp").controller("StoreProductController", StoreProductController);
})(StoreProductApp || (StoreProductApp = {}));

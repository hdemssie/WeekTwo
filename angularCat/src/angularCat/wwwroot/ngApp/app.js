var AngularCarApp;
(function (AngularCarApp) {
    angular.module("AngularCarApp", []);
    var Car = (function () {
        function Car(year, make, model) {
            this.year = year;
            this.make = make;
            this.model = model;
        }
        return Car;
    }());
    var CarController = (function () {
        function CarController() {
            this.cars = [
                new Car(1969, "Mazda", "226"),
                new Car(1972, "volkswagen", "cc"),
                new Car(1979, "chevorle", "K- 1500")
            ];
        }
        return CarController;
    }());
    angular.module("AngularCarApp").controller("CarController", CarController);
})(AngularCarApp || (AngularCarApp = {}));

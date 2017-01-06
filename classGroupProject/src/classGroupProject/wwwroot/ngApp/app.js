var CalcApp;
(function (CalcApp) {
    angular.module("CalcApp", []);
    var CalcController = (function () {
        function CalcController() {
        }
        return CalcController;
    }());
    angular.module("CalcApp").controller("Calcontroller", CalcController);
})(CalcApp || (CalcApp = {}));

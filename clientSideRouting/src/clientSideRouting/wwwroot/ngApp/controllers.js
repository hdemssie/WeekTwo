var RoutingApp;
(function (RoutingApp) {
    var controllers;
    (function (controllers) {
        //Define a HomeController for the home state
        var HomeController = (function () {
            function HomeController() {
                this.message = " Hello, this is the message property on the home controller";
            }
            return HomeController;
        }());
        controllers.HomeController = HomeController;
        //Define a HomeController for the about state
        var AboutController = (function () {
            function AboutController() {
                this.message = "Hello, this the message property on about controller";
            }
            return AboutController;
        }());
        controllers.AboutController = AboutController;
    })(controllers = RoutingApp.controllers || (RoutingApp.controllers = {}));
})(RoutingApp || (RoutingApp = {}));

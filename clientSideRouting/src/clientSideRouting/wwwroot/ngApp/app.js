var RoutingApp;
(function (RoutingApp) {
    angular.module("RoutingApp", ["ui.router"]).config(function ($stateProvider, $locationProvider, $urlRouterProvider) {
        $stateProvider
            .state("home", {
            url: "/",
            templateUrl: "ngApp/home.html",
            controller: RoutingApp.controllers.HomeController,
            controllerAs: "c"
        })
            .state("about", {
            url: "/about",
            templateUrl: "ngApp/about.html",
            controller: RoutingApp.controllers.AboutController,
            controllerAs: "c"
        });
        $urlRouterProvider.otherwise("/");
        $locationProvider.html5Mode(true);
    });
})(RoutingApp || (RoutingApp = {}));

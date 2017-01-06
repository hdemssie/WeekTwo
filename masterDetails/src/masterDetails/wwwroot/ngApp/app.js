var MasterDetails;
(function (MasterDetails) {
    angular.module("MasterDetails", ["ui.router"]).config(function ($stateProvider, $locationProvider, $urlRouterProvider) {
        $stateProvider
            .state("master", {
            url: "/",
            templateUrl: "ngApp/views/master.html",
            controller: MasterDetails.Controllers.MasterControllers,
            controllerAs: "c"
        })
            .state("details", {
            url: "/details/:id",
            templateUrl: "ngApp/views/details.html",
            controller: MasterDetails.Controllers.DetailsControllers,
            controllerAs: "c"
        });
        $urlRouterProvider.otherwise("/");
        $locationProvider.html5Mode(true);
    });
})(MasterDetails || (MasterDetails = {}));

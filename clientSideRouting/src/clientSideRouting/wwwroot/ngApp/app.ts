namespace RoutingApp {
    angular.module(`RoutingApp`, [`ui.router`]).config((
        $stateProvider: ng.ui.IStateProvider,
        $locationProvider: ng.ILocationProvider,
        $urlRouterProvider: ng.ui.IUrlRouterProvider
    ) => {
        $stateProvider
            .state(`home`, {
                url: `/`,
                templateUrl: `ngApp/home.html`,
                controller: RoutingApp.controllers.HomeController,
                controllerAs: `c`

            })
            .state(`about`, {
                url: `/about`,
                templateUrl: `ngApp/about.html`,
                controller: RoutingApp.controllers.AboutController,
                controllerAs: `c`

            })
        $urlRouterProvider.otherwise(`/`);
        $locationProvider.html5Mode(true);
    });
}
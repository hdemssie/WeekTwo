namespace MasterDetails {
    angular.module(`MasterDetails`, [`ui.router`]).config((

        $stateProvider: ng.ui.IStateProvider,
        $locationProvider: ng.ILocationProvider,
        $urlRouterProvider: ng.ui.IUrlRouterProvider
    ) => {
        $stateProvider
            .state(`master`, {

                url: `/`,
                templateUrl: `ngApp/views/master.html`,
                controller: MasterDetails.Controllers.MasterControllers,
                controllerAs: `c`
            })
            .state(`details`, {
                url: `/details/:id`,
                templateUrl: `ngApp/views/details.html`,
                controller: MasterDetails.Controllers.DetailsControllers,
                controllerAs: `c`
            })
        $urlRouterProvider.otherwise(`/`);
        $locationProvider.html5Mode(true);
    })


}
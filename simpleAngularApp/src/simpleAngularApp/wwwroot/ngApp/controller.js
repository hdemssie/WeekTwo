var MovieApp;
(function (MovieApp) {
    var MovieListController = (function () {
        function MovieListController() {
            this.movies = [
                { id: 1, title: "Batman", director: "Nolan" },
                { id: 2, title: "Star War: A New Hope", director: "Lucas" },
                { id: 3, title: "Jurassic Park", director: "Spielberg" }
            ];
        }
        return MovieListController;
    }());
    angular.module("MovieApp").controller("MovieListController", MovieListController);
})(MovieApp || (MovieApp = {}));

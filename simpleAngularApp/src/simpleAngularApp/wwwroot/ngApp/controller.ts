namespace MovieApp {
    class MovieListController {

        public movies;
        constructor() {
            this.movies = [

                { id: 1, title: `Batman`, director: `Nolan` },
                { id: 2, title: `Star War: A New Hope`, director: `Lucas` },
                { id: 3, title: `Jurassic Park`, director: `Spielberg` }
            ];
    }

}
angular.module(`MovieApp`).controller(`MovieListController`, MovieListController);
}
namespace PetApp {
    class PetListController {

       // public pets;
        public dog;
        public bunnie;
        constructor() {
            this.dog = [

                { id: 1, name: `Max`, color: `Brown`, img: `Dog.jpeg`},
                { id: 2, name: `Buddy`, color: `Black and White`, img: `Dog1.jpg` },
                {id: 3, name: `Lucy`, color: `Light Brown`, img: `Dog2.jpg` }
            ];
            this.bunnie = [

                { id: 1, name: `Bugs Bunny`, size: `Tall`, img: `bunnie.jpeg`},
                { id: 2, name: `Cottontail`, size: `Small`, img: `bunnie1.jpeg` },
                { id: 3, name: `Easter Rabbit`, size: `Small`, img: `bunnie2.jpeg`}
            ]
        }
    }

    angular.module(`PetApp`).controller(`PetListController`, PetListController);
}
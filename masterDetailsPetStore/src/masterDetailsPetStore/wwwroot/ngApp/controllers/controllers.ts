namespace MasterDetails.Controllers {
    abstract class Animal {
        constructor(public id: number, public name: string, public color: string, public size: number, public img: string) {

        }
       let dogs: Animal[] =[

            new Animal(1, name: `Max`, color: `Brown`, img: `Dog.jpeg`),
            new Animal(2, name: `Buddy`, color: `Black and White`, img: `Dog1.jpg`),
            new Animal (3, name: `Lucy`, color: `Light Brown`, img: `Dog2.jpg`)
    ];

    export class MasterDetails {
        public dogs;
        constructor(public id: number, public name: string, public color: string, public img: string) {
            this.pets = pets;
        }

    }
    export class DogDetailsControllers {
        public dogs;
        constructor($stateParams: ng.ui.IStateParamsService) {
            this.pet = pets.filter((d) => d.id == $stateParams[`id`])[0];
        }
    }
        
        public bunnie;
        let bunnies: Animal[] = [


            new Animal (1, name: `Bugs Bunny`, size: `Tall`, img: `bunnie.jpeg` ),
            new Animal (2, name: `Cottontail`, size: `Small`, img: `bunnie1.jpeg` ),
            new Animal (3, name: `Easter Rabbit`, size: `Small`, img: `bunnie2.jpeg`)
        ]

    export class MasterDetails {
        public pets;
        constructor(public id: number, public name: string,  public size: number, public img: string) {
            this.pets = pets;
        }

    }
    export class BunnieDetailsControllers {
        public pet;
        constructor($stateParams: ng.ui.IStateParamsService) {
            this.pet = pets.filter((b) => b.id == $stateParams[`id`])[0];
        }
    }
}



angular.module(`PetApp`).controller(`Pet`, Pet);
}

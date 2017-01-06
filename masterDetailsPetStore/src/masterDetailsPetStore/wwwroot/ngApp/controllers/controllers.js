var MasterDetails;
(function (MasterDetails_1) {
    var Controllers;
    (function (Controllers) {
        var Animal = (function () {
            function Animal(id, name, color, size, img) {
                this.id = id;
                this.name = name;
                this.color = color;
                this.size = size;
                this.img = img;
            }
            return Animal;
        }());
        var dogs = [
            new Animal(1, name, "Max", color, "Brown", img, "Dog.jpeg"),
            new Animal(2, name, "Buddy", color, "Black and White", img, "Dog1.jpg"),
            new Animal(3, name, "Lucy", color, "Light Brown", img, "Dog2.jpg")
        ];
        var MasterDetails = (function () {
            function MasterDetails(id, name, color, img) {
                this.id = id;
                this.name = name;
                this.color = color;
                this.img = img;
                this.pets = pets;
            }
            return MasterDetails;
        }());
        Controllers.MasterDetails = MasterDetails;
        var DogDetailsControllers = (function () {
            function DogDetailsControllers($stateParams) {
                this.pet = pets.filter(function (d) { return d.id == $stateParams["id"]; })[0];
            }
            return DogDetailsControllers;
        }());
        Controllers.DogDetailsControllers = DogDetailsControllers;
        bunnie;
        var bunnies = [
            new Animal(1, name, "Bugs Bunny", size, "Tall", img, "bunnie.jpeg"),
            new Animal(2, name, "Cottontail", size, "Small", img, "bunnie1.jpeg"),
            new Animal(3, name, "Easter Rabbit", size, "Small", img, "bunnie2.jpeg")
        ];
        var MasterDetails = (function () {
            function MasterDetails(id, name, size, img) {
                this.id = id;
                this.name = name;
                this.size = size;
                this.img = img;
                this.pets = pets;
            }
            return MasterDetails;
        }());
        Controllers.MasterDetails = MasterDetails;
        var BunnieDetailsControllers = (function () {
            function BunnieDetailsControllers($stateParams) {
                this.pet = pets.filter(function (b) { return b.id == $stateParams["id"]; })[0];
            }
            return BunnieDetailsControllers;
        }());
        Controllers.BunnieDetailsControllers = BunnieDetailsControllers;
    })(Controllers = MasterDetails_1.Controllers || (MasterDetails_1.Controllers = {}));
})(MasterDetails || (MasterDetails = {}));
angular.module("PetApp").controller("Pet", Pet);

namespace AngularCarApp {
    angular.module(`AngularCarApp`, []);

    class Car {
        constructor(public year: number, public make: string, public model: string) { }
    }
    class CarController {
        public cars:Car[] = [

            new Car(1969, `Mazda`, `226`),
            new Car(1972, `volkswagen`, `cc`),
            new Car(1979, `chevorle`, `K- 1500`)
         ];

    }
    angular.module(`AngularCarApp`).controller(`CarController`, CarController);

}
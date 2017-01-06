namespace MasterDetails.Controllers {
    class Product{
        constructor(public id: number, public name: string, public price: number) { }
    }
    let products: Product[] = [
        new Product(1, `milk`, 2.99),
        new Product(2, `cheese`, 2.99),
        new Product(3, `laptop`, 900),
        new Product(5, `rubik's cube`, 5.99)

    ];
    
    export class MasterControllers {
        public products;
        constructor() {
            this.products = products;
        }

    }
    export class DetailsControllers {
        public product;
        constructor($stateParams: ng.ui.IStateParamsService) {
            this.product = products.filter((p) => p.id == $stateParams[`id`])[0];
     // { return {p.id == $stateParams[`id`] })[0]; the fat arrow function with curly brace showes that we will handle it 
        }
    }

}
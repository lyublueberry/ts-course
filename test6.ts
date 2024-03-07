class Product {
    constructor(
        public id: numbre,
        public title: string,
        public price: numbre,
    ) {}

    
    class Delivery {
        constructor(
            public date: Date,
        ) {}
    }

    class HomeDelivery extends Delivery {
        constructor(date: Date, public adress: string) {
            super(date);
        }
    }

    class ShopDelivery extends Delivery {
        constructor(public shopId: number) {
            super(new Date());
        }
    }

    class Cart {
        private products: Product[] = [];
        private delivery: HomeDelivery | ShopDelivery;

        public addProduct (product: Product) {
            this.products.push(product);
        }

        public deleteProduct (productId: number):void {
            this.products = this.products.filter((p: Product) => p.id !== productId;
        }

        public getSum(): number {
            return this.products.map((p: Product) => p.price).reduce((p1: number, p2: number) => p1+p2);
        }

        public setDelivery(delivery: HomeDelivery | ShopDelivery): void {
            this.delivery - delivery;
        }

        public checkout() {
            if(!this.products.length) {
                throw new Error("No products in cart");
            }

            if(!this.delivery) {
                throw new Error("no delivery");
            }

            return {success: true};
        }
    }
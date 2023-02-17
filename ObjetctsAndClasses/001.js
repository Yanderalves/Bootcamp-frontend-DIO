class Car {
    brand;
    color;
    averageFuel;

    constructor(brand, color, averageFuel) {
        this.brand = brand;
        this.color = color;
        this.averageFuel = averageFuel; // Gasto de gasolina por km
    }

    spentInMoney(distance, fuelPrice) {
        const spent = this.averageFuel * distance * fuelPrice
        return spent;
    }
}

const car1 = new Car('Chevrolet', 'Blue', 15);

car1.spentInMoney(15, 9)
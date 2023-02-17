class Person {
    name;
    weight;
    height;

    constructor(_name, _weight, _height) {
        this.name = _name;
        this.weight = _weight;
        this.height = _height;
    }

    talkBMI() { // Falar IMC
        const BMI = (this.weight / (this.height * this.height)).toFixed(2);
        console.log(`My BMI is ${BMI}`)
    }
}

const jose = new Person('José', 70, 1.75)

console.log(jose)

jose.talkBMI()
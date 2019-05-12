class Car {
  constructor(doors, engine, color) {
    this.doors = doors;
    this.engine = engine;
    this.color = color;
  }

  carStarts() {
    return `This car has ${this.doors} doors, a ${this.engine} engine an a beautiful ${this.color} color!`;
  }

  static totalDoors(car1, car2) {
    const doors1 = car1.doors;
    const doors2 = car2.doors;
    return doors1 + doors2;
  }
}

const cx5 = new Car(4, 'V6', 'grey');

console.log(cx5);
console.log(cx5.carStarts());

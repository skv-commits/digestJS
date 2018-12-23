let paint = target => {
  target.color = "red";
};
let paintWithPassedColor = color => target => {
  target.color = color;
};
let equipWithMusicPlayer = target => {
  target.musicPlayer = "Bose";
};

let descriptor = {
  value: function() {
    return this.color;
  },
  writable: true, // if i make this value to false , it cannot be overriden
  configurable: true,
  enumerable: true
};

let readOnly = (target, key, descriptor) => {
  descriptor.writable = false;
  return descriptor;
};

@equipWithMusicPlayer
@paintWithPassedColor("black")
class Car {
  constructor(color) {
    this.color = color;
  }
  @readOnly
  getColor() {
    return this.color;
  }
}

// Object.defineProperty(Car.prototype, "getColor", descriptor);

const newRedCar = new Car("Red");

//newRedCar.getColor = () => "Green Color"; // method overriding but i can prevent this using decorator

console.log(Car.color, Car.musicPlayer, newRedCar.getColor());

// lets paint with different color

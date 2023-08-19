'use strict';
/*
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  this.calcAge = function () {
    console.log(2037 - this.birthYear);
  };
};
const levi = new Person(`Levi`, 1998);
console.log(levi);

// 1. New obj created
// 2. Function is called, this = new obj
// 3. new obj linked to prototype
// 4. function automatically return the new obj

const matilda = new Person(`Matilda`, 2017);
const jack = new Person(`Jack`, 1975);
console.log(matilda, jack);

// const jay = `Jay`;
console.log(levi instanceof Person);
// console.log(jay instanceof Person);

// Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

levi.calcAge();
matilda.calcAge();

console.log(levi.__proto__);
console.log(levi.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(levi));
console.log(Person.prototype.isPrototypeOf(Person));
console.log(levi);

Person.prototype.species = `Homo Sapiens`;
console.log(levi, matilda);
console.log(levi.species);

console.log(levi.hasOwnProperty(`firstName`));
console.log(levi.hasOwnProperty(`species`));

console.log(levi.__proto__);
// Object.prototype (top of the Prototype Chain)
console.log(levi.__proto__.__proto__);
console.log(levi.__proto__.__proto__.__proto__);

console.log(Person.prototype.constructor);
console.dir(Person.prototype.constructor);

const arr = [3, 6, 6, 5, 6, 9, 9];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique());

const h1 = document.querySelector(`h1`);
console.dir(x => x + 1);
*/
/*
// Coding Challenge 1:
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed}km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed}km/h`);
};

const BMW = new Car(`BMW`, 120);
const Mercedes = new Car(`Mercedes`, 95);

console.log(BMW);
BMW.accelerate();
BMW.accelerate();
BMW.brake();
BMW.accelerate();
*/

// class expression
// const PersonCl1 = class {};

// class declaration
class PersonCl2 {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }
}

const jessica = new PersonCl2(`Jessica`, 1996);
console.log(jessica);
jessica.calcAge();

console.log(jessica.__proto__ === PersonCl2.prototype);

// PersonCl2.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };
jessica.greet();

// 1. Classes are NOT hoisted
// 2. Classes are first-class citizes
// 3. Classes are executed in strict mode

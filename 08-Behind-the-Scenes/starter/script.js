'use strict';
/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, are the ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1991 && birthYear <= 1996) {
      var millenial = true;

      // Creating NEW variable with same name as outher scope's variable
      const firstName = `Steven`;

      //Reassiging outher scope's variable
      console.log(output);

      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
      output = `NEW OUTPUT!`;
    }
    // console.log(str);
    console.log(millenial);
    // console.log(add(2, 3));
  }

  printAge();

  return age;
}

const firstName = `Jonas`;
calcAge(1991);
// console.log(age);
// printAge();


// Hoisting and TDZ in practice

//Variavles
console.log(me);
// console.log(job);
// console.log(year);

var me = `Jonas`;
let job = `teacher`;
const year = 1991;

//Functions
console.log(addDecl(2, 3));
console.log(addExpr(2, 3));
console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Example
console.log(numberProducts);
if (!numberProducts) deleteShoppingCart();

var numberProducts = 10;

function deleteShoppingCart() {
  console.log(`All products deleted!`);
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);



//THIS keyword:

console.log(this);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAge(1991);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAgeArrow(1980);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
jonas.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge;
matilda.calcAge();

const f = jonas.calcAge;
f();


var firstName = `Matilda`;

const jonas = {
  firstName: `Jonas`,
  year: 1991,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);

    const isMillenial = function () {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  greet: () => console.log(`Hey ${this.firstName}`),
};
jonas.greet();
jonas.calcAge();


var firstName = `Matilda`;


const jonas = {
  firstName: `Jonas`,
  year: 1991,
  calcAge: function () {
    console.log(2037 - this.year);

    // Solution 1
    // const self = this; // self or that
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    // Solution 2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };

    isMillenial();
  },

  greet: () => console.log(`Hey ${this.firstName}`),
};
jonas.greet();
jonas.calcAge();

// arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 5, 8);


// Changing values:
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

// Copying objects and then changing them.
const me = {
  name: `Jonas`,
  age: 30,
};


const friend = me;
friend.age = 27;
console.log(`Friend`, friend);
console.log(`Me`, me);
*/

// Primitive types
let lastName = `Williams`;
let oldLastName = lastName;
lastName = `Davis`;
console.log(lastName, oldLastName);

// Reference types
const jessica = {
  firstName: `Jessica`,
  lastName: `Williams`,
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = `Davis`;
console.log(`Before marriage:`, jessica);
console.log(`After marriage:`, marriedJessica);

// marriedJessica = {};

// Coping objects
const jessica2 = {
  firstName: `Jessica`,
  lastName: `Williams`,
  age: 27,
  family: [`Alice`, `Bob`],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = `Davis`;

jessicaCopy.family.push(`Mary`);
jessicaCopy.family.push(`John`);

console.log(`Before marriage:`, jessica2);
console.log(`After marriage:`, jessicaCopy);

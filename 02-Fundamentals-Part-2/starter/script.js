/*--------------------------1 STRICT MODE-------------------------*/
"use strict";
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log(`I can drive :D`);

const inferface = "Audio";
const private = 435;
*/

/*--------------------------2 FUNCTIONS-------------------------*/
/*
function logger() {
  console.log(`My name is Jonas.`);
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(3, 3);
console.log(appleOrangeJuice);
*/

/*--------------------------3 FUNCTION DECLARATIONS VS EXPRESSIONS-------------------------*/
/*
// function calcAge1(birthYear) {
//   const age = 2037 - birthYear;
//   return age;
// }

//Function Declarations
function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const age1 = calcAge1(1991);

//Function Expressions
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calcAge2(1991);

console.log(age1, age2);
*/

/*--------------------------4 ARROW FUNCTIONS-------------------------*/
/*
// //Function Expression
// const calcAge2 = function (birthYear){
// return 2037 - birthYear;
// }


//Arrow Function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);



const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037- birthYear;
  const retirement = 65 - age;
  //return retirement;
  return `${firstName} retires in ${retirement} years.`;
}

console.log(yearsUntilRetirement(1991, `Jonas`));
console.log(yearsUntilRetirement(1998, `Levi`));
*/



/*--------------------------5 FUNCTIONS CALLING OTHER  FUNCTIONS-------------------------*/
/*
function cutFruitPieces(fruit){
  return fruit * 4;
}


function fruitProcessor(apples, oranges){
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juice = `Juice with ${applePieces} piece of apples and ${orangePieces} piece of oranges.`;
  return juice;
}

console.log(fruitProcessor(2,3));
*/



/*--------------------------6 REVIEWING FUNCTIONS-------------------------*/
/*
//CONVERT THIS ARROW FUNTION TO A NORMAL FUNCTION EXPRESSION:
// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - birthYear;
//   return `${firstName} retires in ${retirement} years.`;
// }

// const yearsUntilRetirement = function (birthYear, firstName) {
//   const age = 2037 - birthYear;
//   const retirement = 65 - birthYear;
//   return `${firstName} retires in ${retirement} years.`;
// }

//CONVERT THIS FUNTION EXPRESSION TO DOUBLE FUNTCION

const calcAge = function (year){
  return 2037 -  year;
}

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge (birthYear);
  const retirement = 65 - age;

  if(retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years.`);
    return retirement;
  }else{
    console.log(`${firstName} has already retired! ✌️`);
  return -1;
  }
}

console.log(yearsUntilRetirement(1991, `Jonas`));
console.log(yearsUntilRetirement(1950, `Mike`));
*/



/*--------------------------1 CODING CHALLENGE-------------------------*/
/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!

Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above.

Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and Data 2
5. Ignore draws this time

Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

Hints:
§ To calculate average of 3 values, add them all together and divide by 3
§ To check if number A is at least double number B, check for A >= 2 * B.

Apply this to the team's average scores 😉

GOOD LUCK 😀



const calcAverage = (firstScore, secondScore, thirdScore) => {
 return (firstScore + secondScore + thirdScore) / 3;
}

//Data1:
let averageDolphines = (calcAverage(44, 23, 71)); //Dolphines
let averageKoalas = (calcAverage(65, 54, 49)); //Koalas
console.log(averageDolphines, averageKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  
  if (avgDolphins >= 2 * avgKoalas){
    console.log(`Dolphines are the winners ${avgDolphins} vs ${avgKoalas}.`);
  } else if (avgKoalas >= 2 * avgDolphins){
    console.log(`Koalas are the winner ${avgDolphins} vs ${avgKoalas}.`);
  } else {
    console.log(`Nobody wins ${avgDolphins} vs ${avgKoalas}.`);
  }
}
checkWinner(averageDolphines, averageKoalas);

checkWinner(10, 1);

//Data2:
averageDolphines = (calcAverage(85, 54, 41)); //Dolphines
averageKoalas = (calcAverage(23, 34, 27)); //Koalas
console.log(averageDolphines, averageKoalas);
checkWinner(averageDolphines, averageKoalas);

*/


/*--------------------------7 INTRODUCTION TO ARRAYS-------------------------*/
/*
const friend1 = `Michael`;
const friend2 = `Steven`;
const friend3 = `Peter`;

const friends = [`Michael`, `Steven`, `Peter`];
console.log(friends);

// const years = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends [2] = `Jay`;
console.log(friends);

const firstName = `Jonas`;
const jonas = [`firstName`, `Scmedtmann`, 2037 - 1991, `teacaher`, friends];
console.log(jonas);
console.log(jonas.length);


//Exercise
const calcAge = function(birthYear){
  return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);
*/



/*--------------------------8 BASIC ARRAY OPERATIONS (METHODS)-------------------------*/
/*
const friends = [`Michael`, `Steven`, `Peter`];

//Add elements
const newLength = friends.push(`Jay`);
console.log(newLength);

friends.unshift(`John`);
console.log(friends);

//Remove elements
friends.pop();
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift();
console.log(friends);

console.log(friends.indexOf(`Steven`)); 
console.log(friends.indexOf(`Bob`));

friends.push(23);
console.log(friends.includes(`Steven`));
console.log(friends.includes(`Bob`));
console.log(friends.includes(23));

if (friends.includes(`Steven`)){
  console.log(`You have a frined called Steven.`);
}
*/



/*--------------------------2 CODING CHALLENGE-------------------------*/
/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data below
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip

Test data: 125, 555 and 44

Hint: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

GOOD LUCK 😀


const calcTip = function (bill) {
return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
// calcTip(100);

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[bills.length-1])];
console.log(bills, tips);

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(total);
*/



/*--------------------------9 INTRODUCTION OF OBJECTS-------------------------*/
/*
const jonasArra = [
  `Jonas`,
  `Schmedtmann`,
  2037 - 1991,
  `teacher`,
  [`Michael`, `Peter`, `Steven`]
];

const jonas = {
  firstName: `Jonas`,
  lastName: `Scmedtmann`,
  age: 2037 - 1991,
  job: `teacher`,
  friends: [`Michael`, `Peter`, `Steven`]
}
*/



/*--------------------------10 DOT VS BRACKET NOTATION-------------------------*/
/*
const jonas = {
  firstName: `Jonas`,
  lastName: `Scmedtmann`,
  age: 2037 - 1991,
  job: `teacher`,
  friends: [`Michael`, `Peter`, `Steven`]
}
console.log(jonas);

console.log(jonas.lastName);
console.log(jonas[`lastName`]);

const nameKey = `Name`;
console.log(jonas[`first` + nameKey]);
console.log(jonas[`last` + nameKey]);


const interestedIn = prompt(`What do you want to know about Jonas? Choose between firtName, lastName, age, job, and friends.`);
console.log(jonas[interestedIn]);

if (jonas[interestedIn]){
  console.log(jonas[interestedIn]);
} else {
  console.log(`Wrong request! Choose between firtName, lastName, age, job, and friends.`)
}

jonas.location = `Portugal`;
jonas[`twitter`] = `@jonasschmedtman`;
console.log(jonas);

//CHALLENGE
// "Jonas has 3 friends, and his best friend is called Michael."
console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);
*/



/*--------------------------11 OBJECT METHODS-------------------------*/
/*
const jonas = {
  firstName: `Jonas`,
  lastName: `Schmedtmann`,
  birthYear: 1991,
  job: `teacher`,
  friends: [`Michael`, `Peter`, `Steven`],
  hasDriversLicense: true,

  calcAge: function (birthYear){
    return 2037 - birthYear;
  }
};

console.log(jonas.calcAge(1991));
console.log(jonas[`calcAge`](1991));


const jonas = {
  firstName: `Jonas`,
  lastName: `Schmedtmann`,
  birthYear: 1991,
  job: `teacher`,
  friends: [`Michael`, `Peter`, `Steven`],
  hasDriversLicense: true,

  calcAge: function(){
    return 2037 - this.birthYear;
  }
};

console.log(jonas.calcAge());


const jonas = {
  firstName: `Jonas`,
  lastName: `Schmedtmann`,
  birthYear: 1991,
  job: `teacher`,
  friends: [`Michael`, `Peter`, `Steven`],
  hasDriversLicense: true,

  calcAge: function(){
    this.age = 2037 - this.birthYear;
    return this.age;
  }
};

console.log(jonas.calcAge());

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);


//Challenge
// Jonas is a 46-years old teacher, and he has a/no driver's license.

const jonas = {
  firstName: `Jonas`,
  lastName: `Scmedtmann`,
  birthYear: 1991,
  job: `teacher`,
  friends: [`Michael`, `Peter`, `Steven`],
  hasDriversLicense: false,

  calcAge: function(){
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function(){
    return `${this.firstName} is a ${this.calcAge()}-years old ${this.job}, and he has ${this.hasDriversLicense ? `a` : `no`} driver's license.`;
  }
};
console.log(jonas.getSummary());

*/



/*--------------------------3 CODING CHALLENGE-------------------------*/
/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter)

Your tasks:
1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. 
Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀


const mark = {
  fullName: `Mark Miller`,
  mass: 78,
  height: 1.69,

  calcBMI: function (){
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  }
};

const john = {
  fullName: `John Smith`,
  mass: 92,
  height: 1.95,

  calcBMI: function (){
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  }
}

(mark.calcBMI());
(john.calcBMI());

//console.log(`${mark.BMI > john.BMI ? mark.fullName : john.fullName}'s BMI (${mark.BMI > john.BMI ? mark.BMI : john.BMI}) is higher than ${mark.BMI > john.BMI ? john.fullName : mark.fullName}'s (${mark.BMI > john.BMI ? john.BMI : mark.BMI})!`);

if(mark.BMI > john.BMI){
  console.log(`${mark.fullName}'s BMI (${mark.BMI}) is higher than ${john.fullName}'s (${john.BMI})!`);
} else {
  console.log(`${john.fullName}'s BMI (${john.BMI}) is higher than ${mark.fullName}'s (${mark.BMI})!`);
}

*/



/*--------------------------12 ITERATION: THE FOR LOOP-------------------------*/
/*
// console.log(`Lifting weights repetition 1 🏋️`);
// console.log(`Lifting weights repetition 2 🏋️`);
// console.log(`Lifting weights repetition 3 🏋️`);
// console.log(`Lifting weights repetition 4 🏋️`);
// console.log(`Lifting weights repetition 5 🏋️`);
// console.log(`Lifting weights repetition 6 🏋️`);
// console.log(`Lifting weights repetition 7 🏋️`);
// console.log(`Lifting weights repetition 8 🏋️`);
// console.log(`Lifting weights repetition 9 🏋️`);
// console.log(`Lifting weights repetition 10 🏋️`);

for(let rep = 1; rep <= 10; rep = rep + 1){
  console.log(`Lifting weights repetition ${rep} 🏋️`);
}
*/



/*--------------------------13 LOOPING ARRAYS, BREAKING AND CONTINUING-------------------------*/
/*
const jonas = [
  `Jonas`,
  `Schmedtmann`,
  2037 - 1991,
  `teacher`,
  [`Michael`, `Peter`, `Steven`],
  true
];

const types = [];

for (let i = 0; i < jonas.length; i++) {
  //Reading from jonas array
  console.log(jonas[i], typeof jonas[i]);
  //Filling types array
  //types[i] = typeof jonas[i];
  types.push(typeof jonas[i]);

};

//types[0] = `string`;

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for(let i = 0; i < years.length; i++){
ages.push(2037 - years[i]);
}
console.log(ages);


//Continue
const jonas = [
  `Jonas`,
  `Schmedtmann`,
  2037 - 1991,
  `teacher`,
  [`Michael`, `Peter`, `Steven`],
  true
];
const types = [];

for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== `string`) continue;
  console.log(jonas[i], typeof jonas[i]);
};



//Break
const jonas = [
  `Jonas`,
  `Schmedtmann`,
  2037 - 1991,
  `teacher`,
  [`Michael`, `Peter`, `Steven`],
  true
];

for (let i = 0; i < jonas.length; i++){
  if(typeof jonas[i] === `number`) break;
  console.log(jonas[i], typeof jonas[i]);
};
*/



/*--------------------------14 LOOPONG BACKWARDS AND LOOPS IN LOOPS-------------------------*/
/*
const jonas = [
  `Jonas`,
  `Schmedtmann`,
  2037 - 1991,
  `teacher`,
  [`Michael`, `Peter`, `Steven`],
  true
];

for(let i = jonas.length-1; i >= 0; i--){
 console.log(i, jonas[i]); 
}


for(let exercise = 1; exercise < 4; exercise++){
  console.log(`----------- Starting exercise ${exercise}`);

  for(let rep = 1; rep < 6; rep++){
    console.log(`Exercise ${exercise} Lifting weight repetition ${rep}!`);
  }
}
*/



/*--------------------------15 THE WHILE LOOP-------------------------*/
/*
for (let rep = 1; rep <= 10; rep++){
  console.log(`Lifting weights repetition ${rep}!`);
}

let rep = 1;
while (rep <= 10){
  console.log(`WHILE: Lifting weights repetition ${rep}!`);
  rep++; 
}


let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log(`Loop is about to end...`);
}
*/

/*--------------------------4 CODING CHALLENGE-------------------------*/
/*
Let's improve Steven's tip calculator even more, this time using loops!

Your tasks:
1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the tips and totals arrays 😉

Bonus:
4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a difficult challenge (we haven't done this before)! Here is how to solve it:

4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together

4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)

4.3. Call the function with the 'totals' array

GOOD LUCK 😀
*/

/* My code:
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totalts = [];

const calcTip = function (tip) {
  return tip >= 50 && tip <= 300 ? tip * 0.15 : tip * 0.2;
  }

for(let i = 0; i <= bills.length - 1; i++){
  const bill = calcTip(bills[i]);
  tips.push(bill);
  totalts.push(bills[i] + tips[i]);
}
 console.log(tips);
 console.log(totalts);  
 
 }
 */

//Jonas code:
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = function (tip) {
  return tip >= 50 && tip <= 300 ? tip * 0.15 : tip * 0.2;
}

for(let i = 0; i < bills.length; i++){
  const tip = calcTip(bills[i]);                        // we can use here const bc its not changing, we create a new one...
  tips.push(tip);
  totals.push(tip + bills [i]);
}

console.log(bills, tips, totals);

//////////////////////////////////////BONUS////////////////////////////////////////
const calcAverage =  function(arr){
  let sum = 0;
  for(let i = 0; i < arr.length; i++){
    //sum = sum + arr[i];
    sum += arr[i];
  }
  return sum / arr.length;
}

console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));
/*--------------------------1 VALUES AND VARIABLES:--------------------------*/
// let js = "amazing";
// //console.log(40 + 8 + 23 - 10);

// console.log("Jonas");
// console.log(23);

// let firstName = "Bob";
// // console.log(firstName);
// console.log(firstName);
// console.log(firstName);

// //Variable name conventions
// let jonas_matilda = 'JM';

// let myFirstJob = 'assistent';

// console.log(myFirstJob);

/*--------------------------2 DATA TYPES:--------------------------*/
// let javaScriptIsFun = true;
// console.log(javaScriptIsFun);

// // console.log(typeof true);
// console.log(typeof javaScriptIsFun);
// // console.log(typeof 23);
// // console.log(typeof 'Jonas');

// javaScriptIsFun = 'YES!';
// console.log(typeof javaScriptIsFun);

// let year;
// console.log(year);
// console.log(typeof year);

// year = 1991;
// console.log(typeof year);

// console.log(typeof null);

/*--------------------------3 DECLARING VARIABLES:--------------------------*/
// let age = 30;
// age = 31;

// const birthYear = 1991;
// // birthYear = 1990;
// // const job;

// var job = "Programmer";
// job = "Teacher";

// lastName = "Nagy";
// console.log(lastName);

/*--------------------------4 BASIC OPERATORS:--------------------------*/
//MATH OPERATORS
// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// // 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

// const firstName = 'Levente';
// const lastName = 'Nagy';
// console.log(firstName + ' ' + lastName);

// // ASSIGNMENT OPERATORS
// let x = 10 + 5; // 15
// x += 10; // x = x + 10 = 25
// x *= 4; // x = x * 4 = 100
// x++; // x = x + 1
// x--;
// x--;
// console.log(x);

// //COMPERISON OPERATORS
// console.log(ageJonas > ageSarah); // >, <, >=, <=
// console.log(ageSarah >= 18);

// const isFullAge = ageSarah >= 18;

// console.log(now - 1991 > now - 2018)

/*--------------------------5 OPERATORS PRECEDENCE:--------------------------*/
// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;

// console.log(now - 1991 > now - 2018);

// console.log(25 - 10 - 5);

// let x, y;
// x = y = 25 - 10 - 5; // x = y = 10, x = 10
// console.log(x, y);

// const averageAge = (ageJonas + ageSarah) / 2
// console.log(ageJonas, ageSarah, averageAge);

/*--------------------------1 CODING CHALLENGE:--------------------------*/
/*
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
*/

// const weightMark = 78;
// const heightMark = 1.69;
// const weightJohn = 92;
// const heightJohn = 1.95;

// const weightMark = 95;
// const heightMark = 1.88;
// const weightJohn = 85;
// const heightJohn = 1.76;

// // const bmiMark = weightMark / heightMark ** 2;
// // const bmiJohn = weightJohn / heightJohn ** 2;
// const BMIMark = weightMark / (heightMark * heightMark);
// const BMIJohn = weightJohn / (heightJohn * heightJohn);
// const markHigherBMI = BMIMark > BMIJohn;

// console.log(BMIMark, BMIJohn, markHigherBMI);

/*--------------------------6 STRINGS AND TEMPLATE LITERALS:--------------------------*/

// const firstName = 'Jonas';
// const job = 'teacher';
// const birthYear = 1991;
// const year = 2037;

// const jonas = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
// console.log(jonas);

// const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
// console.log(jonasNew);

// console.log(`Just a regular string...`)

// console.log('String with \n\
// multiple \n\
// lines');

// console.log(`String with
// multiple
// lines`);

/*--------------------------7 TAKE DECISIONS: IF / ELSE STATEMENTS--------------------------*/
// const age = 19;
// const isOldEnough = age >= 18;

// if (isOldEnough) {
//     console.log(`Sarah can start driving license.✌️`);
// }

// const age = 15;

// if (age >= 18) {
//     console.log(`Sarah can start driving license.✌️`);
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`Sarah is too young. Wait another ${yearsLeft} years :`);
// }

// const birthYear = 2001;

// let century;
// if (birthYear <= 2000) {
//     century = 20;
// } else {
//     century = 21;
// }
// console.log(century);

/*--------------------------2 CODING CHALLENGE:--------------------------*/
// Use the BMI example from Challenge #1, and the code you already wrote, and improve it.

// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

// const weightMark = 78;
// const heightMark = 1.69;
// const weightJohn = 92;
// const heightJohn = 1.95;

// const weightMark = 95;
// const heightMark = 1.88;
// const weightJohn = 85;
// const heightJohn = 1.76;

// const BMIMark = weightMark / heightMark ** 2;
// const BMIJohn = weightJohn / heightJohn ** 2;
// const markHigherBMI = BMIMark > BMIJohn;

// console.log(`${BMIMark} Mark`);
// console.log(`${BMIJohn} John`);

// if (BMIMark > BMIJohn) {
//     console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
// } else {
//     console.log(`John's BMI is (${BMIJohn}) higher than Mark's (${BMIMark})!`);
// }

/*--------------------------8 TYPE CONVERSION AND COERCION--------------------------*/
// // TYPE CONVERTION
// const inPutYear = `1991`;
// console.log(Number(inPutYear), inPutYear);
// console.log(Number(inPutYear) + 18);

// console.log(Number(`Jonas`));
// console.log(typeof NaN);

// console.log(String(23), 23);

// //TYPE COERCION
// console.log(`I'm ` + 23 + `years old.`);
// console.log(`I'm ` + String(23) + `years old.`);
// console.log(`23` - `10` - 3);
// console.log(`23` + `10` + 3);
// console.log(`23` * `2`);
// console.log(`23` / `2`);

// let n = `1` + 1; //`11`
// n = n - 1; //10
// console.log(n);

// console.log(2 + 3 + 4 + `5`);

// console.log(`10` - `4` - `3` - 2 + `5`);

/*--------------------------9 TRUTHY AND FALSY VALUES-------------------------*/
// 5 Falsy Values: 0, '', undefined, null, Nan

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean(`Levi`));
// console.log(Boolean({}));
// console.log(Boolean(``));

// const money = 100;
// if (money) {
//     console.log(`Don't spend it all!`);
// } else {
//     console.log(`You should get a job!`);
// }

// let height = 0;
// if (height) {
//     console.log(`YAY! Height is defined.`);
// } else {
//     console.log(`Height is UNDEFINED!`);
// }

/*--------------------------10 EQUALITY OPERATOR: == VS ===-------------------------*/

// const age = 18;
// if (age === 18) console.log(`You just became an adult! (strict)`);

// console.log(18 === 18);
// console.log(18 === 19);
// console.log(`18` == 18);

// if (age == 18) console.log(`You just became and adult! (loose)`);

// const favourite = Number(prompt(`What's your favourite number?`));
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite === 23) {
//     console.log(`Cool! 23 is an amazing number!`);
// } else if (favourite === 7) {
//     console.log(`7 is also a cool number`);
// } else if (favourite === 9) {
//     console.log(`9 is also a cool number`);
// } else {
//     console.log(`Number is not 23 or 7 or 9`);
// }

// if (favourite !== 23) console.log(`Why not 23?`);

/*--------------------------11 BOOLEAN LOGIC-------------------------*/

// const hasDrivingLicense = true; // A
// const hasGoodVision = true; // B

// console.log(hasDrivingLicense && hasGoodVision);
// console.log(hasDrivingLicense || hasGoodVision);
// console.log(!hasDrivingLicense);

// // if (hasDrivingLicense && hasGoodVision) {
// //     console.log(`Sarah is able to drive!`);
// // } else {
// //     console.log(`Someone else should drive...`);
// // }

// const isTired = false; //C
// console.log(hasDrivingLicense || hasGoodVision || isTired);

// if (hasDrivingLicense && hasGoodVision && !isTired) {
//     console.log(`Sarah is able to drive!`);
// } else {
//     console.log(`Someone else should drive...`);
// }

/*--------------------------3 CODING CHALLENGE:--------------------------*/
/*There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!

Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy

Test data:
Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀
*/

//Task 1, 2:
// const dolphinsFirstTry = 96;
// const dolphinsSecoundTry = 108;
// const dolphinsThirdTry = 89;

// const koalasFirstTry = 88;
// const koalasSecoundTry = 91;
// const koalasThirdTry = 110;

// let averageDolphins = (dolphinsFirstTry + dolphinsSecoundTry + dolphinsThirdTry) / 3;
// let averageKoalas = (koalasFirstTry + koalasSecoundTry + koalasThirdTry) / 3;

// console.log(averageDolphins, `Dolphins`);
// console.log(averageKoalas, `Koalas`);

// if (averageDolphins > averageKoalas) {
//     console.log(`Dolphins are the champion!`);
// } else if (averageDolphins === averageKoalas) {
//     console.log(`It's a draw!`);
// } else {
//     console.log(`Koalas are the champion!`);
// }

// BONUS 1, 2:
// const dolphinsFirstTry = 97;
// const dolphinsSecoundTry = 112;
// const dolphinsThirdTry = 80;

// const koalasFirstTry = 109;
// const koalasSecoundTry = 95;
// const koalasThirdTry = 50;

// let averageDolphins = (dolphinsFirstTry + dolphinsSecoundTry + dolphinsThirdTry) / 3;
// let averageKoalas = (koalasFirstTry + koalasSecoundTry + koalasThirdTry) / 3;

// console.log(averageDolphins, `Dolphins`);
// console.log(averageKoalas, `Koalas`);

// if (averageDolphins > averageKoalas && averageDolphins >= 100) {
//     console.log(`Dolphins are the champion!`);
// } else if (averageDolphins === averageKoalas && averageDolphins >= 100 && averageKoalas >= 100) {
//     console.log(`Both win the trophy!`);
// } else if (averageKoalas > averageDolphins && averageKoalas >= 100) {
//     console.log(`Koalas are the champion!`);
// } else {
//     console.log(`No one wins the trophy!`);
// }

/*--------------------------12 THE SWITCH STATEMENT-------------------------*/
/*
const day = `sunday`;

// switch (day) {
//     case `monday`: // day === `monday`
//         console.log(`Plan course structure`);
//         console.log(`Go to coding meetup`);
//         break;
//     case `tuesday`:
//         console.log(`Prepare theory videos`);
//         break;
//     case `wednesday`:
//     case `thursday`:
//         console.log(`Write code example`);
//         break;
//     case `friday`:
//         console.log(`Record videos`);
//         break;
//     case `satuday`:
//     case `sunday`:
//         console.log(`Enjoy the weekend`);
//         break;
//     default:
//         console.log(`Not a valid day!`);
// }


if (day === `monday`) {
    console.log(`Plan course structure
    Go to coding meetup`);
} else if (day === `tuesday`) {
    console.log(`Prepare theory videos`);
} else if (day === `wednesday` || day === `thursday`) {
    console.log(`Wtite code example`);
} else if (day === `friday`) {
    console.log(`Record videos`);
} else if (day === `saturday` || day === `sunday`) {
    console.log(`Enjoy the weekend`);
} else {
    console.log(`Not a valid day!`);
}
*/

/*--------------------------13 STATEMENT AND EXPRESSIONS-------------------------*/

/*--------------------------14 THE CONDITIONAL (TERNARY) OPERATOR-------------------------*/
/*
const age = 17;
// age >= 18 ? console.log(`I like to drink wine`) :
//     console.log(`I like to drink water`);

const drink = age >= 18 ? `wine` : `water`;
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = `wine`;
} else {
    drink2 = `water`;
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? `wine` : `water`}`);
*/

/*--------------------------4 CODING CHALLENGE:--------------------------*/
/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a restaurant.In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20 %.

Your tasks:
1. Calculate the tip, depending on the bill value.Create a variable called 'tip' for this.It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip).Example: “The bill was 275, the tip was 41.25, and the total value 316.25”

Test data:
Data 1: Test for bill values 275, 40 and 430
Hints:
To calculate 20 % of a value, simply multiply it by 20 / 100 = 0.2
Value X is between 50 and 300, if it's >= 50 && <= 300 😉

GOOD LUCK 😀
*/

// const bill = 275;

// const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// console.log(`This bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}.`);

/*--------------------------15 JAVASCRIPT RELEASES: ES5, ES6+ AND ESNEXT-------------------------*/

`use strings`;

('use strings');

`kaki`;

const calcAge = birthAge => 2037 - birthAge;

/*--------------------------1 ASSIGNMENT: VALUES AND VARIABLES:--------------------------*/
// let country = 'Hungary';
// let continent = 'Europe';
// let population = 9.71;

// console.log(country);
// console.log(continent);
// console.log(population);

/*--------------------------2 ASSIGNMENT: DATA TYPES:--------------------------*/
// let isIsland = false;
// let language;
// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);

/*--------------------------3 ASSIGNMENT: DECLARING VARIABLES:--------------------------*/
// language = "Hungarian";
// const country = "Hungary";
// const continent = "Europe";
// const isIsland = false;
// isIsland = true;

// console.log(country);
// console.log(continent);
// console.log(isIsland);

/*--------------------------4 ASSIGNMENT: BASIC OPERATORS:--------------------------*/
// let population = 9.71;
// console.log(population /= 2);

// population++;
// console.log(population);

// console.log(population > 6);

// console.log(population < 33);

// const country = 'Hungary';
// const continent = 'Eurpore';
// const language = 'Hungarian';
// const description1 =
//     country + ' is in ' + continent + ', and its ' + population + ' million people speak ' + language;
// console.log(description1);

/*--------------------------5 ASSIGNMENT: OPERATORS PRECEDENCE:--------------------------*/

/*--------------------------6 ASSIGNMENT: STRINGES AND TEMPLATE LITERALS:--------------------------*/
// const country = `Hungary`;
// const continent = `Europe`;
// const language = `Hungarian`;
// const population = 9.71;

// const description = `${country} is in ${continent}, and it's ${population} million people speak ${language}.`;
// console.log(description);

/*--------------------------7 ASSIGNMENT: TAKE DECISIONS: IF / ELSE STATEMENTS--------------------------*/
// const country = `Hungary`;
// const population = 9.71;

// if (population > 33) {
//     console.log(`${country}'s population is above average.`);
// } else {
//     console.log(`${country}'s population is ${33 - population} million below average.`)
// }

/*--------------------------8 ASSIGNMENT: TYPE CONVERSION AND COERCION--------------------------*/
// console.log(`9` - `5`); //4
// console.log(`19` - `13` + `17`); //617
// console.log(`19` - `13` + 17); //23
// console.log(`123` < 57); //false
// console.log(5 + 6 + `4` + 9 - 4 - 2); //1143

/*--------------------------9 ASSIGNMENT: EQUALITY OPERATORS == VS ===--------------------------*/
// const numNeighbour = Number(
//     prompt(`How many neighbour countries does your country have?`)
// );
// if (numNeighbour === 1) {
//     console.log(`Only 1 border!`);
// } else if (numNeighbour > 1) {
//     console.log(`More than 1 border.`)
// } else {
//     console.log(`No borders.`);
// }

/*--------------------------10 ASSIGNMENT: THE LOGICAL OPERATORS--------------------------*/
// const language = `Hungarian`;
// const population = `9.71`;
// const country = `Hungary`;
// const isIsland = false;

// if (language === `English` && population < 50 && !isIsland) {
//     console.log(`You should live in ${country} :).`);
// } else {
//     console.log(`${country} does not match your criteria :(.`);
// }

/*--------------------------11 ASSIGNMENT: THE SWITCH STATEMENT--------------------------*/
// const language = `arabic`;

// switch (language) {
//   case `chinese`:
//   case `mandarin`:
//     console.log(`MOST number of native speakers!`);
//     break;
//   case `spanish`:
//     console.log(`2nd place in number of native speaker`);
//     break;
//   case `english`:
//     console.log(`3rd place`);
//     break;
//   case `hindi`:
//     console.log(`Number 4`);
//     break;
//   case `arabic`:
//     console.log(`5th most spoken language`);
//     break;
//   default:
//     console.log(`Great language too :D`);
// }

/*--------------------------12 ASSIGNMENT: THE CONDINTIONAL (TERNARY) OPERATOR--------------------------*/
// const country = `Hungary`;
// const population = `9.71`;
// // console.log(population > 33 ? `${country}'s population is above average.` : `${country}'s population is below average.`);
// console.log(
//   `${country}'s population is ${population > 33 ? `above` : `below`} average.`
// );

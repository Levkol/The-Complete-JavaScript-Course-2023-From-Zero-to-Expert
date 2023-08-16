"use strict";
//--------------------------1 FUNCTIONS-------------------------
/*
function describeCountry (country, population, capitalCity) {
return (`${country} has ${population} million people and it's capital city is ${capitalCity}.`);
}

const hungary = describeCountry(`Hungary`, 9.71, `Budapest`);
console.log(hungary);

const finland = describeCountry(`Findland`, 6, `Helsinki`);
console.log(finland);

const china = describeCountry(`China`, 1441, `Tokio`);
console.log(china);
*/

//--------------------------2 FUNCTION DECLARATIONS VS EXPRESSIONS-------------------------
/*
function percentageOfWorld1 (population) {
    return population / 7900 *100;
}
const china = percentageOfWorld1(1441);
const hungary = percentageOfWorld1(9.71);
const finland = percentageOfWorld1(6);
console.log(china, hungary, finland);
*/
/*
const percentageOfWorld2 = function(population){
    return population / 7900 *100;
}
const china = percentageOfWorld2(1441);
const hungary = percentageOfWorld2(9.71);
const finland = percentageOfWorld2(6);
console.log(china, hungary, finland);
*/

//--------------------------3 ARROW FUNCTIONS-------------------------
/*
 const percentageOfWorld3 = population => population / 7900 * 100;

 const china = percentageOfWorld3(1441);
 const hungary = percentageOfWorld3(9.71);
 const finland = percentageOfWorld3(6);
 console.log(china, hungary, finland);
*/

//--------------------------4 FUNCTIONS CALLING OTHER  FUNCTIONS-------------------------
/*
const percentageOfWorld2 = function (population) {
    return population / 7900 * 100;
}

const describePopulation = function (country, population) {
    const population2 = percentageOfWorld2(population);
    const description = `${country} has ${population} million people, which is about ${population2}% of the world.`;
    console.log(description);
}
describePopulation(`Hungary`, 9.71);
describePopulation(`China`, 1441);
describePopulation(`Finland`, 6);
*/

//--------------------------5 INTRODUCTION TO ARRAYS-------------------------
/*
const population = [9.71, 6, 10, 1441];
console.log(population.length === 4);
const percentages = [percentageOfWorld2(population[0]), percentageOfWorld2(population[1]), percentageOfWorld2(population[2]), percentageOfWorld2(population[population.length-1])];
console.log(percentages);
*/

//--------------------------6 BASIC ARRAY OPERATIONS (METHODS)-------------------------
/*
const neighbours = [`Austria`, `Croatia`, `Romania`, `Serbia`, `Slovakia`, `Slovenia`, `Ukraine`];
neighbours.push(`Utopia`);
neighbours.pop();
console.log(neighbours);

if (!neighbours.includes(`Germany`)){
    console.log(`Probably not a central European country.`);
}
// neighbours[neighbours.length - 1] = `War place`;
// console.log(neighbours);
neighbours[neighbours.indexOf(`Ukraine`)] = `War place`
console.log(neighbours);
*/

//--------------------------7 INTRODUCTION OF OBJECTS -------------------------
/*
const myCountry = {
    country : `Hungary`,
    capital : `Budapest`,
    language : `hungarian`,
    population : 9.71,
    neighbours : [`Austria`, `Croatia`, `Romania`, `Serbia`, `Slovakia`, `Slovenia`, `Ukraine`]
}
*/

//--------------------------8 DOT VS BRACKET NOTATION -------------------------
/*
const myCountry = {
    country: `Hungary`,
    capital: `Budapest`,
    language: `hungarian`,
    population: 9.71,
    neighbours: [`Austria`, `Croatia`, `Romania`, `Serbia`, `Slovakia`, `Slovenia`, `Ukraine`]
};

myCountry.population += 2;
myCountry[`population`] -= 2;

console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries.`);
console.log(`${myCountry[`country`]} has ${myCountry[`population`]} million ${myCountry[`language`]}-speaking people, ${myCountry[`neighbours.length`]} neighbouring countries.`);
*/

//Finland has 6 million finnish-speaking people, 3 neighbouring countries and a capital called Helsinki.

//--------------------------9 OBJECT METHODS -------------------------
/*
const myCountry = {
    country: `Hungary`,
    capital: `Budapest`,
    language: `hungarian`,
    population: 9.71,
    neighbours: [`Austria`, `Croatia`, `Romania`, `Serbia`, `Slovakia`, `Slovenia`, `Ukraine`],

    describe: function() {
        console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.language.length} neighbouring countries and a capital called ${this.capital}.`);
    },

    checkIsland: function() {
        this.isIsland = this.neighbours.length === 0 ? `true`: `false`;
        return this.isIsland;
    }
}

myCountry.describe();
console.log(myCountry.checkIsland());
*/

//--------------------------10 ITERATION: THE FOR LOOP -------------------------
/*
for(let voters = 1; voters <= 50; voters ++){
    console.log(`Voter number ${voters} is currently voting.`);
}
*/

//--------------------------11 LOOPING ARRAYS, BREAKING AND CONTINUING-------------------------
/*
const population = [9.71, 6, 10, 1441];
const percentages2 = [];

for(let i = 0; i < population.length; i++){
    percentages2.push (population[i] / 7900 *100);
    };
console.log(percentages2);

//---

const population = [9.71, 6, 10, 1441];
const percentages2 = [];

function percentageOfWorld1 (population) {
    return population / 7900 *100;
};

for(let i = 0; i < population.length; i++){
    const perc = percentageOfWorld1(population[i]);
    percentages2.push (perc);
    };
console.log(percentages2);
*/

//--------------------------12 LOOPONG BACKWARDS AND LOOPS IN LOOPS-------------------------
/*
const listOfNeighbours = [[`Canada`, `Mexico`], [`Spain`], [`Norway`, `Sweden`, `Russia`]];

for(let i = 0; i < listOfNeighbours.length; i++) {
    let neighbours = listOfNeighbours[i];

    for(let j = 0; j < neighbours.length; j++) {
        console.log(`Neighbour: ${neighbours[j]}`);
    }
}


//----

const listOfNeighbours = [[`Canada`, `Mexico`], [`Spain`], [`Norway`, `Sweden`, `Russia`]];

for(let i = 0; i < listOfNeighbours.length; i++) {
    for(let j = 0; j < listOfNeighbours[i].length; j++) {
        console.log(`Neighbour: ${listOfNeighbours[i] [j]}`);
    }
}
*/

//--------------------------13 THE WHILE LOOP-------------------------
/*
const population = [9.71, 6, 10, 1441];
const percentages2 = [];

function percentageOfWorld1 (population) {
    return population / 7900 *100;
};

let i = 0;
while(i < population.length){
    const perc = percentageOfWorld1(population[i]);
    percentages2.push (perc);
    i++;
};

console.log(percentages2);
*/
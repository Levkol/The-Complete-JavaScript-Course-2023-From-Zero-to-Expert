'use strict';

// Data needed for first part of the section
const weekdays = [`mon`, `tue`, `wed`, `thu`, `fri`, `sat`, `san`];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = `20:00`,
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}.`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
    // console.log(
    //   `Here is your delicious pizza with ${mainIngredient} ${
    //     otherIngredients.length > 0 ? otherIngredients : ``
    //   }.`
    // );
  },
};

/*
///////////////////////////////////////////////////////
// Working with strings: Part 3

// Split and join
console.log(`a+very+nice+string`.split(`+`));
console.log(`Jonas Schmedtmann`.split(` `));

const [firstName, lastName] = `Jonas Schmedtmann`.split(` `);

const newName = [`Mr.`, firstName, lastName.toUpperCase()].join(` `);
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(` `);
  const namesUpper = [];
  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(` `));
};

capitalizeName(`jessica ann smith davis`);
capitalizeName(`levente nagy`);

// Padding:
const message = `Go to gate 23!`;
console.log(message.padStart(25, `+`).padEnd(30, `+`));
console.log(`Jonas`.padStart(25, `+`));

const maskCreditCard = function (number) {
  const str = number + ``;
  const last = str.slice(-4);
  return last.padStart(str.length, `*`);
};

console.log(maskCreditCard(43378463864647384));
console.log(maskCreditCard(`348236126412418498412`));

// Repeat
const message2 = `Bad weather... All Departues Delayed...`;
console.log(message2.repeat(5));

const planeInLine = function (n) {
  console.log(`There are ${n} planes in line ${`✈️`.repeat(n)}`);
};
planeInLine(5);
planeInLine(3);
planeInLine(12);
*/

/*
///////////////////////////////////////////////////////
// Working with strings: Part 2
const airline = `TAP Air Portugal`;

console.log(airline.toLowerCase());
console.log(airline.toUpperCase())


// Fix capitalization in name:
const passenger = `jOnAS`; // Jonas
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect)

//function
const passengerName = function(name){
  const passengerLowerName = name.toLowerCase();
  const passengerCorrectName = passengerLowerName[0].toUpperCase() + passengerLowerName.slice(1);
  console.log(passengerCorrectName)
};

passengerName(`LEVenTE`);

// Compaaring email:
const email = `hello@jonas.io`;
const loginEmail = `  Hello@Jonas.Io \n`;

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail)
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail)
console.log(email === normalizedEmail);

//funciton
const userEmail = function(signupEmail, loginEmail){
const emailCorrection = loginEmail.toLowerCase().trim();
console.log(signupEmail === emailCorrection);
}
userEmail(`nagy46levente@gmail.com`, `    nAGY46levENte@gmail.com  \n`)

// Replacing:
const priceGB = `288,97₤`
const priceUSD = priceGB.replace(`₤`, `$`).replace(`,`, `.`);
console.log(priceUSD);

const annoncement = `All passengers come to boarding door 23. Boarding door 23!`;
console.log(annoncement.replaceAll(`door`, `gate`));

console.log(annoncement.replaceAll(/door/g, `gate`));

// Booleans:
const plane = `Airbus A32neo`;
console.log(plane.includes(`A32`));
console.log(plane.includes(`Boeing`));
console.log(plane.startsWith(`Air`));

if( plane.startsWith(`Airbus`) && plane.endsWith(`neo`)){
  console.log(`Part of the NEW Airbus family`);
}

// Pracrice Exercise
const checkBaggage = function(items){
const baggege = items.toLowerCase();
if(baggege.includes(`knife`) || baggege.includes(`gun`)){
console.log(`You are not allowed on board`);
}else{
  console.log(`Welcome aboard!`);
}
};

checkBaggage(`I have a laptop, some Food and a pocket Knife`);
checkBaggage(`Socks and camera`);
checkBaggage(`Got some snacks and a gun for protection`);
*/

/*
///////////////////////////////////////////////////////
// Working with strings: Part 1
const airline = `TAP Air Portugal`;
const plane = `A320`;
console.log(plane[0]);
console.log(plane[1]);
console.log(`B737`[0]);

console.log(airline.length);
console.log(`B737`.length);

console.log(airline.indexOf(`r`));
console.log(airline.lastIndexOf(`r`));
console.log(airline.indexOf(`Portugal`));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(` `)));
console.log(airline.slice(airline.lastIndexOf(` `) + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === `B` || s === `E`) {
    console.log(`You got the middle seat :(`);
  } else {
    console.log(`You got lucky :)`);
  }
};

checkMiddleSeat(`11B`);
checkMiddleSeat(`23C`);
checkMiddleSeat(`3E`);

console.log(new String(`jonas`));
console.log(typeof new String(`jonas`));
-
*/
/*
///////////////////////////////////////////////////////
// Maps: Iteration
const question = new Map([
  [`question`, `What is the best programing language in the world?`],
  [1, `C`],
  [2, `Java`],
  [3, `JavaScript`],
  [`correct`, 3],
  [true, `Correct!`],
  [false, `Try again!`],
]);
console.log(question);

// Convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// Quiz app
console.log(question.get(`question`));
for (const [key, value] of question) {
  if (typeof key === `number`) console.log(`Answer ${key}: ${value}`);
}
const answer = Number(prompt(`Your answer`));
console.log(answer);

// console.log(answer === 3 ? question.get(true) : question.get(false));
console.log(question.get(question.get(`correct`) === answer));

// Convert map to array
console.log([...question]);

console.log([...question.entries()]);
console.log([...question.keys()]);
console.log([...question.values()]);
/*

///////////////////////////////////////////////////////
// Maps: Fundamentals
const rest = new Map();
rest.set(`name`, `Classico Italiano`);
rest.set(1, `Firenze, Italiy`);
console.log(rest.set(2, `Lisabon, Portugal`));
rest
  .set(`categories`, ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set(`open`, 11)
  .set(`close`, 23)
  .set(true, `We are open :D`)
  .set(false, `We are closed :(`);

console.log(rest.get(`name`));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 21;
console.log(rest.get(time > rest.get(`open`) && time < rest.get(`close`)));

console.log(rest.has(`categories`));

rest.delete(2);
// rest.clear();

const arr = [1, 2];
rest.set(arr, `Test`);
console.log(rest.get(arr));
rest.set(document.querySelector(`h1`), `Heading`);

console.log(rest);
console.log(rest.size);
*/
/*
///////////////////////////////////////////////////////
// SETs:

const ordersSet = new Set([
  `Pasta`,
  `Pizza`,
  `Pizza`,
  `Risotto`,
  `Pasta`,
  `Pizza`,
]);

console.log(ordersSet);

console.log(new Set(`Jonas`));
console.log(new Set());

console.log(ordersSet.size);

console.log(ordersSet.has(`Pizza`));
console.log(ordersSet.has(`Bread`));

ordersSet.add(`Garlic Bread`);
ordersSet.add(`Garlic Bread`);
console.log(ordersSet);

ordersSet.delete(`Risotto`);
console.log(ordersSet);

// ordersSet.clear();
// console.log(ordersSet);

for (const order of ordersSet) console.log(order);

// Example
const staff = [`Waiter`, `Chef`, `Waiter`, `Manager`, `Chef`, `Waiter`];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(
  new Set([`Waiter`, `Chef`, `Waiter`, `Manager`, `Chef`, `Waiter`]).size
);

console.log(new Set(`jonasschmedtmann`).size);
*/

/*
///////////////////////////////////////////////////////
// Property NAMES:
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;

for (const day of properties) {
  openStr += `${day}, `;
}

console.log(openStr);

// Property VALUES:
const values = Object.values(openingHours);
console.log(values);

// Entire object:
const entries = Object.entries(openingHours);
console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}


///////////////////////////////////////////////////////
// Optional Chaining:

if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

// WITH Optional Chaining:
console.log(restaurant.openingHours?.mon?.open);

// Exmaple
const days = [`mon`, `tue`, `wed`, `thu`, `fri`, `sat`, `san`];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? `closed`;
  console.log(`On ${day}, we open at ${open}`);
}

console.log(restaurant.order?.(0, 1) ?? `Method does not exist`);
console.log(restaurant.oderRisotto?.(0, 1) ?? `Method does not exist`);

// Arrays
//Jonas:
const user = [
  {
    name: `Jonas`,
    email: `hello@jonas.io`,
  },
];

// const user = [];

console.log(user[0]?.name ?? `User array empty`);

if (user.length > 0) console.log(user[0].name);
else console.log(`User array empty`);
//Exist
// if (restaurant.openingHours.fri) console.log(restaurant.openingHours.fri.open);


///////////////////////////////////////////////////////
// For Of Loop:
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const item of menu.entries()) {
  console.log(item);
}

for (const item of menu.entries()) {
  console.log(`${item[0] + 1}: ${item[1]}`);
}

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}




////////////////////////////////////////////////////////////////////
// Logical Assignment Operator:

const rest1 = {
  name: `Capri`,
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: `La Piazza`,
  owner: `Giovanni Rossi`,
};

// OR assignment Operator:
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// Nullish assignment Operator (null, undefined):
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// AND assignment Operator:
// rest1.owner = rest1.owner && `<ANONYMOUS>`;
// rest2.owner = rest2.owner && `<ANONYMOUS>`;

rest1.owner &&= `<ANONYMOUS>`;
rest2.owner &&= `<ANONYMOUS>`;

console.log(rest1);
console.log(rest2);

////////////////////////////////////////////////////////////////////
// The Nullish Coalescing Operator:

restaurant.numGuests = 0;
const guest = restaurant.numGuests || 10;
console.log(guest);

// Nullish values: null and undefined (NOT 0 or ``)
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);


////////////////////////////////////////////////////////////////////
// Short Circuiting (&& and ||):

// Use ANY data type, return ANY data type, short-circuiting:
console.log(3 || `Jonas`);
console.log(`` || `Jonas`);
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || `` || `Hello` || 23 || null);

//Practice Example:
restaurant.numGuests = 23;
const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guest1);

const guest2 = restaurant.numGuests || 10;
console.log(guest2);

console.log(`---------AND--------`);
console.log(0 && `Jonas`);
console.log(7 && `Jonas`);

console.log(`Hello` && 23 && null && `jonas`);

//Practice Example:
if (restaurant.orderPizza) {
  restaurant.orderPizza(`mushrooms`, `spinach`);
}

restaurant.orderPizza && restaurant.orderPizza(`mushroom`, `spinach`);

/*
////////////////////////////////////////////////////////////////////
// Rest Pattern and Parameters:
// 1) Destructuring:
// Rest Arrays:

// SPREAD,bc on right side of =
const arr = [1, 2, ...[3, 4]];

// REST, bc on left side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// Rest Obejcts:
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2) Funcitons:
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza(`mushroom`, `onion`, `olives`, `spinach`);
restaurant.orderPizza(`mushroom`);

////////////////////////////////////////////////////////////////////
// The Spread Operator (...):
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);
console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, `Gnocci`];
console.log(newMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 array
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Iterables: arrays, strings, maps, sets. NOT objects.
const str = `Jonas`;
const letter = [...str, ``, `S.`];
console.log(letter);
console.log(...str);
// console.log(`${...str} Schmedtmann`);

// Real-world example:
const ingredients = [
  // prompt(`Let's make pasta! Ingredient 1?`),
  // prompt(`Ingredient 2?`),
  // prompt(`Ingredient 3?`),
];
console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);

// Objects:
const newRestaurent = { foundedIn: 1998, ...restaurant, founder: `Guiseppe` };
console.log(newRestaurent);

// Copy Objects:
const restaurantCopy = { ...restaurant };
restaurantCopy.name = `Ristorante Roma`;
console.log(restaurant.name);
console.log(restaurantCopy.name);


////////////////////////////////////////////////////////////////////
// Destructuring Objects:
restaurant.orderDelivery({
  time: `22:30`,
  address: `Via del Sol, 21`,
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: `Via del Sole, 21`,
  starterIndex: 1,
});

// Destructuring Objects:
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// Rename Object property variables:
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default Values:
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Swithing (mutating) Variables:
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
console.log(a, b);

// Nested Object Destructuring:
const {
  fri: { open, close },
} = openingHours;
console.log(open, close);


////////////////////////////////////////////////////////////////////
// Destructuring Arrays:
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Swithing (mutating) Variables:
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

// Receive 3 return values from a function:
// console.log(restaurant.order(2, 0));
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested Array Destructuring:
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default Values:
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
*/

/*

///////////////////////////////////////////////////////
// Coding Challenge 1:

We're building a football betting app (soccer for my American friends 😅)!
Suppose we get data from a web service about a certain game ('game' variable on next page). In this challenge we're gonna work with that data.

Your tasks:
1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players.
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'.
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2').
6. Write a function ('printGoals') that receives an arbitrary number of player names (not an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in).
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, without using an if/else statement or the ternary operator.

Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
Then, call the function again with players from game.scored

GOOD LUCK 😀
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

/*
// 1.
const [player1, player2] = game.players;
console.log(player1, player2);

// 2.
const [gk, ...fieldPlayers] = player1;
console.log(gk, fieldPlayers);

// 3.
const allPlayers = [...player1, ...player2];
console.log(allPlayers);

// 4.
const players1Final = [...player1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

// 5.
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

// 6.
const printGoals = function (...players) {
  console.log(`${players.length} goals were scored. ${players}`);
};

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals('Davies', 'Muller');

printGoals(...game.scored);

// 7.
team1 < team2 && console.log(`Team 1 is more likely to win`);
team1 > team2 && console.log(`Team 2 is more likely to win`);

/*

///////////////////////////////////////////////////////
// Coding Challenge 2:

Let's continue with our football betting app! Keep using the 'game' variable from before.

Your tasks:
1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: 
  "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exactly like this: 
 - Odd of victory Bayern Munich: 1.33
 - Odd of draw: 3.25
 - Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). Hint: Note how the odds and the game objects have the same property names 😉
4. Bonus: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
  {
    Gnarby: 1,
    Hummels: 1,
    Lewandowski: 2
  }
  
GOOD LUCK 😀
*/

/*
// 1.
for (const [i, player] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${player}`);
}

// 2.
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) average += odd;
average /= odds.length;
console.log(average);

/////////////////////////////////////////////////////////////////

let sum = 0;
let count = 0;
for (const odd of Object.values(game.odds)) {
  if (typeof odd === `number` && odd % 2 !== 0) {
    sum += odd;
    count++;
  }
}

const averageOdd = sum / count;
console.log(averageOdd);

// 3.
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === `x` ? `draw` : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
}

/////////////////////////////////////////////////////////////////

for (const [key, values] of Object.entries(game.odds)) {
  const teamName = game[key];
  const message = `Odd of victory ${
    key === 'x' ? 'draw' : `${teamName}`
  }: ${values}`;
  console.log(message);
}

// 4.
const scorers = {};

for (const player of game.scored) {
  if (scorers[player]) {
    scorers[player]++;
  } else {
    scorers[player] = 1;
  }
}
console.log(scorers);
*/

///////////////////////////////////////////////////////
// Coding Challenge 3:

/*
Let's continue with our football betting app! This time, we have a map called 'gameEvents' (see below) with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which
each event happened (a football game has 90 minutes plus some extra time).

Your tasks:
1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Compute and log the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over 'gameEvents' and log each element to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:

[FIRST HALF] 17:⚽ GOAL

GOOD LUCK 😀
*/

/*
const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);

// 1.
const events = [...new Set(gameEvents.values())];
console.log(events);

// 2.
gameEvents.delete(64);
console.log(gameEvents);

// 3.
// console.log(
//   `An event happened, on average, every ${90 / gameEvents.size} minutes`
// );
const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes`
);

// 4.
// for (const [minutes, events] of gameEvents)
//   if (45 > minutes) {
//     console.log(`[FIRST HALF] ${minutes}: ${events}`);
//   } else {
//     console.log(`[SECOND HALF] ${minutes}: ${events}`);
//   }

for (const [minutes, events] of gameEvents) {
  const half = minutes <= 45 ? `FIRST` : `SECOND`;
  console.log(`[${half} HALF] ${minutes}: ${events}`);
}
*/

/*
///////////////////////////////////////////////////////
// Coding Challenge 4:
/*
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below to insert the elements), and conversion will happen when the button is pressed.

Test data (pasted to textarea, including spaces):
  
underscore_case
 first_name
Some_Variable
  calculate_AGE
delayed_departure

Should produce this output (5 separate console.log outputs):
  underscoreCase    ✅
  firstName         ✅✅
  someVariable      ✅✅✅
  calculateAge      ✅✅✅✅
  delayedDeparture  ✅✅✅✅✅

Hints:
§ Remember which character defines a new line in the textarea 😉
§ The solution only needs to work for a variable made out of 2 words, like a_b
§ Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
§ This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀


document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector(`button`).addEventListener(`click`, function () {
  const text = document.querySelector(`textarea`).value;
  const rows = text.split(`\n`);

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split(`_`);
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20, ` `)}${`✅`.repeat(i + 1)}`);
  }
});
*/

///////////////////////////////////////////////////////
// String  Methods Practice
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

//  🔴 Delayed Departure from FAO to TXL (11h25)
//               Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//             Departure from FAO to LIS (12h30)
const getCode = str => str.toUpperCase().slice(0, 3);

for (const flight of flights.split(`+`)) {
  const [type, from, to, time] = flight.split(`;`);
  const output = `${type.startsWith(`_Delayed`) ? `🔴` : ``}${type.replaceAll(
    `_`,
    ` `
  )} from ${getCode(from)} to ${getCode(to)} (${time.replace(
    `:`,
    `h`
  )})`.padStart(45);
  console.log(output);
}

'use strict';

// Data needed for a later exercise

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery({ time = '22:30', address, mainIndex = 2, starterIndex = 2 }) {
    console.log(
      `Ordered received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta ${ing1}, ${ing2}, and ${ing3}`);
  },
  orderPizza(mainIngredients, ...OtherIngredients) {
    console.log(mainIngredients);
    console.log(OtherIngredients);
  },
  //ES6 enhanced object literals
  openingHours,
};

/*
/////////////////////////////////////
//Array destructuring

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);

let [first, second, ten] = restaurant.categories;
console.log(first, second);

// // Switching variables without destructure
// const temp = first;
// first = second;
// second = temp;
// console.log(first, second);

//Switching variables with destructure
[first, second] = [second, first];
console.log(first, second);

//receive 2 return value from a function
const [stater, main] = restaurant.order(2, 0);
console.log(stater, main);

//Nested destructuring
const nested = [5, 2, [5, 9]];
// const [i, , j] = nested;
const [i, , [j, k]] = nested;
console.log(i, j, k);

//default values
const [p = 2, q = 5, r = 3] = [5, 6];
console.log(p, q, r);
////////////////////////////////////
/*

/*
////////////////////////////////////
//Object destructuring

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hour,
  categories: tags,
} = restaurant;
console.log(restaurantName, hour, tags);

const { menu = [], starterMenu: starter = [] } = restaurant;
console.log(menu, starter);

//mutating variables
let a = 1990;
let b = 2000;

const obj = { a: 10, b: 20, c: 30 };
({ a, b } = obj);
console.log(a, b);

//nested objected
const {
  fri: { open: k, close: l },
} = openingHours;
console.log(k, l);

restaurant.orderDelivery({
  time: '2:30',
  address: 'Gulshan, Dhaka-1212',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Gulshan, Dhaka-1212',
  starterIndex: 1,
});
////////////////////////////////////////
*/

/*
///////////////////////////////////////
//The Spread Operator (...)
const arr = [7, 8, 9];
const badNewArray = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArray);
const newArray = [1, 2, ...arr];
console.log(newArray);

const newMenu = [...restaurant.mainMenu, 'burger'];
console.log(newMenu);

//copy Array
const copyMainMenu = [...restaurant.mainMenu];

//join 2 Array
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

//Iterables: arrays, string, maps, seta, NOT objects
const str = 'jonas';
const letter = [...str, ' ', 'h'];
console.log(letter);

//real-world example
const ingredients = [
  // prompt("let's make pasta! ingredient 1?"),
  // prompt('ingredient 2?'),
  // prompt('ingredient 3?'),
];
console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);

//objects
const newRestaurant = { founder: 'Jonas', ...restaurant, born: '1990' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Jonas';
console.log(restaurantCopy);
console.log(restaurant);
/////////////////////////////////////
*/

/*
/////////////////////////////////////
//Rest Pattern and Parameter
// 1) Destructuring

//SPREAD, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];
console.log(arr);

//REST, because of LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , Risotto, ...othersFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
]; //rest element must be the last element

console.log(pizza, Risotto, othersFood);
console.log(...restaurant.mainMenu, ...restaurant.starterMenu);

//Object
const { sat, ...weekDay } = { ...restaurant.openingHours };
console.log(weekDay);

// 2) Functions
let sum = 0;
const add = function (...numbers) {
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(2, 5);
add(3, 7, 2);
add(4, 1, 5, 7, 8);

const x = [25, 10, 8];
add(...x);

restaurant.orderPizza('Mushrooms', 'Onion', 'Olives');
///////////////////////////////////////////
*/

/*
///////////////////////////////////////////
console.log('----OR----');
//Use any data type,  return any data type, short-circuiting
console.log(3 || 'jonas');
console.log('' || 'jonas');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || '' || 0 || 'jonas' || 25 || null);

// restaurant.numGuest = 10;
const guest1 = restaurant.numGuest ? restaurant.numGuest : 30;
console.log(guest1);

const guest2 = restaurant.numGuest || 20;
console.log(guest2);

console.log('----AND----');
console.log(0 && 'jonas');
console.log(5 && 'jonas');

console.log('Hello' && 23 && null && 'Jonas');

//Practical Example
if (restaurant.orderPizza) {
  restaurant.orderPizza('Mushroom', 'Spinach');
}

restaurant.orderPizza && restaurant.orderPizza('Mushroom', 'Spinach');
///////////////////////////////////////
*/

/*
//////////////////////////////////////
restaurant.numGuest = 0;
const guest1 = restaurant.numGuest || 30;
console.log(guest1);

//Nullish: undefined or null (NOT 0 or '')
const guestCorrect = restaurant.numGuest ?? 30;
console.log(guestCorrect);
/////////////////////////////////////
*/

/*
/////////////////////////////////////
const rest1 = {
  name: 'Capri',
  numGuest: 20,
};

const rest2 = {
  name: 'La Piazza',
  Owner: 'David Warner',
};

//OR Assignment Operator
// rest1.numGuest = rest1.numGuest || 10;
// rest2.numGuest = rest2.numGuest || 10;
// rest1.numGuest ||= 10;
// rest2.numGuest ||= 10;

//Nullish assignment Operator (null or undefined)
rest2.numGuest ??= 10;
rest2.numGuest ??= 10;

//AND assignment Operator
// rest1.Owner = rest1.Owner && '<hk>';
// rest2.Owner = rest2.Owner && '<hk>';
rest1.Owner &&= '<hk>';
rest2.Owner &&= '<hk>';

console.log(rest1);
console.log(rest2);
///////////////////////////////////////
*/

/*
///////////////////////////////////////
// Coding Challenge #1

We're building a football betting app (soccer for my American friends 😅)!
Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:
1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.
TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

const game = {
  team1: 'Bayern Munich',
  team2: 'Prussia Dortmund',
  player: [
    ['Davies', 'Lewandowski', 'Kimmich', ' Dayot Upamecano', 'Justin'],
    ['Thiago', 'Coutinho', 'Perisic', 'Kimmich'],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnerby'],
  date: '25 November 2022',
  odds: {
    team1: 1.33,
    x: 2.25,
    team2: 6.5,
  },
};

//1
const [players1, players2] = game.player;
console.log(players1, players2);

//2
const [gk, ...others] = players1;
console.log(gk, others);

//3
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

//4
const players1Final = [...players1, 'Thicko', 'matsu', 'jabil'];
console.log(players1Final);

//5
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

//6
const printGoals = function (...players) {
  console.log(players.length);
};
// printGoals( 'Davies', 'Muller', 'Lewandowski' and 'Kimmich');
printGoals(...game.scored);

//7
team1 < team2 && console.log('team 1 is more likely to win');
///////////////////////////////////////
*/

/*
////////////////////////////////////////
//looping arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu) console.log(item);
console.log(menu);

for (const item of menu.entries()) {
  console.log(`${item[0] + 1} : ${item[1]}`);
}
console.log(...menu.entries());
/////////////////////////////////////////
*/

/*
//////////////////////////////////////////
if (restaurant.openingHours && restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon.open);
}

//with optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

//Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`on ${day}, we open at ${open}`);
}
/////////////////////////////////////////
*/

/*
/////////////////////////////////////////
//property NAME
const properties = Object.keys(openingHours);
console.log(properties);
let openStr = `we are open on ${properties.length} days`;

for (const day of properties) {
  openStr += ` ${day}`;
  console.log(openStr);
}

//property VALUES
const values = Object.values(openingHours);
console.log(values);

//Entire Object
const entries = Object.entries(openingHours);
console.log(entries);
 /////////////////////////////////////
*/

/*
/////////////////////////////////////
//remove duplicate
let arr = [2, 5, 2, 7, 7, 3, 15, 19];
let arr2 = [];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
  if (arr2.indexOf(arr[i]) === -1 && arr[i] <= 7) {
    arr2.push(arr[i]);
  } else if (arr[i] > 7) {
    arr2.push(arr[i]);
  }
}

console.log(arr2);
//////////////////////////////////////
*/

/*
//////////////////////////////////////
const orderSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Burger',
  'Pizza',
  'Pasta',
]);
console.log(orderSet);
console.log(orderSet.has('Pasta'));
console.log(orderSet.has('Bread'));
orderSet.add('Fish');
orderSet.add('Fish');
orderSet.delete('Burger');
console.log(orderSet);
for (const order of orderSet) console.log(order);

const staff = ['Waiter', 'Chef', 'Chef', 'Waiter', 'Manager'];
const newStaff = [...new Set(staff)];
console.log(newStaff);
console.log(new Set('mdhasankhan').size);
/////////////////////////////////////////
*/

/*
/////////////////////////////////////////
const rest = new Map();
rest.set('name', 'Italiane');
rest.set(1, 'France, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest
  .set('catagories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('closed', 23)
  .set(true, 'we are open')
  .set(false, 'we are closed');

console.log(rest.get(true));
console.log(rest.get('catagories'));

const time = 15;
console.log(rest.get(time > rest.get('open') && time < rest.get('closed')));

console.log(rest.has('catagories'));
rest.delete(2);
console.log(rest);
// rest.clear();
const arr = [50, 5];
rest.set(document.querySelector('h1'), 'heading');
rest.set(arr, 'test');
console.log(rest);
console.log(rest.get(arr));
////////////////////////////////////////
*/

/*
///////////////////////////////////////
const question = new Map([
  ['question', 'what is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'Javascript'],
  ['Correct', 3],
  [true, 'Correct🎉'],
  [false, 'Try again'],
]);
console.log(question);

//Convert Object to Map
console.log(Object.entries(openingHours));

const openHours = new Map(Object.entries(openingHours));
console.log(openHours);

//Quiz app
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') {
    console.log(`Answer ${key} : ${value}`);
  }
}
// const answer = Number(prompt('Your Answer'));
const answer = 3;
console.log(answer);

console.log(question.get(question.get('Correct') === answer));

//Convert map to array
console.log([...question]);
console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);
/////////////////////////////////////////
*/

/*
////////////////////////////////////////
// Coding Challenge #3

Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀


const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

//1.
const events = new Set([...gameEvents.values()]);
console.log(events);

//2.
gameEvents.delete(64);
console.log(gameEvents);

//3.
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);

//4.
for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'First' : 'Second';
  console.log(`${half} Half ${min} : ${event}`);
}
//////////////////////////////////////////
*/

/*
/////////////////////////////////////////
//working with string part- 1
const airline = 'TAP Air Dubai';
const plane = 'B320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('A450'[0]);

console.log(airline.length);
console.log('A450'.length);

console.log(airline.indexOf('A'));
console.log(airline.lastIndexOf('A'));
console.log(airline.indexOf('Dubai')); //case sensitive

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(0, airline.lastIndexOf(' ')));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1);
  //B and E are middle seat
  if (s === 'B' || s === 'E') {
    console.log('You got the middle seat😁');
  } else {
    console.log('You are the lucky😎');
  }
};

checkMiddleSeat('12B');
checkMiddleSeat('12C');
checkMiddleSeat('12E');
*/

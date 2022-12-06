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

/*/////////////////////////////////////
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
*/ ////////////////////////////////////

/*////////////////////////////////////
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
*/ //////////////////////////////////////

/*///////////////////////////////////////
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
*/ ///////////////////////////////////

/*/////////////////////////////////////
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
////////////////////////////////////////
*/

/*/////////////////////////////////////
restaurant.numGuest = 0;
const guest1 = restaurant.numGuest || 30;
console.log(guest1);

//Nullish: undefined or null (NOT 0 or '')
const guestCorrect = restaurant.numGuest ?? 30;
console.log(guestCorrect);
*/ /////////////////////////////////////

/*/////////////////////////////////////
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
*/ //////////////////////////////////////

/*///////////////////////////////////////
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
*/ ///////////////////////////////////////

/*////////////////////////////////////////
//looping arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu) console.log(item);
console.log(menu);

for (const item of menu.entries()) {
  console.log(`${item[0] + 1} : ${item[1]}`);
}
console.log(...menu.entries());
*/ /////////////////////////////////////////

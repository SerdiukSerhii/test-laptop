// //

// // function addOverNum(value, ...args) {
// //   let totalSum = 0;
// //   for (const arg of args) {
// //     if (arg > value) totalSum += arg;
// //   }
// //   return totalSum;
// // }
// // console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));
// // console.log(addOverNum(50, 15, 27));
// // console.log(addOverNum(15, 32, 6, 13, 19, 8));

// // function getExtremeScores(scores) {
// //   return {
// //     best: Math.max(...scores),
// //     worst: Math.min(...scores),
// //   };
// // }
// // console.log(getExtremeScores([89, 64, 42, 17, 93, 51, 26]));

// // !===================== task-1 =============================

// function isEnoughCapacity(products, containerSize) {
//   let totalNumProducts = 0;
//   const productsValues = Object.values(products);
//   for (const value of productsValues) {
//     totalNumProducts += value;
//   }
//   return totalNumProducts <= containerSize;
// }

// console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)); // true

// console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)); // false

// console.log(isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)); // true

// console.log(isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)); // false;

// // !===========================================================================

// // !======================== task-2 ===============================================

// function calcAverageCalories(days) {
//   let sumCalories = 0;
//   for (const day of days) {
//     sumCalories += day.calories;
//   }
//   if (days.length === 0) {
//     return 0;
//   }
//   return sumCalories / days.length;
// }

// console.log(
//   calcAverageCalories([
//     { day: "monday", calories: 3010 },
//     { day: "tuesday", calories: 3200 },
//     { day: "wednesday", calories: 3120 },
//     { day: "thursday", calories: 2900 },
//     { day: "friday", calories: 3450 },
//     { day: "saturday", calories: 3280 },
//     { day: "sunday", calories: 3300 },
//   ]),
// ); // 3180

// console.log(
//   calcAverageCalories([
//     { day: "monday", calories: 2040 },
//     { day: "tuesday", calories: 2270 },
//     { day: "wednesday", calories: 2420 },
//     { day: "thursday", calories: 1900 },
//     { day: "friday", calories: 2370 },
//     { day: "saturday", calories: 2280 },
//     { day: "sunday", calories: 2610 },
//   ]),
// ); // 2270

// console.log(calcAverageCalories([])); // 0
// // !===========================================================================

// // !======================== task-3 ===============================================

// const profile = {
//   username: "Jacob",
//   playTime: 300,

//   changeUsername(newName) {
//     this.username = newName;
//   },
//   updatePlayTime(hours) {
//     this.playTime += hours;
//   },
//   getInfo() {
//     return `${this.username} has ${this.playTime} active hours!`;
//   },
// };

// console.log(profile.getInfo()); // "Jacob has 300 active hours!"

// profile.changeUsername("Marco");
// console.log(profile.getInfo()); // "Marco has 300 active hours!"

// profile.updatePlayTime(20);
// console.log(profile.getInfo()); // "Marco has 320 active hours!"
// // !===========================================================================

// function makePizza() {
//   return "Your pizza is being prepared, please wait.";
// }

// const result = makePizza();
// const pointer = makePizza;

// console.log(result);
// console.log(pointer);

// !======================== task-4 ===============================================

// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// }
// console.log(makeMessage("Royal Grand", makePizza));
// console.log(makeMessage("Ultracheese", deliverPizza));
// !===========================================================================

// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}`);
// });

// makePizza("Ultracheese", function eatPizza(pizzaName) {
//   console.log(`Eating pizza ${pizzaName}`);
// });
// !===========================================================================

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Tell-Tale Heart",
//     author: "Edgar Allan Poe",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";

// const topRatedBooks = books.filter((book) => book.rating >= MIN_RATING);
// const booksByAuthor = books.filter((book) => book.author === AUTHOR);
// console.log(topRatedBooks);
// console.log(booksByAuthor);
// !===========================================================================

// const getUsersWithEyeColor = (users, color) => {
//   return users.filter((user) => user.eyeColor === color);
// };

// console.log(getUsersWithEyeColor(users, "blue"));
// console.log(getUsersWithEyeColor(users, "green"));
// console.log(getUsersWithEyeColor(users, "red"));
// !===========================================================================

// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244,
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]

// const totalPlayTime = playtimes.reduce(
//   (totalValue, number) => totalValue + number,
//   0,
// );

// const averagePlayTime = totalPlayTime / playtimes.length;

// console.log(totalPlayTime);
// console.log(averagePlayTime);
// !===========================================================================

// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];

// const totalAveragePlaytimePerGame = players.reduce((acc, player) => {
//   return acc + player.playtime / player.gamesPlayed;
// }, 0);
// console.log(totalAveragePlaytimePerGame);
// !==========================================================================
// const users = [
//   { name: "Moore Hensley", balance: 2811 },
//   { name: "Sharlene Bush", balance: 3823 },
// ];

// const calculateTotalBalance = (users) => {
//   return users.reduce((sum, user) => sum + user.balance, 0);
// };
// console.log(calculateTotalBalance(users)); // 20916
// console.log(calculateTotalBalance([])); // 0
// !==========================================================================

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];

// const ascendingReleaseDates = releaseDates.toSorted((a, b) => a - b);

// const descendingReleaseDates = releaseDates.toSorted((a, b) => b - a);
// console.log(ascendingReleaseDates);
// console.log(descendingReleaseDates);
// !==========================================================================
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Tell-Tale Heart",
//     author: "Edgar Allan Poe",
//     rating: 7.75,
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     rating: 7.94,
//   },
//   {
//     title: "Enemy of God",
//     author: "Bernard Cornwell",
//     rating: 8.67,
//   },
// ];

// const sortedByAuthorName = books.toSorted((firstBook, secondBook) =>
//   firstBook.author.localeCompare(secondBook.author),
// );

// const sortedByReversedAuthorName = books.toSorted((firstBook, secondBook) =>
//   secondBook.author.localeCompare(firstBook.author),
// );

// const sortedByAscendingRating = books.toSorted(
//   (firstBook, secondBook) => firstBook.rating - secondBook.rating,
// );

// const sortedByDescentingRating = books.toSorted(
//   (firstBook, secondBook) => secondBook.rating - firstBook.rating,
// );

// console.log(sortedByAuthorName);
// console.log(sortedByReversedAuthorName);
// console.log(sortedByAscendingRating);
// console.log(sortedByDescentingRating);
// !==========================================================================
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Tell-Tale Heart",
//     author: "Edgar Allan Poe",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;

// const names = books
//   .filter((book) => book.rating > MIN_BOOK_RATING)
//   .map((book) => book.author)
//   .toSorted((firstBook, secondBook) => firstBook.localeCompare(secondBook));

// console.log(names);

// !=================================================================

// !=========================== task-1 ==============================

// const getUserNames = (users) => users.map((user) => user.name);

// console.log(
//   getUserNames([
//     {
//       name: "Moore Hensley",
//       email: "moorehensley@indexia.com",
//       balance: 2811,
//     },
//     {
//       name: "Sharlene Bush",
//       email: "sharlenebush@tubesys.com",
//       balance: 3821,
//     },
//     {
//       name: "Ross Vazquez",
//       email: "rossvazquez@xinware.com",
//       balance: 3793,
//     },
//     {
//       name: "Elma Head",
//       email: "elmahead@omatom.com",
//       balance: 2278,
//     },
//     {
//       name: "Carey Barr",
//       email: "careybarr@nurali.com",
//       balance: 3951,
//     },
//     {
//       name: "Blackburn Dotson",
//       email: "blackburndotson@furnigeer.com",
//       balance: 1498,
//     },
//     {
//       name: "Sheree Anthony",
//       email: "shereeanthony@kog.com",
//       balance: 2764,
//     },
//   ]),
// ); // ["Moore Hensley", "Sharlene Bush", "Ross Vazquez", "Elma Head", "Carey Barr", "Blackburn Dotson", "Sheree Anthony"]
// !=======================================================================

// !=========================== task-2 ==============================

// const getUsersWithFriend = (users, friendName) => {
//   return users.filter((user) => user.friends.includes(friendName));
// };

// const allUsers = [
//   {
//     name: "Moore Hensley",
//     friends: ["Sharron Pace"],
//   },
//   {
//     name: "Sharlene Bush",
//     friends: ["Briana Decker", "Sharron Pace"],
//   },
//   {
//     name: "Ross Vazquez",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//   },
//   {
//     name: "Elma Head",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//   },
//   {
//     name: "Carey Barr",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//   },
//   {
//     name: "Blackburn Dotson",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//   },
//   {
//     name: "Sheree Anthony",
//     friends: ["Goldie Gentry", "Briana Decker"],
//   },
// ];

// console.log(getUsersWithFriend(allUsers, "Briana Decker"));
// // [
// //   {
// //     name: "Sharlene Bush",
// //     friends: ["Briana Decker", "Sharron Pace"]
// //   },
// //   {
// //     name: "Sheree Anthony",
// //     friends: ["Goldie Gentry", "Briana Decker"]
// //   }
// // ]

// console.log(getUsersWithFriend(allUsers, "Goldie Gentry"));
// // [
// //   {
// //     name: "Elma Head",
// //     friends: ["Goldie Gentry", "Aisha Tran"]
// //   },
// //   {
// //     name: "Sheree Anthony",
// //     friends: ["Goldie Gentry", "Briana Decker"]
// //   }
// // ]

// console.log(getUsersWithFriend(allUsers, "Adrian Cross")); // []

// !=======================================================================

// !=========================== task-3 ==============================

// const sortByDescendingFriendCount = (users) => {
//   return users.toSorted(
//     (a, b) => (b.friends.length || 0) - (a.friends.length || 0),
//   );
// };

// console.log(
//   sortByDescendingFriendCount([
//     {
//       name: "Moore Hensley",
//       friends: ["Sharron Pace"],
//       gender: "male",
//     },
//     {
//       name: "Sharlene Bush",
//       friends: ["Briana Decker", "Sharron Pace"],
//       gender: "female",
//     },
//     {
//       name: "Ross Vazquez",
//       friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//       gender: "male",
//     },
//     {
//       name: "Elma Head",
//       friends: ["Goldie Gentry", "Aisha Tran"],
//       gender: "female",
//     },
//     {
//       name: "Carey Barr",
//       friends: ["Jordan Sampson", "Eddie Strong"],
//       gender: "male",
//     },
//     {
//       name: "Blackburn Dotson",
//       friends: ["Jacklyn Lucas", "Linda Chapman"],
//       gender: "male",
//     },
//     {
//       name: "Sheree Anthony",
//       friends: ["Goldie Gentry", "Briana Decker"],
//       gender: "female",
//     },
//   ]),
// );
// // [
// //   {
// //     name: "Ross Vazquez",
// //     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
// //     gender: "male"
// //   },
// //   {
// //     name: "Sharlene Bush",
// //     friends: ["Briana Decker", "Sharron Pace"],
// //     gender: "female"
// //   },
// //   {
// //     name: "Elma Head",
// //     friends: ["Goldie Gentry", "Aisha Tran"],
// //     gender: "female"
// //   },
// //   {
// //     name: "Carey Barr",
// //     friends: ["Jordan Sampson", "Eddie Strong"],
// //     gender: "male"
// //   },
// //   {
// //     name: "Blackburn Dotson",
// //     friends: ["Jacklyn Lucas", "Linda Chapman"],
// //     gender: "male"
// //   },
// //   {
// //     name: "Sheree Anthony",
// //     friends: ["Goldie Gentry", "Briana Decker"],
// //     gender: "female"
// //   },
// //   {
// //     name: "Moore Hensley",
// //     friends: ["Sharron Pace"],
// //     gender: "male"
// //   }
// // ]

// // !=======================================================================
// // !=========================== task-4 ==============================

// // !=======================================================================

// !=========================== task-4 ==============================

const getTotalBalanceByGender = (users, gender) => {
  return users
    .filter((user) => user.gender === gender)
    .reduce((total, user) => total + user.balance, 0);
};

const clients = [
  {
    name: "Moore Hensley",
    gender: "male",
    balance: 2811,
  },
  {
    name: "Sharlene Bush",
    gender: "female",
    balance: 3821,
  },
  {
    name: "Ross Vazquez",
    gender: "male",
    balance: 3793,
  },
  {
    name: "Elma Head",
    gender: "female",
    balance: 2278,
  },
  {
    name: "Carey Barr",
    gender: "male",
    balance: 3951,
  },
  {
    name: "Blackburn Dotson",
    gender: "male",
    balance: 1498,
  },
  {
    name: "Sheree Anthony",
    gender: "female",
    balance: 2764,
  },
];

console.log(getTotalBalanceByGender(clients, "male")); // 12053

console.log(getTotalBalanceByGender(clients, "female")); // 8863

// !=======================================================================

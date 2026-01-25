//

// function addOverNum(value, ...args) {
//   let totalSum = 0;
//   for (const arg of args) {
//     if (arg > value) totalSum += arg;
//   }
//   return totalSum;
// }
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));
// console.log(addOverNum(50, 15, 27));
// console.log(addOverNum(15, 32, 6, 13, 19, 8));

// function getExtremeScores(scores) {
//   return {
//     best: Math.max(...scores),
//     worst: Math.min(...scores),
//   };
// }
// console.log(getExtremeScores([89, 64, 42, 17, 93, 51, 26]));

// !===================== task-1 =============================

function isEnoughCapacity(products, containerSize) {
  let totalNumProducts = 0;
  const productsValues = Object.values(products);
  for (const value of productsValues) {
    totalNumProducts += value;
  }
  return totalNumProducts <= containerSize;
}

console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)); // true

console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)); // false

console.log(isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)); // true

console.log(isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)); // false;

// !===========================================================================

// !======================== task-2 ===============================================

function calcAverageCalories(days) {
  let sumCalories = 0;
  for (const day of days) {
    sumCalories += day.calories;
  }
  if (days.length === 0) {
    return 0;
  }
  return sumCalories / days.length;
}

console.log(
  calcAverageCalories([
    { day: "monday", calories: 3010 },
    { day: "tuesday", calories: 3200 },
    { day: "wednesday", calories: 3120 },
    { day: "thursday", calories: 2900 },
    { day: "friday", calories: 3450 },
    { day: "saturday", calories: 3280 },
    { day: "sunday", calories: 3300 },
  ]),
); // 3180

console.log(
  calcAverageCalories([
    { day: "monday", calories: 2040 },
    { day: "tuesday", calories: 2270 },
    { day: "wednesday", calories: 2420 },
    { day: "thursday", calories: 1900 },
    { day: "friday", calories: 2370 },
    { day: "saturday", calories: 2280 },
    { day: "sunday", calories: 2610 },
  ]),
); // 2270

console.log(calcAverageCalories([])); // 0
// !===========================================================================

// !======================== task-3 ===============================================

const profile = {
  username: "Jacob",
  playTime: 300,

  changeUsername(newName) {
    this.username = newName;
  },
  updatePlayTime(hours) {
    this.playTime += hours;
  },
  getInfo() {
    return `${this.username} has ${this.playTime} active hours!`;
  },
};

console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"
// !===========================================================================

// !================================  task-1  ==========================
function slugify(title) {
  const slug = title.toLowerCase().split(" ");
  return slug.join("-");
}

console.log(slugify("Arrays for beginners")); // "arrays-for-beginners"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"
// !================================

// !================================   task-2  ==========================

// function makeArray(firstArray, secondArray, maxLength) {
//   const arrs = firstArray.concat(secondArray);
//   return arrs.slice(0, maxLength);
// }

//  тернарный оператор
// function makeArray(firstArray, secondArray, maxLength) {
//   const arrs = firstArray.concat(secondArray);
//   return arrs.length > maxLength ? arrs.slice(0, maxLength) : arrs;
// }

// самый сокращеный вариант
// function makeArray(firstArray, secondArray, maxLength) {
//   return firstArray.concat(secondArray).slice(0, maxLength);
// }

function makeArray(firstArray, secondArray, maxLength) {
  const arrs = firstArray.concat(secondArray);
  if (arrs.length > maxLength) {
    return arrs.slice(0, maxLength);
  } else {
    return arrs;
  }
}
console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []

// !================================ task-3 ==========================

function filterArray(numbers, value) {
  const newArr = [];
  for (let i = 0; i > numbers.length; i++) {
    if (value.includes(numbers[i])) {
      newArr.push(i);
    }
  }
  return newArr;
}

console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]

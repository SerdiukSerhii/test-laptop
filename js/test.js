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

function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

const firstNumber = getFirstElement([1, 2, 3]); // 1
const firstString = getFirstElement(["a", "b", "c"]); // "a"
const firstBoolean = getFirstElement([true, false, true]); // true

console.log(firstNumber); // 1
console.log(firstString); // "a"
console.log(firstBoolean); // true

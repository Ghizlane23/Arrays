// Task1
const myArray = [];
myArray.push("apple");
myArray.push("banana");
myArray.push("cherry");
console.log(myArray);
console.log(myArray[0]);
console.log(myArray[myArray.length - 1]);
myArray.unshift("mango");
console.log(myArray);
myArray.pop();
console.log(myArray);
const numbers = [5, 10, 15, 20, 25];
numbers.splice(2, 1);
console.log(numbers);
function num(array) {
  return array.length;
}
console.log(num(numbers));
const temperatures = [72, 68, 74, 80, 76];
console.log(Math.max(...temperatures));
console.log(myArray.includes("banana"));

//Task 2

function isArrayLengthOdd(numb) {
  return numb.length % 2 == 1;
}
console.log(isArrayLengthOdd(numbers));

function isArrayLengthEven(numb) {
  return numb.length - (1 % 2) == 0;
}
console.log(isArrayLengthEven(numbers));

function addLailaToArray(instructors) {
  instructors.push("Laila");
}
const inst = ["Meshary", "hasan"];
addLailaToArray(inst);
console.log(inst);

function eliminateTeam(teams) {
  teams.pop();
}
t = ["Brazil", "Germany", "Italy", "France", "Morocco"];
eliminateTeam(t);
console.log(t);

function secondHalfOfArrayIfItIsEven(f) {
  if (!(f.length % 2)) {
    return f.slice(f.length / 2, f.length);
  } else {
    return [];
  }
}
fruits = ["apple", "orange", "banana", "kiwi", "gff", "serwe"];
console.log(secondHalfOfArrayIfItIsEven(fruits));

function youGottaCalmDown(n) {
  if (n.includes("!")) {
    const number = n.indexOf("!");
    return n.slice(0, number + 1);
  } else {
    return n;
  }
}
console.log(youGottaCalmDown("Taylor Swift!!!!!!"));

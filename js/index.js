// Examples of Variables

let favoriteNumber = 10;
console.log(favoriteNumber);

favoriteNumber = 11;
console.log(favoriteNumber);

const favoriteLetter = "A";
console.log(favoriteLetter);

// The two lines below break our code, so we commented them out
// favoriteLetter = "B";
// console.log(favoriteLetter);

// var is an antiquated keyword that still works but people don't use as much
// var is a variable variable, like let
var oldKeyword = 6;

// Data Types

// String

const exampleString = "JavaScript";
const anotherStringEx = "8";

console.log("length of string", exampleString.length);

console.log("uppercase", exampleString.toUpperCase());

const text1 = "Hello";
const text2 = "World";
const text3 = text1.concat(" ", text2, "!");
console.log("concat method", text3);

const text4 = "World";
const text5 = "Hello";
const text6 = text4 + ", " + text5 + "!";
console.log("concat +", text6);

str = "Please visit Microsoft and Microsoft!";
const n = str.replace("Microsoft", "W3Schools");
console.log(n);
const o = str.replace(/Microsoft/g, "W3Schools");
console.log(o);

// Number

const exampleInteger = 8;
const exampleFloat = 8.0;

console.log("numbers", 8 + 7);
console.log("strings", "8" + "7");
console.log("combo", "8" + 7);
console.log("float-int combo", 8.1 + 7);

console.log("length of number", exampleInteger.length);

console.log("convert string to num", parseInt("87"), typeof parseInt("87"));
console.log("convert num to string", (87).toString(), typeof toString(87));

// Boolean

const exampleTrue = true;
const exampleFalse = false;
console.log("length of Boolean", exampleTrue.length);

// Array

const exampleArray = [
  "JavaScript",
  "HMTL",
  "CSS",
  "React",
  8,
  true,
  ["Hello", "goodbye"],
];
console.log("length of array", exampleArray.length);

const exampleArrayOfObject = [
  {
    firstName: "Jon",
    lastName: "Doe",
    favoriteNumber: favoriteNumber,
    anotherNumber: 9,
    anArray: ["one", "two", "three"],
  },
  {
    firstName: "Jane",
    lastName: "Doe",
    favoriteNumber: 7,
    anotherNumber: 9,
    anArray: ["one", "two", "three"],
  },
  {
    firstName: "Jack",
    lastName: "Doe",
    favoriteNumber: favoriteNumber,
    anotherNumber: 9,
    anArray: ["one", "two", "three"],
  },
];

// Object

const exampleObject = {
  firstName: "Jon",
  lastName: "Doe",
  favoriteNumber: favoriteNumber,
  anotherNumber: 9,
  anArray: ["one", "two", "three"],
  //   functionExample: // function defined here
};

console.log("length of object", exampleObject.length);

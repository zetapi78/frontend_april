console.log("from live code js");

// Step 1: Global Search
// a. change HTML to input
// b. add button to search
// c. get input and button elements by ids
// d. add event listener to each
// e. enable button when input has value / disable otherwise
// f. when user submits form, check if input is a number or string
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
console.log(searchInput);
console.log(searchButton);

// Some examles using conditionals
// const onInput = (event) => {
//   //   console.log(event.target.value);
//   //   console.log(searchInput.value);
//   if (event.target.value === "c") {
//     console.log(event.target.value.toUpperCase());
//   } else if (event.target.value === "cookies") {
//     console.log("I love cookies.");
//   } else if (event.target.value === "o") {
//     console.log(event.target.value);
//   } else {
//     console.log(event.target.value);
//   }

//   if (event.target.value === "c") {
//     console.log(event.target.value.toUpperCase());
//   }
//   if (event.target.value === "cookies") {
//     console.log("I love cookies.");
//   }

//   if (event.target.id === "") {
//     console.log("correct target");
//   } else if (event.target.value) {
//     console.log("this is false");
//   }

//   if (!event.target.id) {
//   }
// };

// These are falsy
// ""
// []
// 0
// {}
// false

// Data is truty if it has a value that is not empty

const onInput = (event) => {
  // console.log(searchInput.value);
  // Example of a conditional with logical operators that check
  // if more than one input and all require a value
  // Example code : if (searchInput.value && firstName.value && lastName.value) {

  if (searchInput.value) {
    searchButton.disabled = false;
    console.log(event.target.value);
    console.log("searchButton disabled attribute: ", searchButton.disabled);
  } else {
    searchButton.disabled = true;
  }
};

const submitForm = () => {
  console.log("click");
};

searchInput.addEventListener("input", onInput);
searchButton.addEventListener("click", submitForm);

const twentyFive = document.getElementById("25");
console.log("25", twentyFive);

const twentySix = document.getElementById("26");
const twentySeven = document.getElementById("27");
const twentyEight = document.getElementById("28");
const twentyNine = document.getElementById("29");
const thirty = document.getElementById("30");
const thirtyOne = document.getElementById("31");

const clickNumber = (event) => {
  if (event.target.id === "25") {
    console.log(event.target.id);
    console.log(event.target.classList);

    twentyFive.classList.add("day-number-selected");
    twentySix.classList.remove("day-number-selected");
    twentySeven.classList.remove("day-number-selected");
    twentyEight.classList.remove("day-number-selected");
    twentyNine.classList.remove("day-number-selected");
    thirty.classList.remove("day-number-selected");
    thirtyOne.classList.remove("day-number-selected");
  } else if (event.target.id === "26") {
    console.log(event.target.id);
    twentyFive.classList.remove("day-number-selected");
    twentySix.classList.add("day-number-selected");
    twentySeven.classList.remove("day-number-selected");
    twentyEight.classList.remove("day-number-selected");
    twentyNine.classList.remove("day-number-selected");
    thirty.classList.remove("day-number-selected");
    thirtyOne.classList.remove("day-number-selected");
  } else if (event.target.id === "27") {
    console.log(event.target.id);
    twentyFive.classList.remove("day-number-selected");
    twentySix.classList.remove("day-number-selected");
    twentySeven.classList.add("day-number-selected");
    twentyEight.classList.remove("day-number-selected");
    twentyNine.classList.remove("day-number-selected");
    thirty.classList.remove("day-number-selected");
    thirtyOne.classList.remove("day-number-selected");
  } else if (event.target.id === "28") {
    console.log(event.target.id);
    twentyFive.classList.remove("day-number-selected");
    twentySix.classList.remove("day-number-selected");
    twentySeven.classList.remove("day-number-selected");
    twentyEight.classList.add("day-number-selected");
    twentyNine.classList.remove("day-number-selected");
    thirty.classList.remove("day-number-selected");
    thirtyOne.classList.remove("day-number-selected");
  } else if (event.target.id === "29") {
    console.log(event.target.id);
    twentyFive.classList.remove("day-number-selected");
    twentySix.classList.remove("day-number-selected");
    twentySeven.classList.remove("day-number-selected");
    twentyEight.classList.remove("day-number-selected");
    twentyNine.classList.add("day-number-selected");
    thirty.classList.remove("day-number-selected");
    thirtyOne.classList.remove("day-number-selected");
  } else if (event.target.id === "30") {
    console.log(event.target.id);
    twentyFive.classList.remove("day-number-selected");
    twentySix.classList.remove("day-number-selected");
    twentySeven.classList.remove("day-number-selected");
    twentyEight.classList.remove("day-number-selected");
    twentyNine.classList.remove("day-number-selected");
    thirty.classList.add("day-number-selected");
    thirtyOne.classList.remove("day-number-selected");
  } else if (event.target.id === "31") {
    console.log(event.target.id);
    twentyFive.classList.remove("day-number-selected");
    twentySix.classList.remove("day-number-selected");
    twentySeven.classList.remove("day-number-selected");
    twentyEight.classList.remove("day-number-selected");
    twentyNine.classList.remove("day-number-selected");
    thirty.classList.remove("day-number-selected");
    thirtyOne.classList.add("day-number-selected");
  }
};

twentyFive.addEventListener("click", clickNumber);
twentySix.addEventListener("click", clickNumber);
twentySeven.addEventListener("click", clickNumber);
twentyEight.addEventListener("click", clickNumber);
twentyNine.addEventListener("click", clickNumber);
thirty.addEventListener("click", clickNumber);
thirtyOne.addEventListener("click", clickNumber);

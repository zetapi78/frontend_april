// Step 1: Global Search
// a. change HTML to input
// b. add button to search
// c. get input and button elements by ids
// d. add event listener to each
// e. enable button when input has value / disable otherwise
// f. when user submits form, check if input is a number or string

const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");

const toggleFormButton = (e) => {
  console.log(e.target.value);
  console.log(searchInput.value);
  console.log(searchButton.disabled);

  if (searchInput.value) {
    searchButton.disabled = false;
  } else {
    searchButton.disabled = true;
  }
};
const submitForm = () => {};

searchInput.addEventListener("input", toggleFormButton);
searchButton.addEventListener("click", submitForm);

// Step 2: Get Calendar Working
// a. get each day element by id
// b. add if / else if for each element
// c. inside each conditional block, add or remove class depending upon which clicked
const twentyFive = document.getElementById("25");
console.log(twentyFive);

const twentySix = document.getElementById("26");
const twentySeven = document.getElementById("27");
const twentyEight = document.getElementById("28");
const twentyNine = document.getElementById("29");
const thirty = document.getElementById("30");
const thirtyOne = document.getElementById("31");

// const changeSelected = (e) => {
//   console.log(e.target.id);
//   if (e.target.id === "25") {
//     twentyFive.classList.add("day-number-selected");
//     twentySix.classList.remove("day-number-selected");
//     twentySeven.classList.remove("day-number-selected");
//     twentyEight.classList.remove("day-number-selected");
//     twentyNine.classList.remove("day-number-selected");
//     thirty.classList.remove("day-number-selected");
//     thirtyOne.classList.remove("day-number-selected");
//   } else if (e.target.id === "26") {
//     twentyFive.classList.remove("day-number-selected");
//     twentySix.classList.add("day-number-selected");
//     twentySeven.classList.remove("day-number-selected");
//     twentyEight.classList.remove("day-number-selected");
//     twentyNine.classList.remove("day-number-selected");
//     thirty.classList.remove("day-number-selected");
//     thirtyOne.classList.remove("day-number-selected");
//   } else if (e.target.id === "27") {
//     twentyFive.classList.remove("day-number-selected");
//     twentySix.classList.remove("day-number-selected");
//     twentySeven.classList.add("day-number-selected");
//     twentyEight.classList.remove("day-number-selected");
//     twentyNine.classList.remove("day-number-selected");
//     thirty.classList.remove("day-number-selected");
//     thirtyOne.classList.remove("day-number-selected");
//   } else if (e.target.id === "28") {
//     twentyFive.classList.remove("day-number-selected");
//     twentySix.classList.remove("day-number-selected");
//     twentySeven.classList.remove("day-number-selected");
//     twentyEight.classList.add("day-number-selected");
//     twentyNine.classList.remove("day-number-selected");
//     thirty.classList.remove("day-number-selected");
//     thirtyOne.classList.remove("day-number-selected");
//   } else if (e.target.id === "29") {
//     twentyFive.classList.remove("day-number-selected");
//     twentySix.classList.remove("day-number-selected");
//     twentySeven.classList.remove("day-number-selected");
//     twentyEight.classList.remove("day-number-selected");
//     twentyNine.classList.add("day-number-selected");
//     thirty.classList.remove("day-number-selected");
//     thirtyOne.classList.remove("day-number-selected");
//   } else if (e.target.id === "30") {
//     twentyFive.classList.remove("day-number-selected");
//     twentySix.classList.remove("day-number-selected");
//     twentySeven.classList.remove("day-number-selected");
//     twentyEight.classList.remove("day-number-selected");
//     twentyNine.classList.remove("day-number-selected");
//     thirty.classList.add("day-number-selected");
//     thirtyOne.classList.remove("day-number-selected");
//   } else if (e.target.id === "31") {
//     twentyFive.classList.remove("day-number-selected");
//     twentySix.classList.remove("day-number-selected");
//     twentySeven.classList.remove("day-number-selected");
//     twentyEight.classList.remove("day-number-selected");
//     twentyNine.classList.remove("day-number-selected");
//     thirty.classList.remove("day-number-selected");
//     thirtyOne.classList.add("day-number-selected");
//   }
// };

// Step 3: Refactor Calendar code
// a. create array of html elements for day
// b. loop through array to see which day was clicked
// c. add/remove class depending upon which one clicked

const arrayOfDates = [
  twentyFive,
  twentySix,
  twentySeven,
  twentyEight,
  twentyNine,
  thirty,
  thirtyOne,
];

const changeSelected = (e) => {
  for (let i = 0; i < arrayOfDates.length; i++) {
    if (e.target.id === arrayOfDates[i].id) {
      arrayOfDates[i].classList.add("day-number-selected");
    } else {
      arrayOfDates[i].classList.remove("day-number-selected");
    }
  }
};

twentyFive.addEventListener("click", changeSelected);
twentySix.addEventListener("click", changeSelected);
twentySeven.addEventListener("click", changeSelected);
twentyEight.addEventListener("click", changeSelected);
twentyNine.addEventListener("click", changeSelected);
thirty.addEventListener("click", changeSelected);
thirtyOne.addEventListener("click", changeSelected);

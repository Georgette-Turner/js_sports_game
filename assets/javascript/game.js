console.log

let incrementButton = document.querySelector("#increment");
let decrementButton = document.querySelector("#decrement");
let counter = document.querySelector("#counter");

let resetButton = document.querySelector("#reset-button");
let resetCounter = document.querySelector("#num-resets");


resetButton.addEventListener("click", function () {

  console.log("+ reset-button clicked");
  let newCounterValue = Number(resetCounter.innerHTML) + 1;

  resetCounter.innerHTML = newCounterValue;
})

//Team 1//
let teamOneshoot = document.querySelector("#teamone-shoot-button");
let numshotsT1Counter = document.querySelector("#teamone-numshots");

teamOneshoot.addEventListener("click", function () {

  console.log("+ teamone-shoot-button clicked");
  let newCounterValue = Number(numshotsT1Counter.innerHTML) + 1;

  numshotsT1Counter.innerHTML = newCounterValue;
})

//Team 2//
let teamTwoshoot = document.querySelector("#teamtwo-shoot-button");
let numshotsT2Counter = document.querySelector("#teamtwo-numshots");

teamTwoshoot.addEventListener("click", function () {

  console.log("+ teamtwo-shoot-button clicked");
  let newCounterValue = Number(numshotsT1Counter.innerHTML) + 1;

  numshotsT2Counter.innerHTML = newCounterValue;
})

//Team 1 goal counter//
let teamOnegoal = document.querySelector("#teamone-goal-button");
let numgoalT1Counter = document.querySelector("#teamone-numgoals");

teamOnegoal.addEventListener("click", function () {

  console.log("+ teamone-goal-button clicked");
  let newCounterValue = Number(numgoalT1Counter.innerHTML) + 3;

  numgoalT1Counter.innerHTML = newCounterValue;
})

//Team 2 goal counter/
let teamTwogoal = document.querySelector("#teamtwo-goal-button");
let numgoalT2Counter = document.querySelector("#teamtwo-numgoals");

teamTwogoal.addEventListener("click", function () {

  console.log("+ teamtwo-goal-button clicked");
  let newCounterValue = Number(numgoalT2Counter.innerHTML) + 3;

  numgoalT2Counter.innerHTML = newCounterValue;
})


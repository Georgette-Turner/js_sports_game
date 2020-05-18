
let resetButton = document.querySelector("#reset-button");
let resetCounter = document.querySelector("#num-resets");


resetButton.addEventListener("click", function () {

  console.log("+ reset-button clicked");
  let newCounterValue = Number(resetCounter.innerHTML) + 1;
  resetCounter.innerHTML = newCounterValue;


  numshotsT1Counter.innerHTML = 0;
  numgoalT1Counter.innerHTML = 0;

  numshotsT2Counter.innerHTML = 0;
  numgoalT2Counter.innerHTML = 0;
})

//Team 1 shot counter//
let teamOneshoot = document.querySelector("#teamone-shoot-button");
let numshotsT1Counter = document.querySelector("#teamone-numshots");
let numgoalT1Counter = document.querySelector("#teamone-numgoals");

teamOneshoot.addEventListener("click", function () {

  console.log("+ teamone-shoot-button clicked");
  let newShotsCounterValue = Number(numshotsT1Counter.innerHTML) + 1;
  numshotsT1Counter.innerHTML = newShotsCounterValue;

  if (Math.random() * 100 < 80) {
    console.log("teamone-goal");

    let newGoalCounterValue = Number(numgoalT1Counter.innerHTML) + 1;
    numgoalT1Counter.innerHTML = newGoalCounterValue;
  }
})

//Team 2 shot counter//
let teamTwoshoot = document.querySelector("#teamtwo-shoot-button");
let numshotsT2Counter = document.querySelector("#teamtwo-numshots");
let numgoalT2Counter = document.querySelector("#teamtwo-numgoals");

teamTwoshoot.addEventListener("click", function () {

  console.log("+ teamtwo-shoot-button clicked");
  let newShotsCounterValue = Number(numshotsT2Counter.innerHTML) + 1;
  numshotsT2Counter.innerHTML = newShotsCounterValue;

  if (Math.random() * 100 < 20) {
    console.log("teamtwo-goal");

    let newGoalCounterValue = Number(numgoalT2Counter.innerHTML) + 1;
    numgoalT2Counter.innerHTML = newGoalCounterValue;
  }
})
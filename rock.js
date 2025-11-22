function msgR() {
  const randomNumber = Math.random();
  let pcMove = "";

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    pcMove = "Rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    pcMove = "Paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    pcMove = "Scissors";
  }

  let result = "";
  if (pcMove === "Rock") {
    result = "Tie.";
  } else if (pcMove === "Paper") {
    result = "You lose";
  } else if (pcMove === "Scissors") {
    result = "you win";
  }

  alert(`You picked Rock, pc picked ${pcMove}, ${result}. `);
}
function msgP() {
  const randomNumber = Math.random();
  let pcMove = "";

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    pcMove = "Rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    pcMove = "Paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    pcMove = "Scissors";
  }

  let result = "";
  if (pcMove === "Rock") {
    result = "You win.";
  } else if (pcMove === "Paper") {
    result = "Tie";
  } else if (pcMove === "Scissors") {
    result = "you lose";
  }

  alert(`You picked Paper, pc picked ${pcMove}, ${result}. `);
}
function msgS() {
  const randomNumber = Math.random();
  let pcMove = "";

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    pcMove = "Rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    pcMove = "Paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    pcMove = "Scissors";
  }

  let result = "";
  if (pcMove === "Rock") {
    result = "You lose.";
  } else if (pcMove === "Paper") {
    result = "You win";
  } else if (pcMove === "Scissors") {
    result = "Tie";
  }

  alert(`You picked Scissors, pc picked ${pcMove}, ${result}. `);
}

function msg2H() {
  let result = "";
  computerMove = "";
  const randomNum = Math.random();

  if (randomNum <= 0.5 && randomNum < 0.5) {
    computerMove = "Head";
  } else if (randomNum <= 1 && randomNum > 0.5) {
    computerMove = "Tail";
  }

  if (computerMove === "Head") {
    result = "You win.";
  } else if (computerMove === "Tail") {
    result = "you lose.";
  }
  alert(`You chosed Head. pc chosed  ${computerMove}, ${result}`);
}
function msg2T() {
  let result = "";
  computerMove = "";
  const randomNum = Math.random();

  if (randomNum <= 0.5 && randomNum < 0.5) {
    computerMove = "Head";
  } else if (randomNum <= 1 && randomNum > 0.5) {
    computerMove = "Tail";
  }

 result = computerMove === "Head" ? "You lose" : "You win";

  alert(`You chosed Tail. pc chosed ${computerMove},  ${result}`);
}

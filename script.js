// Project 1: Scissors Paper Stone

// Scissors take on value 2
// Paper take on value 1
// Stone take on value 0
// So scissors can win paper, paper can win stone, stone can win scissors by (

// if value equal to each other draw
// for scissors and stone, would require -2 or 2

var main = function (input) {
  // Get opponent randomly-generated scissors paper stone
  var compScissorsPaperStone = getOppScissorsPaperStone();
  console.log("opponent");
  console.log(compScissorsPaperStone);

  // Assign numerical value to player's scissors paper stone
  var playerScissorsPaperStone = 0;
  var myOutputValue = "";

  if (input === "scissors") {
    playerScissorsPaperStone = 2;
    console.log("player scissors");
    console.log(playerScissorsPaperStone);
  } else if (input == "paper") {
    playerScissorsPaperStone = 1;
    console.log("player paper");
    console.log(playerScissorsPaperStone);
  } else if (input === "stone") {
    playerScissorsPaperStone = 0;
    console.log("player stone");
    console.log(playerScissorsPaperStone);
  } else {
    myOutputValue = `You have entered an invalid entry. Please enter the follwing only "scissors", "paper" or "stone".`;
  }

  // player stone, computer scissors, player wins, computer loses
  if (playerScissorsPaperStone - compScissorsPaperStone == -2) {
    console.log("player stone, computer scissors, player wins, computer loses");
    myOutputValue = `You win! The computer loses.`;
  }

  // player scissors, computer stone, player loses, computer win
  else if (compScissorsPaperStone - playerScissorsPaperStone == -2) {
    console.log("player scissors, computer stone, player loses, computer win");
    myOutputValue = `You lose! The computer wins.`;
  }

  // player wins - player scissors, computer paper OR player paper, computer stone
  else if (playerScissorsPaperStone - compScissorsPaperStone == 1) {
    console.log(
      "player wins - player scissors, computer paper OR player paper, computer stone"
    );
    myOutputValue = `You win! The computer loses.`;
  }

  // computer wins - computer scissors, player paper OR computer paper, player stone
  else if (compScissorsPaperStone - playerScissorsPaperStone == 1) {
    console.log(
      "computer wins - computer scissors, player paper OR computer paper, player stone"
    );
    myOutputValue = `You lose! The computer wins.`;
  }
  // tie
  else if (playerScissorsPaperStone == compScissorsPaperStone) {
    myOutputValue = `It's a tie. Try again!`;
  }

  return myOutputValue;
};

var getOppScissorsPaperStone = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  var oppScissorsPaperStone = randomInteger;
  return 1;
  return oppScissorsPaperStone;
};

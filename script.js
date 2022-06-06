// Project 1: Scissors Paper Stone

/* I am assigning a numerical value to scissors, paper and stone
- Scissors take on value 2
- Paper take on value 1
- Stone take on value 0
If value is equals to each other, it is a draw
This is so scissors can win paper, paper can win stone if their difference is 1
For stone to win scissors, will need -2 */

// Global Variables for win-loss record and usernmae
var computerWins = 0;
var playerWins = 0;
var totalPlays = 0;

var currentGameMode = "waiting for username";
var userName = "";

var main = function (input) {
  // Get opponent randomly-generated scissors paper stone
  var compScissorsPaperStone = getOppScissorsPaperStone();
  console.log("opponent");
  console.log(compScissorsPaperStone);

  var myOutputValue = "";

  // Game mode set to ask for username
  if (currentGameMode == "waiting for username") {
    // set input as userName
    userName = input;

    // change game mode to scissorspaperstone
    currentGameMode = "scissors paper stone game";

    myOutputValue = `Hello ${userName}! <br> <br> Thank you for playing Scissors Paper Stone. <br> <br> To start, please type in "scissors", "paper", or "stone". The game will only accept the above inputs.`;

    // Once username has been set, to allow game to play
  } else if ((currentGameMode = "scissors paper stone game")) {
    // Assign numerical value to player's scissors paper stone
    if (input == "scissors") {
      var playerScissorsPaperStone = 2;
      console.log("player scissors");
      console.log(playerScissorsPaperStone);
    } else if (input == "paper") {
      playerScissorsPaperStone = 1;
      console.log("player paper");
      console.log(playerScissorsPaperStone);
    } else if (input == "stone") {
      playerScissorsPaperStone = 0;
      console.log("player stone");
      console.log(playerScissorsPaperStone);
    } else {
      // input validation
      myOutputValue = `You have entered an invalid entry. Please enter the follwing only "scissors", "paper" or "stone".`;
      return myOutputValue;
    }

    myOutputValue = playGame(playerScissorsPaperStone, compScissorsPaperStone);
  }
  return myOutputValue;
};

var playGame = function (playerScissorsPaperStone, compScissorsPaperStone) {
  var myOutputValue = "";
  // player stone, computer scissors, player wins, computer loses
  if (playerScissorsPaperStone - compScissorsPaperStone == -2) {
    console.log("player stone, computer scissors, player wins, computer loses");
    playerWins = playerWins + 1;
    computerWins = computerWins;
    myOutputValue = `The computer chose scissors. <br> You chose stone. <br> You win! The computer loses.`;
  }

  // player scissors, computer stone, player loses, computer win
  else if (compScissorsPaperStone - playerScissorsPaperStone == -2) {
    console.log("player scissors, computer stone, player loses, computer win");
    playerWins = playerWins;
    computerWins = computerWins + 1;
    myOutputValue = `The computer chose stone. <br> You chose scissors. <br> You lose! The computer wins.`;
  }

  // player wins - player scissors, computer paper OR player paper, computer stone
  else if (playerScissorsPaperStone - compScissorsPaperStone == 1) {
    console.log(
      "player wins - player scissors, computer paper OR player paper, computer stone"
    );
    playerWins = playerWins + 1;
    computerWins = computerWins;
    if (playerScissorsPaperStone == 2) {
      // scissors assigned value 2
      myOutputValue = `The computer chose paper. <br> You chose scissors. <br> You win! The computer loses.`;
    } else if (playerScissorsPaperStone == 1) {
      // paper assigned value 1
      myOutputValue = `The computer chose stone. <br> You chose paper. <br> You win! The computer loses.`;
    }
  }

  // computer wins - computer scissors, player paper OR computer paper, player stone
  else if (compScissorsPaperStone - playerScissorsPaperStone == 1) {
    console.log(
      "computer wins - computer scissors, player paper OR computer paper, player stone"
    );
    playerWins = playerWins;
    computerWins = computerWins + 1;
    if (playerScissorsPaperStone == 0) {
      // stone assigned value 0
      myOutputValue = `The computer chose paper. <br> You chose stone. <br> You lose! The computer wins.`;
    } else if (playerScissorsPaperStone == 1) {
      // paper assigned value 1
      myOutputValue = `The computer chose scissors. <br> You chose paper. <br> You lose! The computer wins.`;
    }
  }
  // tie
  else if (playerScissorsPaperStone == compScissorsPaperStone) {
    myOutputValue = `It's a tie. Try again!`;
    computerWins = computerWins;
    playerWins = playerWins;
  }

  totalPlays = playerWins + computerWins;
  var percentageWin = (playerWins / totalPlays) * 100;

  return (
    myOutputValue +
    `<br> <br> The current score is: <br>${userName}: ${playerWins} <br> Computer: ${computerWins} <br< Total Games Played: ${totalPlays} <br> <br> Your total win percentage is ${percentageWin.toFixed(
      2
    )}% <br> <br> Now you can type "scissors", "paper" or "stone" to play another round! `
  );
};

var getOppScissorsPaperStone = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  var oppScissorsPaperStone = randomInteger;
  return oppScissorsPaperStone;
};

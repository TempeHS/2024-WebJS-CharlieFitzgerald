//**********************************************************************************
// written by Ben Jones
//
// Student boilerplate to make a OOP Rock Paper Scissors
// - OOP - Const data type - Passing data into methods
//
// Written 22/6/2023
// License: https://github.com/TempeHS/2024SDD-WebJS-Ben.Jones/blob/main/LICENSE
//**********************************************************************************



let playerScore = 0;
let computerScore = 0;

function gameLoop (playerClicked) {
	const randomNumber = generateRandomNumber() // generateRandomNumber will generate a random number
	// 1 = Rock, 2 = Paper, 3 = Scissors
	// convert random number to a choice so you can both equality check and use in the ouput string it should be stored in a const 
	
	/*if (randomNumber == 1) { // Purely for testing; Alert "1 is Rock" when random number outputs 1
		alert("1 is Rock")
	}
	
	if (randomNumber == 2) {
		alert("2 is Paper")
	}
	
	if (randomNumber == 3) {
		alert("3 is Scissors")
	}*/

	if (randomNumber == 1) {
		randomNumber == "Rock";
	}
	
	if (randomNumber == 2) {
		randomNumber == "Paper";
	}
	
	if (randomNumber == 3) {
		randomNumber == "Scissors";
	}

	const computerChoice = randomNumber //for debug only
	equalityCheck (playerClicked, computerChoice);
}

function generateRandomNumber () {
	const result = Math.floor((Math.random() * 3) + 1); // this makes sure that generateRandomNumber will generate a 1, 2 or 3
	return result;
}


function equalityCheck (playerChoice, computerChoice) 
{
	// perform an equality check, update scores and output a string using concatenation that gives user feedback 

	let playerTip = 0;

	if (playerChoice == "Rock" && computerChoice == 2) {
		playerTip = "Paper beats Rock! Computer Wins!"
		computerScore = computerScore +1;
	} else if (playerChoice == "Rock" && computerChoice == 1) {
		playerTip = "Tie! Go again."
	} else if (playerChoice == "Rock" && computerChoice == 3) {
		playerTip = "Rock beats Scissors! You Win!"
		playerScore = playerScore +1;
	} else if (playerChoice == "Paper" && computerChoice == 1) {
		playerTip = "Paper beats Rock! You Win!"
		playerScore = playerScore +1;
	} else if (playerChoice == "Paper" && computerChoice == 2) {
		playerTip = "Tie! Go again."
	} else if (playerChoice == "Paper" && computerChoice == 1) {
		playerTip = "Paper beats Rock! You Win!"
		playerScore = playerScore +1;
	} else if (playerChoice == "Paper" && compuerChoice == 3) {
		playerTip = "Scissors beats Paper! Computer Wins!"
		computerScore = computerScore +1;
	} else if (playerChoice == "Scissors" && computerChoice == 1) {
		playerTip = "Rock beats Scissors! Computer Wins"
		computerScore = computerScore +1;
	} else if (playerChoice == "Scissors" && computerChoice == 2) {
		playerTip = "Scissors Beats Paper! You Win!"
		playerScore = playerScore +1;
	} else if (playerChoice == "Scissors" && computerChoice == 3) {
		playerTip = "Tie! Go again."
	}
	
	//alert ("You Chose: " ++ playerChoice);  //for debug only
	//alert (computerChoice); //for debug only

	document.getElementById("playerScoreContent").innerHTML = playerScore;
	document.getElementById("computerScoreContent").innerHTML = computerScore;
	document.getElementById("tipContent").innerHTML = playerTip;
}

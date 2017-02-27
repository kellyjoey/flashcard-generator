// dependency for npm packages
var inquirer = require("inquirer");
var fs = require('fs');

function BasicFlashcard (front,back,answer){
	this.front = front;
	this.back = back;
	this.answer = answer;
	
};	


var firstCard = new BasicFlashcard("The ____ Prince of Bel-Air", "The Fresh Prince of Bel-Air", "Fresh");
var secondCard = new BasicFlashcard("Designing _____", "Designing Women", "Women");
var thirdCard = new BasicFlashcard("Melrose _____", "Melrose Place", "Place");
var fourthCard = new BasicFlashcard("Three's _______", "Three's Company", "Company");
var fifthCard = new BasicFlashcard("____ Betty", "Ugly Betty", "Ugly");
var sixthCard = new BasicFlashcard("Monty Python's ______ Circus", "Monty Python's Flying Circus", "Flying");
var seventhCard = new BasicFlashcard("America's Next Top _____", "America's Next Top Model", "Model");
var eighthCard = new BasicFlashcard("Charles in ______", "Charles in Charge", "Charge");
var ninthCard = new BasicFlashcard("How I Met Your ______", "How I Met Your Mother", "Mother");
var tenthCard = new BasicFlashcard("The ________ Zone", "The Twilight Zone", "Twilight");
var basicCards = [firstCard, secondCard, thirdCard, fourthCard, fifthCard, sixthCard, seventhCard, eighthCard, ninthCard, tenthCard]; 

//creates the display question method and applies to all basic flashcards
BasicFlashcard.prototype.displayQ = function(){
    return (this.front);
};

BasicFlashcard.prototype.displayAns = function(){
    return (this.back);
};

// var correct = 0;
// var incorrect = 0;
// var playGame = function(){
// 	flashcard=[];
// 	//lines 259
// 	var newBasicCard = new BasicFlashcard(flashcard.front, flashcard.back)
// 	  inquirer.prompt({
//                     type: "input",
//                     name: "response",
//                     message: newBasicCard.front
//                 }).then(function(answer){
//                     if(answer.response === newBasicCard.back){
//                         console.log("That is correct!");
//                         correct++;
//                     }else{
//                         console.log("The correct answer was: "+ newBasicCard.back);
//                     }
//                 });
//             };

// playGame();


var i = 0;
var correct = 0;
var incorrect = 0;
function showCard(){
	if (i < basicCards.length){
		inquirer.prompt([
		{
		name: "guess",
		message: "Fill in the blank: " + basicCards[i].front
		}
	]).then(function(answers){
		if (answers.guess == basicCards[i].answer){
			console.log("correct");
			console.log(answers.guess);
			console.log(basicCards[i].answer);
			i++;
			correct++;
			showCard();
		}else{
			console.log("incorrect");
			console.log(answers.guess);
			console.log(basicCards[i].answer);
			i++;
			incorrect++;
			showCard();
			}
		})
	}else{
		console.log("you're done");
		console.log("You got " + correct + " correct!");
		console.log("You got " + incorrect + " incorrect.");
	}
};
showCard();








	
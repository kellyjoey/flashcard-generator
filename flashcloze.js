// dependency for inquirer and fs npm package
var inquirer = require("inquirer");
var fs = require("fs");

function start(){
	inquirer.prompt([
		{
		type: "list",
		message: "Do you want to create flashcards or play flashcards?",
		choices: ["create", "play"],
		name: "menu"
		}
	]).then(function(user){
		if (user.menu === "create"){
			console.log("create flashcards");
			create();
		}
		if (user.menu === "play"){
			console.log("play flashcards");
		}
	});
};

// start();

function create(){
	// Create a "Prompt" with a series of questions.
	inquirer.prompt([

  // Here we create a basic text prompt.
  		{
    		type: "input",
    		message: "What do you want on the front of the card? (question)",
    		name: "question"
  		},
  		{
  			type: "input",
  			message: "What do you want on the back of the card? (answer)",
  			name: "answer"
  		},
  // Here we ask the user to confirm.
  		{
    		type: "confirm",
    		message: "Ready to save this card?",
    		name: "confirm",
    		default: true
  		}
  	]).then(function(newCard){
  		if (newCard.confirm === true){
  			console.log('save card');
  		}
  		if (newCard.confirm === false){
  			console.log('do not save card');
  		}
  	});
};


function ClozeFlashcard (partial, fullText, cloze){
	this.partial = partial;
	this.fullText = fullText;
	this.cloze = cloze;
};	

var firstCloze = new ClozeFlashcard("The ____ Prince of Bel-Air", "The Fresh Prince of Bel-Air", "Fresh");
var secondCloze = new ClozeFlashcard("Designing _____", "Designing Women", "Women");
var thirdCloze = new ClozeFlashcard("Melrose _____", "Melrose Place", "Place");
var fourthCloze = new ClozeFlashcard("Three's _______", "Three's Company", "Company");
var fifthCloze = new ClozeFlashcard("____ Betty", "Ugly Betty", "Ugly");
var sixthCloze = new ClozeFlashcard("Monty Python's ______ Circus", "Monty Python's Flying Circus", "Flying");
var seventhCloze = new ClozeFlashcard("America's Next Top _____", "America's Next Top Model", "Model");
var eighthCloze = new ClozeFlashcard("Charles in ______", "Charles in Charge", "Charge");
var ninthCloze = new ClozeFlashcard("How I Met Your ______", "How I Met Your Mother", "Mother");
var tenthCloze = new ClozeFlashcard("The ________ Zone", "The Twilight Zone", "Twilight")
var clozeCards = [firstCloze, secondCloze, thirdCloze, fourthCloze, fifthCloze, sixthCloze, seventhCloze, eighthCloze, ninthCloze, tenthCloze];

var i = 0;
var correct = 0;
var incorrect = 0;

function showCard(){
	if (i < clozeCards.length){
	inquirer.prompt([
		{
			name: "guess",
			message: "Fill in the blank: " + clozeCards[i].partial
		}
	]).then(function(answers){
		if (answers.guess == clozeCards[i].cloze){
			console.log("correct");
			console.log(clozeCards[i].fullText);
			i++;
			correct++;
			showCard();
		}else{
			console.log("incorrect");
			console.log(clozeCards[i].fullText);
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


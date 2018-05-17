// document.addEventListener("DOMContentLoaded",function(){
function beginGame(){

var singleLetter = ['a','b','c','d','e','f','g','h','i',
				  				'j','k','l','m','n','o','p','q','r',
				  				's','t','u','v','w','x','y','z'];

//words for the game
var wordBank = ['bulbasaur','jigglypuff','caterpie',
	      	 		'pikachu','snorlax','onix',
							'charmander', 'magikarp', 'diglett',
							'dewgong', 'hitmonchan', 'meowth',
							'metapod', 'muk', 'nidorino',
							'pidgey', 'poliwhirl'];

//images of blacked out pokemons
var hints = ['/images/bulbasaur-2.png','/images/jigglypuff-2.jpg',
						 '/images/caterpie-2.png','/images/pikachu-2.jpeg',
						 '/images/snorlax-2.png','/images/onix-2.png',
						 '/images/charmander-2.jpg','/images/magikarp-2.jpeg',
						 '/images/diglett-2.jpg', '/images/dewgong-2.jpg',
					 	 '/images/hitmonchan-2.jpg', '/images/meowth-2.jpg',
						 '/images/metapod-2.jpg', '/images/muk-2.jpg',
						 '/images/nidorino-2.jpg', '/images/pidgey-2.jpg',
						 '/images/poliwhirl-2.jpg'];

//images that show the actual pokemons
var winImage = ['/images/Bulbasaur.png','/images/Jigglypuff.png',
						 	'/images/Caterpie.png','/images/Pikachu.png',
						 	'/images/Snorlax.png','/images/Onix.png',
						 	'/images/Charmander.png','/images/Magikarp.png',
						 	'/images/Diglett.png', '/images/Dewgong.png',
							'/images/Hitmonchan.png', '/images/Meowth.png',
							'/images/Metapod.png', '/images/Muk.png',
							'/images/Nidorino.png', '/images/Pidgey.png',
							'/images/Poliwhirl.png'];

var choosenWord = " ";
var lettersInWord = [];
var numBlanks = 0;
var blanksAndSuccesses =[];
var wrongLetters = [];
var guessesLeft = 3;
var rightGuessCounter = 0;
var winCount = 0;
var rand;
var wordTracker = [];

//closes modal for when user wins
function closeModal()
{
	document.getElementById('background-image').style.display = "none";
}
//closes modal for when user loses
function closeModal2()
{
	document.getElementById('background-image2').style.display = "none";
}
//reset game
function reset()
{
	choosenWord = wordBank[Math.floor(Math.random() * wordBank.length)];
	lettersInWord = choosenWord.split('');
	numBlanks = lettersInWord.length;

	letterGuessed = 0;
	rightGuessCounter = 0;
	guessesLeft = 3;
	wrongLetters =[];
	blanksAndSuccesses =[];
	singleLetter = ['a','b','c','d','e','f','g','h','i',
					  		'j','k','l','m','n','o','p','q','r',
					  		's','t','u','v','w','x','y','z'];
	test=false;
	startGame();
}

//start game function
function startGame()
{
	// Reset wordTracker if all words have been used
	if (wordTracker.length === wordBank.length) {
		wordTracker = [];
	}

	// Grab a random word that hasn't been used
	do {
		newRand = Math.floor(Math.random() * wordBank.length);
	} while (wordTracker.includes(newRand));

	wordTracker.push(newRand)
	rand = newRand;
	choosenWord = wordBank[rand];
	lettersInWord = choosenWord.split('');
	numBlanks = lettersInWord.length;

	rightGuessCounter = 0;
	guessesLeft = 3;
	wrongLetters =[];
	blanksAndSuccesses =[];
	singleLetter = ['a','b','c', 'd','e','f','g','h','i',
					  		'j','k','l','m','n','o','p','q','r',
					  		's','t','u','v','w','x','y','z'];

	for(var i = 0; i< numBlanks; i++)
	{
		blanksAndSuccesses.push('_');
		document.getElementById('wordToGuess').innerHTML = blanksAndSuccesses;
	}

	document.getElementById('wordToGuess').innerHTML = blanksAndSuccesses.join(' ');
	document.getElementById('numGuesses').innerHTML = guessesLeft;
	document.getElementById('wrongGuesses').innerHTML = wrongLetters;
	document.querySelector("#hintContainer img").src=hints[rand]

	console.log(choosenWord);
 }

function compareLetters(userKey)
{
	if(choosenWord.indexOf(userKey) > -1)
		{
			for(var i = 0; i < numBlanks; i++)
				{
					if(lettersInWord[i] === userKey)
						{
							rightGuessCounter++;
							blanksAndSuccesses[i] = userKey;
							document.getElementById('wordToGuess').innerHTML = blanksAndSuccesses.join(' ');
						}
				}
			}
	else
		{
			wrongLetters.push(userKey);
			guessesLeft--;
			document.getElementById('numGuesses').innerHTML = guessesLeft;
			document.getElementById('wrongGuesses').innerHTML = wrongLetters;
		}
}

//win lose functions
function winLose()
{
	if(rightGuessCounter === numBlanks)
	{
		//Counts Wins
		winCount+=100;
		//Changes HTML
		document.getElementById('winCounter').innerHTML = winCount;
		//shows modal if guessed correctly
		document.getElementById('background-image').style.display = "block";
		document.getElementById('winner-image').style.backgroundImage = `url("${winImage[rand]}")`;
		reset();
	}
	else if(guessesLeft === 0)
	{
		winCount= 0;
		document.getElementById('winCounter').innerHTML = winCount;
		document.getElementById('background-image2').style.display = "block";
		reset();
	}
}

startGame();
document.onkeyup = function(event)
{
	test = true;
	var letterGuessed = event.key;
	for(var i = 0; i < singleLetter.length; i++)
	{
		if(letterGuessed === singleLetter[i] && test === true)
		{
			var spliceDword = singleLetter.splice(i,1);
			compareLetters(letterGuessed);
			winLose();
		}
	}
}

//closes modal when user wins. Click the X buntton
document.getElementById('button').addEventListener("click", closeModal);
//press any key to close modal
document.addEventListener("keydown", closeModal);
//closes modal when user loses
document.getElementById('button2').addEventListener("click", closeModal2);
document.addEventListener("keydown", closeModal2);
}
// })

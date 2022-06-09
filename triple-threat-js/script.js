//Originally refactored from Python

//Globals
/*cardDeck = {
	'A of Hearts': 1,
	'A of Diamonds': 1,
	'A of Clubs': 1,
	'A of Spades': 1,
	'2 of Hearts': 2,
	'2 of Diamonds': 2,
	'2 of Clubs': 2,
	'2 of Spades': 2,
	'3 of Hearts': 3,
	'3 of Diamonds': 3,
	'3 of Clubs': 3,
	'3 of Spades': 3,
	'4 of Hearts': 4,
	'4 of Diamonds': 4,
	'4 of Clubs': 4,
	'4 of Spades': 4,
	'5 of Hearts': 5,
	'5 of Diamonds': 5,
	'5 of Clubs': 5,
	'5 of Spades': 5,
	'6 of Hearts': 6,
	'6 of Diamonds': 6,
	'6 of Clubs': 6,
	'6 of Spades': 6,
	'7 of Hearts': 7,
	'7 of Diamonds': 7,
	'7 of Clubs': 7,
	'7 of Spades': 7,
	'8 of Hearts': 8,
	'8 of Diamonds': 8,
	'8 of Clubs': 8,
	'8 of Spades': 8,
	'9 of Hearts': 9,
	'9 of Diamonds': 9,
	'9 of Clubs': 9,
	'9 of Spades': 9,
	'10 of Hearts': 10,
	'10 of Diamonds': 10,
	'10 of Clubs': 10,
	'10 of Spades': 10,
	'Jack of Hearts': 3,
	'Jack of Diamonds': 3,
	'Jack of Clubs': 3,
	'Jack of Spades': 3,
	'Queen of Hearts': 3,
	'Queen of Diamonds': 3,
	'Queen of Clubs': 3,
	'Queen of Spades': 3,
	'King of Hearts': 3,
	'King of Diamonds': 3,
	'King of Clubs': 3,
	'King of Spades': 3,
	'Joker A': 10,
	'Joker B': 10 
}*/

cardDeck = {
    hearts: {
            aoH:{
                name: 'A of Hearts',
                value: 1,
                img: 'U+1F0B1 🂱'
        }
    }
}

/*


*/

let myDeck = {}
let compDeck = {}
let myTurn = random.sample(list(hand), 3)
let compTurn = random.sample(list(hand), 3)
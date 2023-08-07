/*----- constants -----*/
// these are elements that will NOT change through the course of the game
// back color of game tiles (grey), matching pairs...?
// images: beachBall, snorkel, sun, palmTree, floats, sunscreen, sunglasses, sandCastle, sandals, popsicle, watermelon, pineapple, surfboard, swimsuit, umbrella

const backOfTiles = {
    0: 'grey'
}

const tileImages = [
    {name: 'beachBall', image: 'tile images/image.png'},
    {name: 'snorkel', image: 'tile images/image (1).png'},
    {name: 'sun', image: 'tile images/image (2).png'},
    {name: 'palmTree', image: 'tile images/image (3).png'},
    {name: 'floats', image: 'tile images/image (4).png'},
    {name: 'sunscreen', image: 'tile images/image (5).png'},
    {name: 'sunglasses', image: 'tile images/image (6).png'},
    {name: 'sandCastle', image: 'tile images/image (7).png'},
    {name: 'sandals', image: 'tile images/image (8).png'},
    {name: 'popsicle', image: 'tile images/image (9).png'},
    {name: 'watermelon', image: 'tile images/image (10).png'},
    {name: 'pineapple', image: 'tile images/image (11).png'},
    {name: 'surfboard', image: 'tile images/image (12).png'},
    {name: 'swimsuit', image: 'tile images/image (13).png'},
    {name: 'umbrella', image: 'tile images/image (14).png'}
]

/*----- state variables -----*/
// these are elements that WILL change through the course of the game
// score, timer, images of the tiles, location of the tiles (shuffle)

let score
// begins at zero and increases with each matching pair the player chooses
// only increases with matching pairs, not on every click
// max number shown will be 15
// when the score reaches 15, display winning message

let timer
// starting from zero, when the first tile is clicked it begins timing the game play
// continuously used through game
// stops when the last pair of matching tiles is chosen

let tiles
// location of tiles shuffles after every game, not on every turn
// have an image associated with a tile number or something? 


/*----- cached elements  -----*/
// save necessary html elements as variables so we can refer to them later
// button, message, tiles, score, timer

const messageEl = document.querySelector('#message')
//console.log('this is the message element', messageEl)
const scoreEl = document.querySelector('#score')
//console.log('this is the score element', scoreEl)
const timerEl = document.querySelector('#timer')
//console.log('this is the timer element', timerEl)
const playAgainButton = document.querySelector('button')
//console.log('this is the button element', playAgainButton)
const tileEls = [...document.querySelectorAll('.tiles > div')]
//onsole.log('this is the tile element', tileEls)

/*----- functions -----*/
// make things start to happen in the background with functions
// initialize the game by setting values for variables
// renders functions - board, scores, button, timer
// render function
// shuffle function
// checking for a matching pair of tiles
// handleClick function

init()

function init() {
    score = 0
    timer = 0
    tiles = [
        [0, 0, 0, 0, 0], // col 0
        [0, 0, 0, 0, 0], // col 1
        [0, 0, 0, 0, 0], // col 2
        [0, 0, 0, 0, 0], // col 3
        [0, 0, 0, 0, 0], // col 4
        [0, 0, 0, 0, 0] // col 5
    ]
    render()
}

function renderScore() {

}

function renderTimer() {

}

function renderTiles() {

}

function renderButton() {
    playAgainButton.style.visibility = winner ? 'visible' : 'hidden'
}

function render(){
    renderScore()
    renderTimer()
    renderTiles()
    renderButton()
}

function shuffleTiles() {

}

function handleClick() {

}



/*----- event listeners -----*/
// what events happen when buttons and tiles are clicked, what they should be attached to, and what functions they call
// handleClick and button

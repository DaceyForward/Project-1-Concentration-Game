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

// const player = 'null'

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
// sets variables to default values to get the game started
// want tiles to be all face down& grey
// want score and timer starting at 0
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

// displays score on page
// want to start at 0 and increase by 1 with each matching pair of images clicked
// will not exceed 15
function renderScore() {

}

// displays timer on page
// want timer to start at 0 and begin timing when the first tile is clicked
// want timer to stop when the last pair is matched (when the score = 15)
function renderTimer() {
    seconds += 1
    //minutes logic
    if (seconds >= 60) {
        minutes += 1
        seconds = 0
    }
    //format time before displaying
    let secondsValue = seconds < 10 ? `0${seconds}` : seconds
    let minutesValue = minutes < 10 ? `0${minutes}` : minutes
    timeValue.innerHTML = `<span>Time:</span>${minutesValue}:${secondsValue}`
}

// displays all tiles face down until clickec
// want tile to flip over to display the image when clicked, and stay on this side when another tile is clicked
// if the two tiles are a match, tiles stay face up
// if the two tiles are NOT a match, flip back to face down after 1 second
function renderTiles() {

}

// displays play again button
// want hidden until the score reached 15 (end of the game), then appear
// when clicked, want to reset game and tiles turn face down and shuffle
// want the timer and score to be reset back to 0
function renderButton() {
    playAgainButton.style.visibility = winner ? 'visible' : 'hidden'
}

// displays message to player about game play
// if player clicks on a matching pair of tiles, display "You got one!!"
// if tiles clicked are not a match, display "Not a match. Try again!"
// if all 15 matching pairs are clicked, display "YOU WIN!!!"
function renderMessage() {
    if () {
        messageEl.innerText = "You got a match!!"
    } else if () {
        messageEl.innerText = "Not a match. Try Again!"
    } else (score === 15) {
        messageEl.innerText = "YOU WIN!!!"
    }
}

//displays all elements with render functions attached (score, timer, tiles, button)
function render() {
    renderScore()
    renderTimer()
    renderTiles()
    renderButton()
    renderMessage()
}

// moves tiles around when play again button is clicked
// (do I need to render this?)
// want tiles to move to a new and random position when the play again button is clicked
function shuffleTiles() {
    
}

// when the player clicks on tiles or button
// want tiles to flip over when clicked
// when matching tiles display, want them to NOT be clickable
// when the last pair is matched, want play again button to appear and be clickable - reseting game tiles, score, timer, and shuffling tiles
function handleClick() {

}



/*----- event listeners -----*/
// what events happen when buttons and tiles are clicked, what they should be attached to, and what functions they call
// handleClick and button
document.getElementById('.tiles').addEventListener('click', handleClick)
playAgainButton.addEventListener('click', init)
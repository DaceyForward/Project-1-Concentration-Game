// constants -------------------------------------------------------------------------------------------------------------------------------

// these are elements that will NOT change through the course of the game
// back color of game tiles (grey), matching pairs...?
// images: beachBall, snorkel, sun, palmTree, floats, sunscreen, sunglasses, sandCastle, sandals, popsicle, watermelon, pineapple, surfboard, swimsuit, umbrella

let imageSet = [
    {name: 'beachBall1', image: 'tile_images/beachball.png', match: 'beachBall2', orderNum: 1},
    {name: 'snorkel1', image: 'tile_images/snorkel.png', match: 'snorkel2', orderNum: 2},
    {name: 'sun1', image: 'tile_images/sun.png', match: 'sun2', orderNum: 3},
    {name: 'palmTree1', image: 'tile_images/palmtree.png', match: 'palmTree2', orderNum: 4},
    {name: 'floats1', image: 'tile_images/floats.png', match: 'floats2', orderNum: 5},
    {name: 'sunscreen1', image: 'tile_images/sunscreen.png', match: 'sunscreen2', orderNum: 6},
    {name: 'sunglasses1', image: 'tile_images/sunglasses.png', match: 'sunglasses2', orderNum: 7},
    {name: 'sandCastle1', image: 'tile_images/sandcastle.png', match: 'sandCastle2', orderNum: 8},
    {name: 'sandals1', image: 'tile_images/sandals.png', match: 'sandals2', orderNum: 9},
    {name: 'popsicle1', image: 'tile_images/popsicle.png', match: 'popsicle2', orderNum: 10},
    {name: 'watermelon1', image: 'tile_images/watermelon.png', match: 'watermelon2', orderNum: 11},
    {name: 'pineapple1', image: 'tile_images/pineapple.png', match: 'pineapple2', orderNum: 12},
    {name: 'surfboard1', image: 'tile_images/surfboard.png', match: 'surfboard2', orderNum: 13},
    {name: 'swimsuit1', image: 'tile_images/swimsuit.png', match: 'swimsuit2', orderNum: 14},
    {name: 'umbrella1', image: 'tile_images/umbrella.png', match: 'umbrella2', orderNum: 15},
    {name: 'beachBall2', image: 'tile_images/beachball.png', match: 'beachBall1', orderNum: 16},
    {name: 'snorkel2', image: 'tile_images/snorkel.png', match: 'snorkel1', orderNum: 17},
    {name: 'sun2', image: 'tile_images/sun.png', match: 'sun1', orderNum: 18},
    {name: 'palmTree2', image: 'tile_images/palmtree.png', match: 'palmTree1', orderNum: 19},
    {name: 'floats2', image: 'tile_images/floats.png', match: 'floats1', orderNum: 20},
    {name: 'sunscreen2', image: 'tile_images/sunscreen.png', match: 'sunscreen1', orderNum: 21},
    {name: 'sunglasses2', image: 'tile_images/sunglasses.png', match: 'sunglasses1', orderNum: 22},
    {name: 'sandCastle2', image: 'tile_images/sandcastle.png', match: 'sandCastle1', orderNum: 23},
    {name: 'sandals2', image: 'tile_images/sandals.png', match: 'sandals1', orderNum: 24},
    {name: 'popsicle2', image: 'tile_images/popsicle.png', match: 'popsicle1', orderNum: 25},
    {name: 'watermelon2', image: 'tile_images/watermelon.png', match: 'watermelon1', orderNum: 26},
    {name: 'pineapple2', image: 'tile_images/pineapple.png', match: 'pineapple1', orderNum: 27},
    {name: 'surfboard2', image: 'tile_images/surfboard.png', match: 'surfboard1', orderNum: 28},
    {name: 'swimsuit2', image: 'tile_images/swimsuit.png', match: 'swimsuit1', orderNum: 29},
    {name: 'umbrella2', image: 'tile_images/umbrella.png', match: 'umbrella1', orderNum: 30}
]

// variables -------------------------------------------------------------------------------------------------------------------------------

// these are elements that WILL change through the course of the game
// score, timer, images of the tiles, location of the tiles (shuffle)

// let score
// begins at zero and increases with each matching pair the player chooses
// only increases with matching pairs, not on every click
// max number shown will be 15
// when the score reaches 15, display winning message

// let timer
// starting from zero, when the first tile is clicked it begins timing the game play
// continuously used through game
// stops when the last pair of matching tiles is chosen

// let tiles
// location of tiles shuffles after every game, not on every turn
// have an image associated with a tile number or something? 

let tileClicked

let imageMatched

let imageFaceUp  

let score

let timer

let message

let button

let firstClick

// cached elements -------------------------------------------------------------------------------------------------------------------------

// save necessary html elements as variables so we can refer to them later
// button, message, tiles, score, timer

const scoreEl = document.querySelector('#score')

const messageEl = document.querySelector('#message')

const timerEl = document.querySelector('#timer')

const playAgainButton = document.querySelector('button')

const board = [...document.querySelectorAll('#tiles > div')]

// functions -------------------------------------------------------------------------------------------------------------------------------

// make things start to happen in the background with functions
// initialize the game by setting values for variables
// renders functions - board, scores, button, timer
// render function
// shuffle function
// checking for a matching pair of tiles
// handleClick function

// initialize ------------------------------------------------------------------------------------------------------------------------------

// sets variables to default values to get the game started
// want tiles to be all face down& grey
// want score and timer starting at 0

init()

function init() {

    tileClicked = [
        false, false, false, false, false, false,
        false, false, false, false, false, false,
        false, false, false, false, false, false,
        false, false, false, false, false, false,
        false, false, false, false, false, false
    ]
  
    imageMatched = [
       false, false, false, false, false, false,
        false, false, false, false, false, false,
        false, false, false, false, false, false,
        false, false, false, false, false, false,
        false, false, false, false, false, false
    ]

    imageFaceUp = [
        false, false, false, false, false, false,
        false, false, false, false, false, false,
        false, false, false, false, false, false,
        false, false, false, false, false, false,
        false, false, false, false, false, false
    ]
  
    score = 0

    timer = '--'

    message = 'Click any tile to begin!!' 

    button = 'visible'

    render()

    firstClick = true

}

function gameReset() {

    tileClicked = [
        false, false, false, false, false, false,
        false, false, false, false, false, false,
        false, false, false, false, false, false,
        false, false, false, false, false, false,
        false, false, false, false, false, false
    ]
    
    imageMatched = [
        false, false, false, false, false, false,
        false, false, false, false, false, false,
        false, false, false, false, false, false,
        false, false, false, false, false, false,
        false, false, false, false, false, false
    ]
    
    imageFaceUp = [
        false, false, false, false, false, false,
        false, false, false, false, false, false,
        false, false, false, false, false, false,
        false, false, false, false, false, false,
        false, false, false, false, false, false
    ]
    
    score = 0
    
    timer = '--'
    
    message = 'Click any tile to begin!!' 
    
    button = 'visible'
    
    let = idx = 0
    imageSet.forEach(function(image) {
        document.getElementById(`tile${idx}`).innerHTML = ''
        idx += 1
    })
    
    render()
    
    firstClick = true
}

// render -------------------------------------------------------------------------------------------------------------------------------

// displays score on page
// want to start at 0 and increase by 1 with each matching pair of images clicked
// will not exceed 15
function renderScore() {
    scoreEl.innerHTML = `SCORE: ` + score
}

// displays timer on page
// want timer to start at 0 and begin timing when the first tile is clicked
// want timer to stop when the last pair is matched (when the score = 15)
function renderTimer() {
    timerEl.innerHTML = `TIMER: ` + timer
}

// displays message to player about game play
// if player clicks on a matching pair of tiles, display "You got one!!"
// if tiles clicked are not a match, display "Not a match. Try again!"
// if all 15 matching pairs are clicked, display "YOU WIN!!!"
function renderMessage() {
    messageEl.innerHTML = message
}

// displays play again button
// want hidden until the score reached 15 (end of the game), then appear
// when clicked, want to reset game and tiles turn face down and shuffle
// want the timer and score to be reset back to 0
function renderButton() {
    playAgainButton.style.visibility = (score === 15) ? 'visible' : 'hidden'
}

// displays all tiles face down until clicked
// want tile to flip over to display the image when clicked, and stay on this side when another tile is clicked
// if the two tiles are a match, tiles stay face up
// if the two tiles are NOT a match, flip back to face down after 1 second
function renderBoard() {

    //first click section
    if (firstClick === true) {

        message = 'Choose another tile.'
        renderMessage()
        
        let idx = 0
        
        imageSet.forEach(function(image) {

            let images = document.createElement('img')
            images.src = imageSet[idx].image
            images.style.width = '18vmin'
            images.style.height = '18vmin'
            
            if (tileClicked[idx] === true) {
                document.getElementById(`tile${idx}`).appendChild(images) 
                tileClicked[idx] = false
            } 

            idx += 1
        })

        firstClick = false
    }

    //second click section
    else {

        idx = 0

        imageSet.forEach(function(image) {

            let images = document.createElement('img')
            images.src = imageSet[idx].image
            images.style.width = '18vmin'
            images.style.height = '18vmin'
            
            if (tileClicked[idx] === true) {
                document.getElementById(`tile${idx}`).appendChild(images) 
                tileClicked[idx] = false
            } 

            idx += 1
        })

        idx = 0

        setTimeout(function() {
            imageSet.forEach(function(image) {
                if (imageFaceUp[idx] === true && imageMatched[idx] !== true) {
                    document.getElementById(`tile${idx}`).innerHTML = '' 
                    imageFaceUp[idx] = false
                    message = 'Not a match. Try Again.'
                    renderMessage()
                }

                idx += 1
            })

            firstClick = true

        }, 750)
    }
}

//displays all elements with render functions attached (score, timer, tiles, button, message)
function render() {
  renderScore()
  renderTimer()
  renderMessage()
  renderButton()
  renderBoard()
}

// other functions -------------------------------------------------------------------------------------------------------------------------

// when the player clicks on tiles or button
// want tiles to flip over when clicked
// when matching tiles display, want them to NOT be clickable
// when the last pair is matched, want play again button to appear and be clickable - reseting game tiles, score, timer, and shuffling tiles

function handleClick(event) {
    const idx = board.indexOf(event.target)

    tileClicked[idx] = true

    imageFaceUp[idx] = true

    matchCheckerIdx = 0

    imageSet.forEach(function(image) {
        if (imageSet[idx].name === imageSet[matchCheckerIdx].match && imageFaceUp[matchCheckerIdx] === true) {
            score += 1
            message = 'You got a match!'
            imageMatched[idx] = true
            imageMatched[matchCheckerIdx] = true
        } 
    
        matchCheckerIdx += 1
    })

    if (score === 15) {
        message = 'YOU WIN!!!'
    }
   
    render() 
}

// event listeners -------------------------------------------------------------------------------------------------------------------------

// what events happen when buttons and tiles are clicked, what they should be attached to, and what functions they call
// handleClick and button

document.getElementById('tiles').addEventListener('click', handleClick)

playAgainButton.addEventListener('click', gameReset)

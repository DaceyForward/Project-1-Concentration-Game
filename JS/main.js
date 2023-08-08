// /*----- constants -----*/
// // these are elements that will NOT change through the course of the game
// // back color of game tiles (grey), matching pairs...?
// // images: beachBall, snorkel, sun, palmTree, floats, sunscreen, sunglasses, sandCastle, sandals, popsicle, watermelon, pineapple, surfboard, swimsuit, umbrella

// const backOfTiles = {
//     0: 'grey'
// }

// const board = [
//     0, 0, 0, 0, 0, 0,
//     0, 0, 0, 0, 0, 0,
//     0, 0, 0, 0, 0, 0,
//     0, 0, 0, 0, 0, 0,
//     0, 0, 0, 0, 0, 0
// ]

// // const tileImages = [
// //     {name: 'beachBall1', image: 'tile images/image.png', match: 'beachBall2', orderNum: 1},
// //     {name: 'snorkel1', image: 'tile images/image (1).png', match: 'snorkel2', orderNum: 2},
// //     {name: 'sun1', image: 'tile images/image (2).png', match: 'sun2', orderNum: 3},
// //     {name: 'palmTree1', image: 'tile images/image (3).png', match: 'palmTree2', orderNum: 4},
// //     {name: 'floats1', image: 'tile images/image (4).png', match: 'floats2', orderNum: 5},
// //     {name: 'sunscreen1', image: 'tile images/image (5).png', match: 'sunscreen2', orderNum: 6},
// //     {name: 'sunglasses1', image: 'tile images/image (6).png', match: 'sunglasses2', orderNum: 7},
// //     {name: 'sandCastle1', image: 'tile images/image (7).png', match: 'sandCastle2', orderNum: 8},
// //     {name: 'sandals1', image: 'tile images/image (8).png', match: 'sandals2', orderNum: 9},
// //     {name: 'popsicle1', image: 'tile images/image (9).png', match: 'popsicle2', orderNum: 10},
// //     {name: 'watermelon1', image: 'tile images/image (10).png', match: 'watermelon2', orderNum: 11},
// //     {name: 'pineapple1', image: 'tile images/image (11).png', match: 'pineapple2', orderNum: 12},
// //     {name: 'surfboard1', image: 'tile images/image (12).png', match: 'surfboard2', orderNum: 13},
// //     {name: 'swimsuit1', image: 'tile images/image (13).png', match: 'swimsuit2', orderNum: 14},
// //     {name: 'umbrella1', image: 'tile images/image (14).png', match: 'umbrella2', orderNum: 15},
// //     {name: 'beachBall2', image: 'tile images/image.png', match: 'beachBall1', orderNum: 16},
// //     {name: 'snorkel2', image: 'tile images/image (1).png', match: 'snorkel1', orderNum: 17},
// //     {name: 'sun2', image: 'tile images/image (2).png', match: 'sun1', orderNum: 18},
// //     {name: 'palmTree2', image: 'tile images/image (3).png', match: 'palmTree1', orderNum: 19},
// //     {name: 'floats2', image: 'tile images/image (4).png', match: 'floats1', orderNum: 20},
// //     {name: 'sunscreen2', image: 'tile images/image (5).png', match: 'sunscreen1', orderNum: 21},
// //     {name: 'sunglasses2', image: 'tile images/image (6).png', match: 'sunglasses1', orderNum: 22},
// //     {name: 'sandCastle2', image: 'tile images/image (7).png', match: 'sandCastle1', orderNum: 23},
// //     {name: 'sandals2', image: 'tile images/image (8).png', match: 'sandals1', orderNum: 24},
// //     {name: 'popsicle2', image: 'tile images/image (9).png', match: 'popsicle1', orderNum: 25},
// //     {name: 'watermelon2', image: 'tile images/image (10).png', match: 'watermelon1', orderNum: 26},
// //     {name: 'pineapple2', image: 'tile images/image (11).png', match: 'pineapple1', orderNum: 27},
// //     {name: 'surfboard2', image: 'tile images/image (12).png', match: 'surfboard1', orderNum: 28},
// //     {name: 'swimsuit2', image: 'tile images/image (13).png', match: 'swimsuit1', orderNum: 29},
// //     {name: 'umbrella2', image: 'tile images/image (14).png', match: 'umbrella1', orderNum: 30}
// // ]

// // const player = 'null'

// /*----- state variables -----*/
// // these are elements that WILL change through the course of the game
// // score, timer, images of the tiles, location of the tiles (shuffle)

// let score
// // begins at zero and increases with each matching pair the player chooses
// // only increases with matching pairs, not on every click
// // max number shown will be 15
// // when the score reaches 15, display winning message

// let timer
// // starting from zero, when the first tile is clicked it begins timing the game play
// // continuously used through game
// // stops when the last pair of matching tiles is chosen

// let tiles
// // location of tiles shuffles after every game, not on every turn
// // have an image associated with a tile number or something? 

// let tileImages = [
//     {name: 'beachBall1', image: 'tile images/image.png', match: 'beachBall2', orderNum: 1},
//     {name: 'snorkel1', image: 'tile images/image (1).png', match: 'snorkel2', orderNum: 2},
//     {name: 'sun1', image: 'tile images/image (2).png', match: 'sun2', orderNum: 3},
//     {name: 'palmTree1', image: 'tile images/image (3).png', match: 'palmTree2', orderNum: 4},
//     {name: 'floats1', image: 'tile images/image (4).png', match: 'floats2', orderNum: 5},
//     {name: 'sunscreen1', image: 'tile images/image (5).png', match: 'sunscreen2', orderNum: 6},
//     {name: 'sunglasses1', image: 'tile images/image (6).png', match: 'sunglasses2', orderNum: 7},
//     {name: 'sandCastle1', image: 'tile images/image (7).png', match: 'sandCastle2', orderNum: 8},
//     {name: 'sandals1', image: 'tile images/image (8).png', match: 'sandals2', orderNum: 9},
//     {name: 'popsicle1', image: 'tile images/image (9).png', match: 'popsicle2', orderNum: 10},
//     {name: 'watermelon1', image: 'tile images/image (10).png', match: 'watermelon2', orderNum: 11},
//     {name: 'pineapple1', image: 'tile images/image (11).png', match: 'pineapple2', orderNum: 12},
//     {name: 'surfboard1', image: 'tile images/image (12).png', match: 'surfboard2', orderNum: 13},
//     {name: 'swimsuit1', image: 'tile images/image (13).png', match: 'swimsuit2', orderNum: 14},
//     {name: 'umbrella1', image: 'tile images/image (14).png', match: 'umbrella2', orderNum: 15},
//     {name: 'beachBall2', image: 'tile images/image.png', match: 'beachBall1', orderNum: 16},
//     {name: 'snorkel2', image: 'tile images/image (1).png', match: 'snorkel1', orderNum: 17},
//     {name: 'sun2', image: 'tile images/image (2).png', match: 'sun1', orderNum: 18},
//     {name: 'palmTree2', image: 'tile images/image (3).png', match: 'palmTree1', orderNum: 19},
//     {name: 'floats2', image: 'tile images/image (4).png', match: 'floats1', orderNum: 20},
//     {name: 'sunscreen2', image: 'tile images/image (5).png', match: 'sunscreen1', orderNum: 21},
//     {name: 'sunglasses2', image: 'tile images/image (6).png', match: 'sunglasses1', orderNum: 22},
//     {name: 'sandCastle2', image: 'tile images/image (7).png', match: 'sandCastle1', orderNum: 23},
//     {name: 'sandals2', image: 'tile images/image (8).png', match: 'sandals1', orderNum: 24},
//     {name: 'popsicle2', image: 'tile images/image (9).png', match: 'popsicle1', orderNum: 25},
//     {name: 'watermelon2', image: 'tile images/image (10).png', match: 'watermelon1', orderNum: 26},
//     {name: 'pineapple2', image: 'tile images/image (11).png', match: 'pineapple1', orderNum: 27},
//     {name: 'surfboard2', image: 'tile images/image (12).png', match: 'surfboard1', orderNum: 28},
//     {name: 'swimsuit2', image: 'tile images/image (13).png', match: 'swimsuit1', orderNum: 29},
//     {name: 'umbrella2', image: 'tile images/image (14).png', match: 'umbrella1', orderNum: 30}
// ]


// /*----- cached elements  -----*/
// // save necessary html elements as variables so we can refer to them later
// // button, message, tiles, score, timer

// const messageEl = document.querySelector('#message')
// //console.log('this is the message element', messageEl)
// const scoreEl = document.querySelector('#score')
// //console.log('this is the score element', scoreEl)
// const timerEl = document.querySelector('#timer')
// //console.log('this is the timer element', timerEl)
// const playAgainButton = document.querySelector('button')
// //console.log('this is the button element', playAgainButton)
// const tileEls = [...document.querySelectorAll('.tiles > div')]
// //onsole.log('this is the tile element', tileEls)

// /*----- functions -----*/
// // make things start to happen in the background with functions
// // initialize the game by setting values for variables
// // renders functions - board, scores, button, timer
// // render function
// // shuffle function
// // checking for a matching pair of tiles
// // handleClick function

// init()
// // sets variables to default values to get the game started
// // want tiles to be all face down& grey
// // want score and timer starting at 0
// function init() {
//     score = 0
//     timer = 0
//     // tiles = [
//     //     [0, 0, 0, 0, 0], // col 0
//     //     [0, 0, 0, 0, 0], // col 1
//     //     [0, 0, 0, 0, 0], // col 2
//     //     [0, 0, 0, 0, 0], // col 3
//     //     [0, 0, 0, 0, 0], // col 4
//     //     [0, 0, 0, 0, 0]  // col 5
//     // ]
//     render()
// }

// // displays score on page
// // want to start at 0 and increase by 1 with each matching pair of images clicked
// // will not exceed 15
// function renderScore() {
//     let match = true
//     for (let i = 0; i === match; i++) {
//         return score += 1
//     } if (match === false) {
//         return
//     }
// }

// // displays timer on page
// // want timer to start at 0 and begin timing when the first tile is clicked
// // want timer to stop when the last pair is matched (when the score = 15)
// function renderTimer() {
//     seconds += 1
//     //minutes logic
//     if (seconds >= 60) {
//         minutes += 1
//         seconds = 0
//     }
//     //format time before displaying
//     let secondsValue = seconds < 10 ? `0${seconds}` : seconds
//     let minutesValue = minutes < 10 ? `0${minutes}` : minutes
//     timeValue.innerHTML = `<span>Time:</span>${minutesValue}:${secondsValue}`
// }

// // displays all tiles face down until clicked
// // want tile to flip over to display the image when clicked, and stay on this side when another tile is clicked
// // if the two tiles are a match, tiles stay face up
// // if the two tiles are NOT a match, flip back to face down after 1 second
// function renderTileImages() {

// }

// // displays play again button
// // want hidden until the score reached 15 (end of the game), then appear
// // when clicked, want to reset game and tiles turn face down and shuffle
// // want the timer and score to be reset back to 0
// function renderButton() {
//     playAgainButton.style.visibility = (score === 15) ? 'visible' : 'hidden'
// }

// // displays message to player about game play
// // if player clicks on a matching pair of tiles, display "You got one!!"
// // if tiles clicked are not a match, display "Not a match. Try again!"
// // if all 15 matching pairs are clicked, display "YOU WIN!!!"
// function renderMessage() {
//     if (score += 1) {
//         messageEl.innerText = "You got a match!!"
//     } else if (score) {
//         messageEl.innerText = "Not a match. Try Again!"
//     } else if (score === 15) {
//         messageEl.innerText = "YOU WIN!!!"
//     }
// }

// //displays all elements with render functions attached (score, timer, tiles, button)
// function render() {
//     renderScore()
//     renderTimer()
//     renderTileImages()
//     renderButton()
//     renderMessage()
// }

// // moves tiles around when play again button is clicked
// // (do I need to render this?)
// // want tiles to move to a new and random position when the play again button is clicked
// // use fisher-yates method??
// function shuffleImages() {

// }

// // const points = [40, 100, 1, 5, 25, 10];
// // document.getElementById("demo").innerHTML = points;  

// // function shuffleTiles() {
// //   for (let i = points.length -1; i > 0; i--) {
// //     let j = Math.floor(Math.random() * (i+1));
// //     let k = points[i];
// //     points[i] = points[j];
// //     points[j] = k;
// //   }
// //   document.getElementById("demo").innerHTML = points;
// // }

// // when the player clicks on tiles or button
// // want tiles to flip over when clicked
// // when matching tiles display, want them to NOT be clickable
// // when the last pair is matched, want play again button to appear and be clickable - reseting game tiles, score, timer, and shuffling tiles
// function handleClick(event) {
//     const tileId = tileEls.indexOf(event.target)
//     console.log('inside handleClick, tile clicked', tileId)
// }



// /*----- event listeners -----*/
// // what events happen when buttons and tiles are clicked, what they should be attached to, and what functions they call
// // handleClick and button
// document.getElementById('.tiles').addEventListener('click', handleClick)
// playAgainButton.addEventListener('click', init)
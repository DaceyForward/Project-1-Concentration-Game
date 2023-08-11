// constants ------------------------------------

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

const tilesFaceDown = {
  0: 'grey'
}

// variables ------------------------------------

let imageLocation

let tileClicked

let imageMatched

//let tileRandomOrder

let imageFaceUp  //for flip..

let score

let timer

let message

let button



// cached elements ------------------------------------

const scoreEl = document.querySelector('#score')
    //console.log('this is the score element', scoreEl)

const messageEl = document.querySelector('#message')
    //console.log('this is the message element', messageEl)

const timerEl = document.querySelector('#timer')
    //console.log('this is the timer element', timerEl)

const playAgainButton = document.querySelector('button')
    //console.log('this is the button element', playAgainButton)

const board = [...document.querySelectorAll('#tiles > div')]
   //console.log('this is the tile element', tileEls)

// event listeners ------------------------------------

//document.getElementById('tile2').addEventListener('click', handleClick)

document.getElementById('tiles').addEventListener('click', handleClick)

playAgainButton.addEventListener('click', init)

// intialize ------------------------------------

init()

function init() {
  //imageLocation = []
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
  //tileRandomOrder = []
  imageFaceUp = [
    false, false, false, false, false, false,
    false, false, false, false, false, false,
    false, false, false, false, false, false,
    false, false, false, false, false, false,
    false, false, false, false, false, false
  ]
  score = 0
  //timer = [0,0]
  timer = 0
  message = 'Click any tile to begin!!' 
  button = 'visible'



//   let idx = 0
//   imageSet.forEach(function(image) {
//     let images = document.createElement('img')
//     images.src = imageSet[idx].image
//     images.style.width = '18vmin'
//     images.style.height = '18vmin'
//     document.querySelector(`#tile${idx}`).appendChild(images) 
//     document.querySelector(`#tile${idx}`).removeChild(images) 
//     idx += 1
//     //document.querySelector(`#tile${idx}`).style.backgroundColor = 'red'
//     //images = 'hidden'
    
//   })
//   tile0.removeChild(images) 
  //tile0.style.visibility = 'hidden'
  //tile0.style.backgroundColor = 'pink'
  render()
}

// render ------------------------------------

function renderScore() {
    scoreEl.innerHTML = `SCORE: ` + score
//   if (imageMatched === true) {
    // scoreEl.innerHTML = score
//   } else if (imageMatched === false) {
//     return
//   }
}

function renderTimer() {
    timerEl.innerHTML = `TIMER: ` + timer
//   milliseconds+=10;
//   if(milliseconds === 1000){
//       milliseconds = 0;
//       seconds++;
//       if(seconds === 60){
//           seconds = 0;
//           minutes++;
//           if(minutes === 60){
//               minutes = 0;
//               hours++;
//           }
//       }
//   }
//  let m = minutes < 10 ? "0" + minutes : minutes;
//  let s = seconds < 10 ? "0" + seconds : seconds;
// timerEl.innerHTML = `${m} : ${s}`
}

function renderMessage() {
    messageEl.innerHTML = message
//   if (score += 1) {
//     messageEl.innerText = "You got a match!!"
//   } else if (score) {
//     messageEl.innerText = "Not a match. Try again!"
//   } else if (score === 15) {
//     messageEl.innerText = "YOU WIN!!!"
//   } else {
//     messageEl.innerText = "Click any tile to begin!!"
//   }
}

function renderButton() {
    playAgainButton.style.visibility = (score === 15) ? 'visible' : 'hidden'
}

function renderBoard() {
    let idx = 0
    console.log('renderBoard tileClicked array', tileClicked) // added 12:50
    
    imageSet.forEach(function(image) {
        let images = document.createElement('img')
        images.src = imageSet[idx].image
        images.style.width = '18vmin'
        images.style.height = '18vmin'
        
        if (tileClicked[idx] === true) {
            console.log('bananas')
            document.getElementById(`tile${idx}`).appendChild(images) 
            tileClicked[idx] = false
        } 
        else if (imageFaceUp[idx] === true && imageMatched[idx] === false) {
            console.log('inside imageFaceUp[idx] else if. idx is', idx)
            // setTimeout(function() {
            //     console.log('waited 1 sec') 
            // }, 1000)
            // console.log('waited 1 sec')
            document.getElementById(`tile${idx}`).innerHTML = '' 

        }

        idx += 1
        
    })
    //console.log('renderBoard imageFaceUp array after forEach', tileClicked) 
    
}

function render() {
  renderScore()
  renderTimer()
  renderMessage()
  renderButton()
  renderBoard()
}

// other functions ------------------------------------

function handleClick(event) {
    const idx = board.indexOf(event.target)
    let firstClick = true
    console.log('index at click', idx)
    tileClicked[idx] = true
    imageFaceUp[idx] = true
    console.log('handleclick imageFaceUp array', imageFaceUp) //added 12:50
    //console.log('name of clicked tile', imageSet[idx].name)

    if (firstClick === true) {
        firstClick = false
    } else {
        firstClick = true
    }

    matchCheckerIdx = 0
    //console.log('imageFaceUp array: ', imageFaceUp)
    //console.log('ImageSet name: ', imageSet[idx].name)
    imageSet.forEach(function(image) {
       // console.log('idx: ', idx)
       // console.log('imageSet[idx].name: ', imageSet[idx].name)
       // console.log('MatchCheckeridx: ', matchCheckerIdx)
       // console.log('imageSet[matchCheckerIdx].match: ', imageSet[matchCheckerIdx].match)
       // console.log('imageFaceup[matchCheckerIdx]: ', imageFaceUp[matchCheckerIdx])
        if (imageSet[idx].name === imageSet[matchCheckerIdx].match && imageFaceUp[matchCheckerIdx] === true) {
            score += 1
            message = 'You got a match!'
            console.log('**** MATCH! **** matchcheckeridx for match is ', matchCheckerIdx)
            imageMatched[idx] = true
            imageMatched[matchCheckerIdx] = true
        } 
        
        //  } else if (imageSet[idx].name !== imageSet[matchCheckerIdx].match && imageFaceUp[matchCheckerIdx] === true) {
        //     //firstClick.style.backgroundColor = 'grey'
        //     // const hideImage = (imageFaceUp === true || imageMatched === false)
        //     // tiles.style.visibility = hideImage ? 'hidden' : 'visible'

        // }
        matchCheckerIdx += 1
    })
    console.log('IMAGE MATCHED ARRAY: ', imageMatched)
    // variable to determine if first click (general click) or second click (attempting a match)
    // if (firstClick === true) {
    //     firstClick = false
    // } else {
    //     firstClick = true
    // }

    if (score === 15) {
        message = 'YOU WIN!!!'
    }
    // if imageSet[idx].name === imageSet[idx].match
    // if (tileClicked[idx] === true) {
    //     return false
    // }
    //console.log('tileclick change', tileClicked)
    render() //added 12:50
}
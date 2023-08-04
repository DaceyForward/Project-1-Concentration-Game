# WELCOME TO THE GAME CONCENTRATION
### Summer Edition

### Overview
Concentraion is a simple game that will put your memory skills to the test! In this summer edition, all the images will represent different things we love to see in the summer. Examples could include popsicles, sunshine, flip-flops, swimsuits, and more!
###### Technology Used:
- HTML5
- CSS
- Javascript

### Analysis of Functionality
#### User Stories
As a user, I want...
- the gameboard to show the playing tiles facing down when the page is initially displayed
- the gameboard displayed as a grid of tiles
- the ability to click on one tile and then another, giving me some time to see and remember my tiles
- the tiles to stay face up until I click on two tiles, and then after 1 second, they turn back facing down
- to know when I get a matching pair of tiles
- to know how much time it has taken to complete the game
- to win by matching all the tiles together
- a reset button that will clear the contents of the board
- to see the winner with a displayed message

###### Bonus User Stories
As a user, I want...
- a scoreboard to show how many pairs are matched
the ability to choose between one player, player vs the computer, or two players
- the ability to adjust the show time of the tiles
- to win by getting more pairs than another player (if playing in two-player mode)
- the current player's turn displayed with a message
- to know if there is a tie with a message displayed (if playing in two-player mode)
- a fun, personal, and unique style to the game
- to choose the level of difficulty with the abilty to change the total number of tiles on the board
- each tile to highlight in some way when I hover over it

#### Overall Design
- Clean, minimalist design and layout
- A summer theme for the image pairs on the playing tiles
- Grey tiles when face down

##### Font:
###### HTML Code
```HTML 
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Borel&display=swap" rel="stylesheet">
```
###### CSS Code
```CSS
font-family: 'Borel', cursive;
```

## Wireframe of the UI

![layout wireframe](https://i.imgur.com/JOErIyd.png)
![layout wireframe](https://i.imgur.com/50Tbjtw.png)
![layout wireframe](https://i.imgur.com/ohwJPII.png)

### Pseudocode

Overall Logic of the Game
- Page loads with full gameboard showing grid of tiles facing down, showing grey
- Player begins game by clicking on a tile
- The tiles turn slightly darker grey and transform as the player hovers over them
- The game timer begins when the first tile of the game is clicked
- The player clicks on two tiles, and after 1 second, the tiles turn back over
- When the player gets a matching pair of tiles, the tiles will stay facing up, increasing their score each time they match a pair
- When the player matches all the tiles, the timer is stopped and a message displays with the score and winner
- When this message displays, the "play again" button appears
- When the play again button is clicked, the gameboard is reset and the steps repeat

### State of the Game
##### Constants
- board grid
- 

##### Variables
- tiles
- score
- timer

# WELCOME TO THE GAME OF CONCENTRATION
### Summer Edition!!
![summer photo](https://i.imgur.com/MDDW9Mt.png)
### Overview
Concentration is a simple game that will put your memory skills to the test! In this summer edition, all the images will represent different things we love to see in the summer. Gameboard tile images could include popsicles, sunshine, flip-flops, swimsuits, and more!
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
- the tiles to stay face up until I click on two tiles, and then after one second, they turn back facing down
- to know when I get a matching pair of tiles
- to win by matching all the tiles together
- a reset button that will clear the contents of the board
- to see the winner with a displayed message
- a fun, personal, and unique style to the game

###### Bonus User Stories
As a user, I want...
- a scoreboard to show how many pairs are matched
- a shuffle to happen on each game reset
- to know how much time it has taken to complete the game
- the ability to choose between one player, player vs the computer, or two players
- the ability to adjust the show time of the tiles
- to win by getting more pairs than another player (if playing in two-player mode)
- the current player's turn displayed with a message
- to know if there is a tie with a message displayed (if playing in two-player mode)
- to choose the level of difficulty with the ability to change the total number of tiles on the board
- each tile to highlight in some way when I hover over it

#### Overall Design
- Clean, minimalist design and layout
- A summer theme for the image pairs on the playing tiles
- Grey tiles when face down

##### Font:
###### HTML Code
```html 
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Borel&display=swap" rel="stylesheet">
```
###### CSS Code
```css
font-family: 'Borel', cursive;
```

## Wireframe of the UI

![layout wireframe](https://i.imgur.com/JOErIyd.png)
![layout wireframe](https://i.imgur.com/ZxDh74A.png)
![layout wireframe](https://i.imgur.com/ohwJPII.png)

### Pseudocode

Overall Logic of the Game
- Page loads with full gameboard showing grid of tiles facing down, showing grey
- Player begins game by clicking on a tile
- The tiles turn slightly darker grey and transform as the player hovers over them
- The player clicks on two tiles, and after one second, the tiles turn back over
- When the player gets a matching pair of tiles, the tiles will stay facing up, increasing their score each time they match a pair
- When the player matches all the tiles, a winning message displays
- When this message displays, the "play again" button appears
- When the play again button is clicked, the gameboard is reset and the steps repeat

### State of the Game
##### Constants
- images

##### Variables
- tiles
- score
- timer
- messages

## MVP Showcase!
![MVP](https://i.imgur.com/sPxlodp.png)
![MVP](https://i.imgur.com/VdrmJbd.png)
![MVP](https://i.imgur.com/qaXS3dy.png)
![MVP](https://i.imgur.com/K5Nzxvd.png)
![MVP](https://i.imgur.com/Dwn0Iwl.png)
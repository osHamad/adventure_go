# Adventure Go
[![linter](https://github.com/osamaHamad-github/final_project/workflows/linter/badge.svg)](https://github.com/marketplace/actions/super-linter)

## Breif Synopsis
Adventure Go! is a puzzle solving game inspired by Helltaker but themed after the anime Konosuba.
The game starts off with a short visual novel about a problem with our main character Kazuma and his companion Aqua.
Kazuma used all of his money and now he has to look for treasures to make up for the losses.
Will you be able to guide Kazuma to the treasures?

Helltaker on steam (good game, would reccomend): [Helltaker](https://store.steampowered.com/app/1289310/Helltaker/)<br />
Konosuba on My Anime List: [KonoSuba season 1](https://myanimelist.net/anime/30831/Kono_Subarashii_Sekai_ni_Shukufuku_wo)

## A Few Words from Me
Before we continue, I just wanted to say thank you to Mr. DiMauro and everyone else in the class for making this such an enjoyable course.
Everyone was very welcoming and I really appreciated that!
This course made me discover something new: making games is actually really fun.
I may have enjoyed making this game too much and slightly got carried away.
Now let's continue.

# Code Explination
### Visual Novel
So how does the visual novel at the beginning work?
What I did was that everytime you clicked "Next", a counting variable got incremented by 1.
I created a dictionary with numbered values that match the order of the image values.
The content of the visual novel image changed based on the index value of the dictionary.
The same thing goes for the speech bubble that displays the speaker's name and background colour.
An if statement looks for index which the visual novel is expected to end.
If our counter is equal to that value, the user is brought to the main menu screen.

### Main Menu
The main menu has three buttons: play, settings and code.
Both the play and settings buttons are linked to event listeners that set the display of the main menu to none and the display of the targeted page to block.
This gives the illusion that the user is brought to another html page, without actually changing the href (that would take too long to load).
The "Back" button on both pages does the exact opposite of this, setting display of main menu to block and the previous page to none.
The mute button is also linked to an event listener.
When clicked, the image changes based on the state of the audio.
The audio tag is then set to play or mute accordingly.
The code button is linked with the GitHub page you are looking at through opening a new tab and setting the url.

### In Game
#### Modules
For this project, I had to make three different classes: one for the board, one for the player's character and one for the grid cells (game obstacles).
The board object for each level contained the board dimensions and every cell and obstacle that was generated.
The cell class gave each cell object a cell type which determined the obstacle properties, as well as what the cell looks like.
It also contains methods that are to be used in the player object such as getCell and CellType.
The player object is what the player plays as.
It contains what the player should look like, what the player's current location is on the grid, and so on.
The player class has methods that check for specific cell types, which are used by the direction method.
The direction method increases and decreases the player's current location on the grid according to the desired direction.
It checks for obstacles in the player's path and will behave differently based on the obstacle.

#### Controls
The player is controlled using the arrow keys.
When a key is clicked, an event listener is triggered.
A function checks what button was clicked.
If one of the arrow keys are clicked, the player object will call a method that moves the player object accordingly.
These controls are disabled when the player completes a level or runs out of move to prevent moving after game is over.
If ESC is clicked, a function will be called which changes the pagfe href to the main menu.
If R is clicked, the page will refresh, causing the board to reset.

#### Board Generation
It would be too much work to create each board cell manually, so I made a function that generates the cell objects as well as displaying the cell images to HTML divs.
Two for loops are used, one for creating rows and one for the columns.
Each cell is given an ID that was also generated by the function which includes it's cell row and column.
These cells are to be accessed by their IDs later when the game starts.
After the board is generated, each cell type was set to "walk".
We want to add obstacles too, but that must be designed manually.
A function takes in a column and row value, along with the cell type and creates a cell of that type in the specified location.

# Resources Used
[a lot of html, css, javascript solutions used from here: ](https://www.w3schools.com/)
[your boy stack overflow. help with debugging javascript code from this website: ](https://stackoverflow.com/questions/)
[css tutorials: ](https://www.geeksforgeeks.org/css-tutorials/?ref=ghm)
[font package converter: ](https://transfonter.org/)
[downloaded fonts from here: ](https://fonts.google.com/specimen/Fredoka+One#standard-styles)
[button style inspiration: ](https://css-tricks.com/perfect-full-page-background-image/)


# ♟♟ The Masterchess ♟♟

Do you want to discover what are the Knight move possibilities in the Chess game!?

Masterchess works as an engine to preview moves in the Chess game. The first version just gets all cells where the Knight can move in exactly 2 turns.

The initial screen is a step wizard where users can understand how the application works, then it goes to the game page, where there is a Chessboard, users can select one cell and request the knight moves in two turns, by calling an API request using the Algebraic notation (D4, A5, H8, A1, ...).

This app is up and running [here](https://masterchess-web.herokuapp.com)

![Alt text](/src/images/game.jpg?raw=true "Game")

The API project is [here](https://github.com/rayashi/masterchess-api)

## Running locally

After cloning the project just go to the project folder and run:

```yarn``` or ```npm install```

```yarn dev``` or ```npm run dev```

## Running automated tests

```yarn test``` or ```npm run test```

## Project structure

* `/src` - All application codes
* `/src/onboarding` - An introduction page illustrates how the app works
* `/src/game` - Contains the Chess board and the menu
* `/src/redux` - Here are the configurations of redux, `combineReducers` join all reducers,  and redux sagas to handle asynchronous calls side effects.
* `/src/shared` - Components that can be used in all application components

## Framework and library versions

This project was tested using the following libraries versions:

* `axios` = ^0.19.2 - Make http requests
* `classnames` = ^2.2.6 - Joining classNames together
* `react` = 16.12.0 - Library for building the intercafe application
* `react-redux` = 7.1.3
* `react-router-dom` = 5.1.2
* `react-scripts` = 3.3.0
* `redux` = 4.0.5 - State container
* `redux-saga` = 1.1.3 - Manage side effects

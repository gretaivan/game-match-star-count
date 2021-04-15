# GAME: match the star count build with React
Mathe the star count is a small game that shows the player the number of stars and player must click on the available buttons to match the count. It allows to choose one number or sum two numbers to match the star count. 

## Features 
+ Generates random number of sums
+ Allows user to select a button to match the star count
+ Allows user to select number of buttons to achieve a certain sum
+ Allows user to unmark wrong button or button selected in the the summing process
+ Shows 4 colours to the user: 
    + grey for untouched buttons
    + green for correctly used buttons
    + red for button that is more than star count or is a added to the sum and the sum is more than the star count
    + blue for buttons that are being selected to form a sum of the star count

## Process
+ iniatialises npm
```npm install webpack webpack-cli webpack-dev-server html-webpack-plugin --save-dev```
+ configures webpack
+ installs dependencies and loaders
```npm i -D babel-loader style-loader css-loader```
```@babel/core: the core babel library```
```@babel/preset-env: allows us to target specific environments```
```@babel/plugin-transform-runtime: if you get regenerator runtime errors you may have forgotten this one!```
```@babel/plugin-proposal-class-properties: optional - recommended if you will be using ES6 class syntax```
```@babel/preset-react: only add if creating an app that uses React```
+ add .babelrc file
+ creates entry html
+ initializes app entry point
+ adds run scripts

## Technology
 + React
 + React-dom 
 + Babel
 

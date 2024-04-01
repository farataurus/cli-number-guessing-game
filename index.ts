#! /usr/bin/env node
import inquirer from "inquirer";
console.log ("wellcome to codewithfarah -cli Number Guessing Game");
// 1) computer will generate a random number -done.
// 2) user input for guessing number
// 3) compare user input with copmuter generated number and show result

const randomNumber = Math.floor(Math.random() * 10 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: "plaese guess a number between 1-10: ",
    },
]);
if(answers.userGuessNumber === randomNumber ){
    console.log("congratulation! you guessed a right number.")
}else{
    console.log("you guessed wrong number");
}
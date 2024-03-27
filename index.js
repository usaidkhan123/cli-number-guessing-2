#! /user/bin/env node
import inquirer from "inquirer";
const randomnumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([
    {
        name: "userguessednumber",
        type: "number",
        message: "Guess a number between 1 to 6",
    }
]);
if (answer.userguessednumber === randomnumber) {
    console.log("You got it right!");
}
else {
    console.log("You got it wrong!");
}

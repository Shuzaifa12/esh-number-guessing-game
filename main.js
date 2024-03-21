#! /usr/bin/env node
// This is a number guessing game using conditional statements:
// I am setting a target number which we have to guess by giving an input number:
let target_number = 25;
console.log(" ** WELCOME TO NUMBER GUESSING GAME **");
import inquirer from "inquirer";
let initialization = await inquirer.prompt({
    message: " PLease Select Option From The Following : ",
    choices: ["PLAY", "EXIT"],
    type: "list",
    name: "setup",
});
if (initialization.setup == "PLAY") {
    // Here after importing inquirer module we are ginf to take an input number;
    let input = await inquirer.prompt({
        message: " Please Enter TWO Digit Number = ",
        type: "number",
        name: "number",
    });
    if (input.number > target_number) {
        console.log("Your guess number is High than the actual number");
    }
    else if (input.number == target_number) {
        console.log("You win");
    }
    else {
        console.log("Your guess number is Lower than the actual number");
    }
}
else if (initialization.setup == "EXIT") {
    console.log("You have successfully exit the Game. Thank you for playing");
}
else {
    console.log("Please Select a Valid Number");
}

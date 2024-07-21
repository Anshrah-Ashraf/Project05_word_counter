#! /usr/bin/env

//Importing inquirer and chalk package
import inquirer from "inquirer";
import chalk from "chalk";

//Display a colorful welcome message
console.log(chalk.bold.bgCyanBright("\n \t\tWelcome to word counter"))
console.log("=".repeat(60));

//Prompt the user to enter a sentence
let answers = await inquirer.prompt<{sentence: string;}>([
    {
        name: "sentence",
        type: "input",
        message: "Enter a sentence: ",
    }
]);

//Trimming the sentence and splitting it into words for spaces
let words = answers.sentence.trim().split(" ")

//Analysis of user input sentences
console.log("=".repeat(60));
console.log(chalk.bold("- Sentence words: "));
console.log(words);
console.log(chalk.bold(`\n - Word count: ${chalk.bold.blueBright(words.length)}`));
console.log("=".repeat(60));






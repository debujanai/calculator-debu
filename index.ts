#! /usr/bin/env node

import inquirer from "inquirer"

let questions = await inquirer.prompt([
    {
        name: "question1",
        type: "number",
        message: "Enter the first number: ",


    },
    {
        name: "question2",
        type: "number",
        message: "Enter the second number: "


    }
])

let operator = await inquirer.prompt([
    {
        name: "operator",
        type: "list",
        message: "Select the operator: ",
        choices: ["+","-","/","*"]


    }
])
if (operator.operator === "+"){
    console.log(parseFloat(questions.question1) + parseFloat(questions.question2))
}
else if (operator.operator === "-"){
    console.log(parseFloat(questions.question1) - parseFloat(questions.question2))
}
else if (operator.operator === "/"){
    console.log(parseFloat(questions.question1) / parseFloat(questions.question2))
}
else if (operator.operator === "*"){
    console.log(parseFloat(questions.question1) * parseFloat(questions.question2))
}

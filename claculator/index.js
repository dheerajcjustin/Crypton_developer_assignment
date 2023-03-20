const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("enter your question: ( example question \"What is 5 plus 7?\") ", (result) => {
    let question = result.split(" ");
    let num1 = +question[2];
    let num2 = +  question[question.length - 1].split("?")[0];
    console.log(num2);
    let operator = question[3];

    if (isNaN(num1) || isNaN(num2)) return console.log("not a number");
    let answer;
    switch (operator) {
        case "plus":
            answer = num1 + num2;
            break;
        case "minus":
            answer = num1 - num2;
            break;
        case "multiplied":
            answer = num1 * num2;
            break;
        case "divided":
            answer = num1 / num2;
            break;
        default:
            answer = "Invalid operator";
            break
    }

    console.log(`${num1} ${operator}  ${num2} is ${answer}`);
    rl.close();
});


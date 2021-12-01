/* The code below tells the browser to ask you for a number then if that number is `6`, it returns `true` otherwise it returns `false` 
 * Change this code so it returns `true` when the number is greater than or equal to 10, and false if it is less than 10 */


/* using rl to get interactive NodeJS CLI */ 

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number:", 

function numberChecker() {
    if(number >= 10) {
        return true;
    } else {
        return false;
    } 
    
    rl.close();
});

rl.on("close", function() {
    console.log("\nBYE BYE !!!");
    process.exit(0);
});


 /* QA */

 let numCorrect = 0;
 let numChecked = 0;
 const result = numberChecker();

console.log(`You entered: ${number}, and got result: ${result}`);
console.log("\nTest results: \n");

 function checkNumberChecker(num) {
     number = num;
     const result = numberChecker();
     if ((result=== true && number >=10) | (result === false && number <10)) {
         numCorrect++;
         console.log(`If I enter ${number}, the result is ${result}. This is numCorrect, gz!`); 
     } else {
         console.error(`I entered "${number}", and got "${result}" as a result, I should have gotten "${number >=10}" instead.`);
     }
     numChecked++;
     console.log("\n");
 }

checkNumberChecker(2)
checkNumberChecker(12)
checkNumberChecker(6)
checkNumberChecker(10)
checkNumberChecker(9)

if(numCorrect === numChecked) {
    console.log("You've passed all the tests, continue to the next lesson!")
} else {
    console.log(`You have failed ${numChecked - numCorrect} out of ${numChecked}, please try again`);
}
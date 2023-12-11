1. /*Write a JavaScript function which accepts a parameter and returns its type and prints it in the console. Try to call the functions 5 times for 5 different types:

object
boolean
number
string
undefined*/

function typeOfInput(input) {
    console.log(typeof input);
}

let firstInput = typeOfInput(null);
console.log(firstInput);
let secondInput = typeOfInput(true);
console.log(secondInput);
let thirdInput = typeOfInput(7);
console.log(thirdInput);
let fourthInput = typeOfInput("John");
console.log(fourthInput);
let fifthInput = typeOfInput();
console.log(fifthInput);

2. /*Write a JavaScript function that will return:

Calculates your dog's age based on the conversion rate of 1 human year to 7 dog years
Note: Call the function in console to see answer
Bonus: Make the same function work for converting dog to human years as well*/

function dogAge(humanYears) {
    let result = humanYears * 7;
    console.log("The dog has: ", result, "dog years.");
}

let dogRetrieverYears = dogAge(6);


function humanYears(dogYears) {
    let humanYears = dogYears / 7;
    console.log("The dog has: ", humanYears, "human years.");
}

let bullDogYears = humanYears(56);

3. /*Write a javascript function for an ATM:
The ATM should give cash
Should return "Not enough money" if you request more money
Should return the ammount withdrawn and money left on the account if you have enough
Note: Hardcode your account money in the program 
Bonus: Make it work with prompt()!*/

function giveCash(ammount) {
    let moneyOnAccount = 100000;
    let moneyOnAccountN = parseInt(moneyOnAccount);
    if (ammount <= moneyOnAccount) {
        let availableMoney = moneyOnAccount - ammount;
        console.log("You are taking", ammountWanted);
        console.log("Left money on the account: ", availableMoney)
    }
    else { console.log("Not enough money"); }
}


let ammountWanted = prompt("How much money you want to take?")
let ammountWantedMoney = giveCash(ammountWanted);


4. /*Decription: Celsius to Fahrenheit formula: X°C x 1.8 + 32
Action: Write a function that will be able to convert Celsius to Fahrenheit and display the result
Bonus: Write another function that will be able to convert Fahrenheit to Celsius and display the result.
Formula: (5/9)  (Fahrenheit-32);*/

function fahrToCelsius(fahrenheitStepens) {
    let celsiusStepens = (5 / 9) * (fahrenheitStepens - 32);
    console.log("Today temerature is:", celsiusStepens, "C");
}

let todayFahrenheitC = prompt("Write the temperature in fahrenhet");
let todayCelsiusC = fahrToCelsius(todayFahrenheitC);

function celsiusToFahrenheit(celsiusS) {
    let fahrenheitS = celsiusS * (9 / 5) + 32;
    console.log("The temperature is: ", fahrenheitS, "F");
}

let todayCelsiusS = prompt("Write today temperature in F");
let todayFahrenhetS = celsiusToFahrenheit(todayCelsiusS);







// Vezba 1: Declare and initialize a variables of every type that we learned so far. Print each of them in a console or alert()!

// let firstInput = "text";
// console.log(typeof firstInput);
// let secondInput = parseInt("9");
// console.log(typeof secondInput);
// let thirdInput = [];
// console.log(typeof thirdInput);
// let fourthInput = true;
// console.log(typeof fourthInput);
// let fiftInput = null;
// console.log(fiftInput);
// let sixthInput = undefined;
// console.log(sixthInput);

// Vezba 2: Read 5 variables as user input and then print each of the variable types in the console.
// -Same answer as in the first exercise.

// Vezba 3: Write a JavaScript program to get the difference between a given number and 13, if the number is greater than 13 double the difference as a result.Make sure you use a function! Ex. Input: 20 ==> Output: 14

// function difference(number) {
//     if (parseInt(number) - 13 > 13) {
//         let result = (number - 13) * 2;
//         console.log(result);
//     }
//     else (parseInt(number) - 13 < 13)
//     {
//         console.log("The difference is smaller than 13")
//     }
// }
// let numberFour = prompt("Input the number");
// let result = difference(numberFour);

// Vezba 4: Write a JavaScript program that will find out which of two inserted integers is closer to 100. Make sure to alert the user if a negative number is inserted!Make sure you use a function!Ex. Input1: 20Input2: 80Output: 80 is closer to 100

// function closerNumber(numberOne, numberTwo) {
//     let numberOneN = parseInt(numberOne);
//     let numberTwoN = parseInt(numberTwo);
//     let numberOneNX = (numberOneN - 100);
//     let numberTwoNX = (numberTwoN - 100);
//     if (numberOneN < 0 || numberTwoN < 0) {
//         console.log("Your input is negative number");
//     }
//     else if (numberOneNX > numberTwoNX) {
//         console.log(`${numberTwo} is closer to 100`);
//     }
//     else if (numberOneNX < numberTwoNX) {
//         console.log(`${numberOne} is closer to 100`);
//     } else {
//         console.log("Try again");
//     }
// }
// let number1 = prompt("number1");
// let number2 = prompt("number2");
// closerNumber(number1, number2);

// Vezba 5: Bob's salary is 1000 eur per month. He has expenses that has to cover during the month. He has to pay rent for his apartment 375 eur. He should pay 250 eur for his bills in total. Print on screen what is the amount left that Bob has for the rest of the month, and what is the total amount of his expenses.

// function money(salary, expenses) {
//     const leftMoney = salary - expenses;
//     return (
//         `Bob left money is ${leftMoney} and total expenses are ${expenses}`);
// }


// let salary = 1000;
// let expenses = 375 + 250;
// let result = money(salary, expenses);
// let div = document.getElementById("first");
// div.innerHTML = result;


// Vezba 6: One student has 5 exams in the first semester. Student name is Bob Bobsky. His/Her grades for all of the exams are Math = 10, English = 6, Science = 8, Sport = 9, Chemistry = 6 respectively. The professor told the students that for passing the first semester they must have average of 8. The student needs to know whether they have passed the semester or not. Alert on screen if the student pass or not! Print on the screen all of the subjects and the student name aswell.

// let mathGrade = 10;
// let englishGrade = 6;
// let scienceGrade = 8;
// let sportGrade = 9;
// let chemistryGrade = 6;
// function averageGrade(mathGrade, englishGrade, scienceGrade, sportGrade, chemistryGrade) {
//     let averageGrade =
//         parseInt(
//             mathGrade + englishGrade + scienceGrade + sportGrade + chemistryGrade
//         ) / 5;
//     if (averageGrade > 8) {
//         alert("You passed!");
//         console.log(`Bob Bobsky passed: Math, English, Science, Sport and Chemistry`);
//     }
//     else if (averageGrade < 8) {
//         console.log(`Bob Bobsky didn't passed the semestar.`)
//     }
//     else if (averageGrade !== "number") { console.log("Try again") };

// }

// let averageGradeBob = averageGrade(10, 6, 8, 9, 6)

// Vezba 7: Write a JavaScript program to check whether a given positive number is a multiple of 3 or 7. If the number is divisible by 3, then write 'Fizz' in the console, if the number is divisible by 7, then write 'Buzz' in the console, and if the number is divisible by 3 and 7, write 'FizzBuzz' in the console.

// function numberCheck(numberOne) {
//     if (numberOne % 3 === 0 && numberOne % 7 === 0) {
//         alert("FizzBuzz");
//     } else if (numberOne % 7 === 0) {
//         alert("Buzz");
//     } else if (numberOne % 3 === 0) {
//         alert("Fizz");
//     } else {
//         alert("Try again");
//     }
// }
// numberOne = numberCheck(21);

// Vezba 8: Write a simple JavaScript program to join all elements of the an array into a string. The array should have at least 5 elements

// function stringArray() {
//     for (let i = 0; i < array.length; i++) {
//         string += array[i] + " ";
//     }
//     console.log(string);
// }
// let array = ["Cat", "Dog", "Bird", "Chicken", "Mouse"]
// let string = [];
// stringArray(string);

// Vezba 9: Make an array of ten elements. Make sure four of them to be: Null, undefined, NaN, “” and false (JavaScript falsy values). Create a function that will work for every array in the world :) and it will remove all the falsy values from the array.
let array = ["Null", "undefined", "NaN", "", false, 10, "cat", {}, "dog", "0"]



// Vezba 10: Write a JavaScript function called storyTeller(), that will take as an input parameters the input fields values from the html! ex: storyTeller(who, what, when) In the function, retrieve the current values of the form input elements, make a story from them, and output that in the story div (like Example: Lancelot was a really strong knight in the middle age! )

// ---------------------------------------------------
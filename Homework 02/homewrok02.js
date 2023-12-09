1. /*Decription: Using prompt() display a dialog box that prompts the visitor for input. Will return null on 'Cancel' or the value provided on 'Ok'
Action: Ask the user how much money he has, and depending on the value, suggest to him what he should do*/

let input = prompt("How much money do you have?");
console.log(input);
if (input <= 0) { console.log("Go find a way to make some money"); }
else if (input <= 500) { console.log("Buy only necessary things"); }
else if (input <= 1000) { console.log("Buy some book for yourself"); }
else if (input <= 3000) { console.log("Go to dinner"); }
else { console.log("Buy whatever you want"); }



2. /*Write javascript code that will get an input from the user and calculate which Chinese Zodiac a given year is in

Formula for Chinese Zodiac caluclation: (year - 4) % 12. Possible values:

0 - Rat
1 - Ox
2 - Tiger
3 - Rabbit
4 - Dragon
5 - Snake
6 - Horse
7 - Goat
8 - Monkey
9 - Rooster
10 - Dog
11 - Pig*/
let inputText = prompt("Write the year you were born in");
console.log(inputText);
let numberInput = parseInt(inputText);
let result = (numberInput - 4) % 12;
console.log(result);
let resultN = parseInt(result);

if (resultN == 0) { console.log("Your Chinese Zodiac is Rat"); }
else if (resultN == 1) { console.log("Your Chinese Zodiac is Ox"); }
else if (resultN == 2) { console.log("Your Chinese Zodiac is Tiger"); }
else if (resultN == 3) { console.log("Your Chinese Zodiac is Rabbit"); }
else if (resultN == 4) { console.log("Your Chinese Zodiac is Dragon"); }
else if (resultN == 5) { console.log("Your Chinese Zodiac is Snake"); }
else if (resultN == 6) { console.log("Your Chinese Zodiac is Horse"); }
else if (resultN == 7) { console.log("Your Chinese Zodiac is Goat"); }
else if (resultN == 8) { console.log("Your Chinese Zodiac is Monkey"); }
else if (resultN == 9) { console.log("Your Chinese Zodiac is Rooster"); }
else if (resultN == 10) { console.log("Your Chinese Zodiac is Dog"); }
else if (resultN == 11) { console.log("Your Chinese Zodiac is Pig"); }
else if (resultN == null) { console.log("null"); }



/*3. Write a program to find maximum between two numbers.*/
let numberOne = 5;
let numberTwo = 6;
if (numberOne > numberTwo) { console.log("The biggest number is: ", numberOne); }
if (numberOne < numberTwo) { console.log("The biggest number is: ", numberTwo); }
if (numberOne == numberTwo) { console.log("The numbers are equal"); }



4./*Write a program to find maximum between three numbers.*/

let firstNumber = 10;
let secondNumber = 2;
let thirdNumber = 4;
if (firstNumber > secondNumber, thirdNumber) { console.log("The biggest number is: ", firstNumber); }
else if (secondNumber > numberThree, firstNumber) { console.log("The biggest number is: ", secondNumber); }
else if (thirdNumber > numberOne, firstNumber) { console.log("The biggest number is: ", thirdNumber); }


5. /*Write a program to check whether a number is negative, positive or zero.*/

let inputNum = prompt("Input the number");
let numberN = parseInt(inputNum);
if (numberN < 0) { console.log("Negative number"); }
else if (numberN == 0) { console.log("Number is zero"); }
else if (numberN > 0) { console.log("Positive number"); }


6. /*Write a program that will accept user input between 1-7 (week number) and print week day.*/

let inputNumber = prompt("Write week number (1-7)");
console.log(inputNumber);
let dayNumber = parseInt(inputNumber);

if (dayNumber == 1) { console.log("It's Monday"); }
else if (dayNumber == 2) { console.log("It's Thesday"); }
else if (dayNumber == 3) { console.log("It's Wednesday"); }
else if (dayNumber == 4) { console.log("It's Thursday"); }
else if (dayNumber == 5) { console.log("It's Friday"); }
else if (dayNumber == 6) { console.log("It's Saturday"); }
else if (dayNumber == 7) { console.log("It's Sunday"); }
else if (dayNumber != [1, 2, 3, 4, 5, 6, 7]) { console.log("Entered wrong number"); }

7. /*Write a program that will check if user typed an input that is a number or not*/

let inputNom = prompt("Number input");
console.log(input, typeof input);
let inputN = parseInt(inputNom);
if (inputNom == inputN) { console.log("Your input is number"); }
if (inputNom != inputN) { console.log("Your input is not a nuber"); }



8. /*Write a program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer. Calculate percentage and grade according to following: Percentage >= 90% : Grade A Percentage >= 80% : Grade B Percentage >= 70% : Grade C Percentage >= 60% : Grade D Percentage >= 40% : Grade E Percentage < 40% : Grade F*/

let physicsGrade = prompt("Input Physics grade");
console.log(physicsGrade);
let physicsGradeN = parseInt(physicsGrade);
let chemistryGrade = prompt("Input Chemisty grade");
console.log(chemistryGrade);
let chemistryGradeN = parseInt(chemistryGrade);
let biologyGrade = prompt("Input Biology grade");
console.log(biologyGrade);
let biologyGradeN = parseInt(biologyGrade);
let mathematicsGrade = prompt("Input Mathematics grade");
console.log(mathematicsGrade);
let mathematicsGradeN = parseInt(mathematicsGrade);
let computerGrade = prompt("Input Computer grade");
console.log(computerGrade);
let computerGradeN = parseInt(computerGrade);
let averageGrade = ((physicsGradeN + chemistryGradeN + biologyGradeN + mathematicsGradeN + computerGradeN) / 5);
console.log(averageGrade);
let averageGradeN = parseInt(averageGrade);
let averageGradePercent = (averageGradeN / 5) * 100;
console.log(averageGradePercent);
let averageGradePercentN = parseInt(averageGradePercent);
if (averageGradePercentN >= 100) { console.log("Your grade is A"); }
else if (averageGradePercentN >= 80) { console.log("Your grade is B"); }
else if (averageGradePercentN >= 70) { console.log("Your grade is C"); }
else if (averageGradePercentN >= 60) { console.log("Your grade is D"); }
else if (averageGradePercentN >= 40) { console.log("Your grade is E"); }
else if (averageGradePercentN < 40) { console.log("Your grade is F"); }
else { console.log("Try again"); }
















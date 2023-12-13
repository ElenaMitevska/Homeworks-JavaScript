/*Create a function called tellStory()

The function should accept an array of 3 strings as an argument: name, mood, activity ( All strings )

The function should return one big string with a story made from the arguments

Example: This is *name*. *name* is a nice person. Today they are *mood*. They are *activity* all day. The end.

The value that is returned from the function should be printed in the console or in alert*/


/*function tellStory(name, mood, activity) 
{ let array = [prompt("name"), prompt("mood"), prompt("activity")];
console.log(array);
console.log(`My name is ${array[0]}. I feel ${array[1]}. Today I was ${array[2]} all day.`)
}


let myArray = tellStory();
console.log(myArray)*/

2./*Write a function that will take an array of 5 numbers as an argument and return the sum.

Print it in the console or in alert

BONUS: Write another function called validateNumber() that checks if a number is a valid number and call it for every number. If one of the numbers of the array is invalid show an error message instead of a result.*/

/*function sumOfNumbers([num1, num2, num3, num4, num5]) {
    let result = num1 + num2 + num3 + num4 + num5;
    console.log(`The sum of the Array is: ${result}`);
  
}

myArray = [5,6,15,30,40];
console.log(myArray);
myArrayResult = sumOfNumbers(myArray);*/

Bonus:
/*function validateNumber([num1, num2, num3, num4, num5]) {
  for (let i=0; i === Number; i++) {
    console.log(i);
  }
}

myArrayTwo = [5,4,6,9,8];
myArrayTwoValidation = validateNumber(myArrayTwo);
console.log(myArrayTwoValidation);*/

3. /* Write a javascript function that:
When given any array of strings (should work with array with any number of elements)
It will create one big string and return it
Ex:["Hello", "there", "students", "of", "SEDC", "!"]
Result: "Hello there students of SEDC!" */

/*function arrayString(array) {
    let result = [];
    for(let i = 0; i < array.length; i++) {
        if(array[i] === array[i].toString()){
       result += array[i]; }
    } return result;
}

let array = ["Hello ", "my ", "name ", "is ", "Klara "];
console.log(array);
let sumOfMyArray = arrayString(array);
console.log(sumOfMyArray);*/

4. /*Description: Write a loop in JavaScript that in range from 1 till 20 will write in the console every number, and will add the "\n" new line after every even number otherwise it will add " " empty space.*/

/*for (let i = 1; i < 21; i++) {
    if (i % 2 === 0) {console.log(`${i}\n`);} 
    else {console.log(`${i} ' '`);} }*/


5. /*Description: Write a JavaScript function that will return:
The sum of the MAX and MIN numbers from an array with numbers
Ex: arr = [3, 5, 6, 8, 11]
Output: Max: 11, Min: 3, Sum: 14

Bonus: Try making the function work if there are other types of items in it*/

/*function sumMaxMin(array) {
    const maximum = Math.max(...array);
    const minimum = Math.min(...array);
    const sum = maximum + minimum;
    return `Max number is: ${maximum}, Min number is: ${minimum}, the sum of Max and Min is: ${sum}`;}

const firstArray = [1, 2, 3, 4, 5];
const result = sumMaxMin(firstArray);
console.log(result);*/


6. /* Description:Write a javascript function that:
When given 2 arrays of students firstNames and lastNames will return a new array with students full names
Every name should have a numeric value before it
Ex: first = ["Bob", "Jill"], last = ["Gregory", "Wurtz"]
Result: full = ["1. Bob Gregory", "2. Jill Wurtz"] */



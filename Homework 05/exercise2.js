2. /*HOMEWORK PART 2
Print all numbers from an array and the sum

Create an array with numbers
Print all numbers from the array in a list element, in a new HTML page
Print out the sum of all of the numbers below the list
Bonus: Try printing the whole mathematical equasion as well ( 2 + 4 + 5 = 11)*/


array = [1, 2, 3, 4, 5]


for (let i = 1; i <= 5; i++) {
    let container = document.querySelector("#container");
    let li = document.createElement("li")
    li.innerText = `${i}`;
    container.appendChild(li);
}

let result = document.querySelector("#result")
result.innerText = `The sum of all number is: ${1 + 2 + 3 + 4 + 5}`;
let mathEquasion = document.querySelector("#equasion");
mathEquasion.innerText = `"The mathematical equasion: (1+2+3+4+5=11)"`;

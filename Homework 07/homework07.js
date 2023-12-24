/*HOMEWORK PART 1
CREATE OBJECT ANIMAL WITH 2 PROPERTIES AND 1 METHOD:
name
kind
speak (method)
this method will take one parameter and will print in the console a message: e.g. dog.speak(“hey bro!!!”) will log in the console “Dog says: ‘Hey bro!!!’”

Bonus: enter the values from prompt or from HTML inputs*/


// function AnimalCreator(name, kind) {
//     name = prompt("Enter animal name");
//     this.name = name;
//     kind = prompt("Enter animal kind")
//     this.kind = kind;
//     this.speak = function () {
//         console.log(`${this.name} is asking you 'How are you doing?`);
//     }
// }

// let dog = new AnimalCreator("Toby", "dog");
// console.log(dog.speak());

2. /*Write a JavaScript program to display the reading status of some book. The object should have the next properties: title, author, readingStatus and a method that will return info depending on the readingStatus e.g.

Already read 'The Robots of dawn' by Isaac Asimov. (if true)
You still need to read 'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins. (if false).
BONUS: ENTER THE VALUES FROM PROMPT() OR READ THEM FROM HTML*/

// function BookCreator(title, author, readingStatus) {
//     title = prompt("Write the title of the book");
//     this.title = title;
//     author = prompt("Write the author of the book");
//     this.author = author;
//     readingStatus = prompt("Write the reading status (alreadyRead/stillReading)");
//     this.readingStatus = readingStatus;

//     this.readingStatus = function () {
//         if (readingStatus === "alreadyRead") { console.log(`${this.title} by ${this.author} is already read.`) };
//         if (readingStatus !== "alreadyRead") { console.log(`You still need to read ${this.title} by ${this.author}.`) }
//     }
// }

// let myLastBook = new BookCreator();
// console.log(myLastBook.readingStatus());

3./*Create a constructor function named "UserCredentials" that will be used to generate userCredentials objects with the following properties: firstName, lastName, email, and password. Create an HTML form with fields for firstName, lastName, email, and password and a Submit button. On form submission, create a new userCredentials object using the constructor function. Append the created object to a global array named users. Display a success message on the screen saying "Successfully registered."

Bonus: Create a button "Show All Users". On click it should print all the users (only their first name and last name) in a ordered list.*/


let users = [];
function userCredentials(firstName, lastName, email, password) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
}

// function showUsers(usersArr, element) {
//     element.innerHTML = "";
//     for (let user of usersArray) {
//         // element.innerHTML += `<li> ${userCredentials.firstName} ${userCredentials.lastName} <li>`;
//         element.innerHTML += ` ${userCredentials.firstName} ${userCredentials.lastName}`;
//     }
// }

let credentials = document.getElementById("credentials");
let result = document.getElementById("result");

credentials.querySelector("#button").addEventListener("click", function () {

    let firstName = document.querySelector("#firstname").value;
    let lastName = document.querySelector("#lastname").value;
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;
    let newUser = new userCredentials(firstName, lastName, email, password);
    users.push(newUser);
    console.log(users);
    console.log(` ${firstName} ${lastName} is successfylly registered`)

    // showUsers(usersCredentials, result.getElementsByTagName("ol")[0])
    // credentials.children[0].value = "";
    // credentials.children[1].value = "";
    // credentials.children[2].value = ""
    // credentials.children[3].value = "";
})


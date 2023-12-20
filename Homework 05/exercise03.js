/*BONUS HOMEWORK
Create a recipe page from inputs

Ask the user for the name of the recipe
Ask the user how many ingredients do we need for the recipe
Ask the user for the name of every ingredient
Print the name of the recipe in the HTML as heading element, ex: h1-h6
Print all ingredients as an unordered list in the HTML
Extra: Use a table if you want to be fancy :)
*/

let recipeName = document.getElementById("recipe")
const h1 = document.createElement("h1");
h1.innerText = recipeName;


let ingrediants = [];
for (let i = 0; i < 50; i++) {
    let ingredients = document.getElementById("ingrediants");
    let ul = document.createElement("ul");
    ul.innerText = `${i}`
    document.body.appendChild(ul);
}

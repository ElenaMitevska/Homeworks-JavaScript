/*CREATE A DYNAMIC TABLE
Write a Javascript function that will dynamiclly create a table
User should input the number of Colums and Rows
In every table cell print which row and column it is (ex. Row-3 Column-1)
Don't forget to use google! :)*/



function createTable() {
    const table = document.getElementById("table");
    let row = prompt("Input Row number");
    if (row != null) { let row = document.getElementById("row").value }
    let col = prompt("Input Col number");
    table.innerHTML = "";
    if (col != null) { let col = document.getElementById("col").value }



    for (let i = 0; i < row; i++) {
        let tr = document.createElement("tr");
        for (let j = 0; j < col; j++) {
            let td = document.createElement("td");
            let text = document.createTextNode(`Row: ${i + 1} Col: ${j + 1}`);
            td.appendChild(text);
            tr.appendChild(td);
        }
        table.appendChild(tr);

    }


}

document.getElementById("btn").addEventListener("click", createTable);
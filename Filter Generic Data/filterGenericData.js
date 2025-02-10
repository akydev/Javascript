let users= []; // Store the user information in users array.

//Create a search Function.
const searchInfo = () =>{
    let filterData = users.filter(function(v){
            return Object.values(v).toString().indexOf(document.getElementById("search").value) >=0;
    });
    console.log(filterData);
}

// Call the API

fetch("https://jsonplaceholder.typicode.com/users")
.then(y=>y.json())
.then(y=>{
    users = y;
    displayInfo(y);  //function call and pass the json data in parameter using "Y";
});


//Fetch Data from API and Display Data in HTML.

const displayInfo = (data)=>{
let displayData = data.map(function(value){
    let row = `<tr>`;

    for (const key in value) {
        row +=checkColumn(value[key]);
    }

    row += "</tr>";

    return row;
});

    document.getElementById("displayContent").innerHTML = displayData.join(" ");

}


function checkColumn(v){
    let column = "";

    if(typeof v == "object"){
        for (const key in v) {
           column += checkColumn(v[key]);
        }
    }
    else{
            column += `<td>${v}</td>`;
    }
    return column;
}


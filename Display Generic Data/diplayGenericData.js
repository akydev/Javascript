//Call the API.

fetch("https://jsonplaceholder.typicode.com/posts")
.then(y=>y.json())
.then(y=>{

    displayInfo(y);//function call and pass the json data in parameter using "Y";
});


const displayInfo = (data) =>{
    const p = data.map((value)=>{

        let text = "<tr>"
        for (const key in value) {
            text += `<td>${value[key]}</td>`
        }
        text += "</tr>";

        return text;
    });

    document.getElementById("displayContent").innerHTML = p.join(" ");
}


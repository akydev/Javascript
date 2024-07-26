
//call api.
function searchData(){
    let searchTxt = document.getElementById("searchTxt").value;
    // alert(searchTxt);
fetch(`https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*&srsearch=${searchTxt}`)
.then(function(value){
    return value.json();
}).then(function(value){
    // return value;
    displayWiki(value.query.search);
    // console.log(value);
}).catch(function(e){
    console.log(e);
});
}


function displayWiki(data){
let output = data.map(function(value, index){
return `<div class="card col-xl-4" style="width:400px">       
                <div class="card-body">
                  <h4 class="card-title">${value.title}</h4>
                  <p class="card-text">${value.snippet}</p>
                  <a href="#" class="btn btn-primary">See Profile</a>
                </div>
            </div>`
})

document.getElementById("Wiki_Result").innerHTML = output.join(" ");
}


// <span>pageid</span><span class="primary">${value.pageid}</span>
//                   <span>size</span><span class="primary">${value.size}</span>
//                   <span>wordcount</span><span class="primary">${value.wordcount}</span>
//                   <span>timestamp</span><span class="primary">${value.timestamp}</span>
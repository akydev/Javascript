//Create Array.
const itemArray = [];
//set index.
let index = -1;


function addItem(e){
    e.preventDefault();
    let item = document.getElementById("inputTxt").value; 
    if(index < 0 && !item == 0){
        itemArray.push(item);
    }
    else{
        itemArray[index] = item;
    }
    index = -1;
    document.getElementById("inputTxt").value = "";
    displayItem();
};

function editItem(index1){
    index = index1;
    document.getElementById("inputTxt").value = itemArray[index1];

};

function displayItem(){
    let display = itemArray.map(function(value, index){
        return              `<div class="col-xl-10">   
                                <label class="card-text m-3">${value}</label>
                            </div>
                            <div class="col-xl-1">
                                <button class="btn btn-primary m-3" onclick="editItem(${index})">Edit</button>
                            </div>
                            <div class="col-xl-1">
                                <button class="btn btn-primary m-3" onclick="deleteItem(${index})">delete</button>
                            </div>`
    })
    document.getElementById("DisplayToDoList").innerHTML = display.join(" ");
};

function deleteItem(){
    itemArray.splice(index, 1);
    displayItem();
};

function clearItem(){
    itemArray.splice(0);
    displayItem();
}
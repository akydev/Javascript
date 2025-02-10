//Increment.
const inc = (e) =>{
    e.parentElement.previousElementSibling.innerHTML = 
    +e.parentElement.previousElementSibling.innerHTML + 1;
};

//Decrement.
const dec = (e) =>{
    e.parentElement.previousElementSibling.previousElementSibling.innerHTML = 
    +e.parentElement.previousElementSibling.previousElementSibling.innerHTML - 1;
};

//Update All Values.
const updateAllValues = () =>{
    let p = document.querySelectorAll("input[type = 'checkbox']:checked").length == 0
    ? document.querySelectorAll("input[type = 'checkbox']")
    : document.querySelectorAll("input[type = 'checkbox']:checked");

    let a = +document.getElementById("inputVal").value;
    
    p.forEach((element) =>{
        element.parentElement.nextElementSibling.innerHTML=
        +element.parentElement.nextElementSibling.innerHTML +a;
    });
};
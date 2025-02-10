//Create function for handleData.

function handleData(e){
    console.log(e);

    if((e.key >= "A" && e.key <= "Z") || (e.key >= "a" && e.key <= "z")){
        e.returnValue = true;
    }else{
        e.returnValue = false;
    }
}

function onchanged(e){
    alert("Onchanged Function Executed");
}

// function onfocused(e){
//     alert("Onfocused Function Executed");
// }

function onblured(e){
    alert("Onblured Function Executed");
}

function example(e){
    let p = document.getElementById("name1").value;
    alert(p);
}
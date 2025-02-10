//write a function to check validation.

function checkValidation(name,value){
    const pinCodeRegex = /^([0-9]*$)/;
    const pinCodeRange = /^[0-9]{6}$/;
    switch(name){
        case "pincode":{
            if(!value){
                document.getElementById("error-pincode").innerHTML = "Enter The Pincode";
            }else if(!pinCodeRegex.test(value)){
                document.getElementById("error-pincode").innerHTML = "Pincode Should Contain Only Numbers.";
            }
            else if(!pinCodeRange.test(value)){
                document.getElementById("error-pincode").innerHTML = "Pincode Should Contain Only 6 Digits.";
            }
            else{
                // document.getElementById("error-pincode").className = "text-bg-success";
                document.getElementById("error-pincode").innerHTML = "Pincode is in correct format.";
            }
        }
        break;
        default:
            document.getElementById("error-pincode").innerHTML = "Please Try Again";
            break;
    };
    
};

//create funtion to manage validation

const manageValidation = (e) =>{
    const {name, value} = e.target;
    checkValidation(name, value);
};
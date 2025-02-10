//Create Validation for a form.

function performValidation() {
  const v = document.getElementsByTagName("input");


  for (let i = 0; i < v.length; i++) {
    const message = checkValidation(v[i].name, v[i].value);
    document.getElementById(`error-${v[i].name}`).innerHTML = message;
  }

 isValidPassword();

//  document.getElementById("error-confirmPassword").innerHTML

}

//Check Validation for each input.

function checkValidation(name, value) {
    switch (name) {
      case "FirstName":
        if (!value) {
          return "Please Enter Your First Name";
        }
        else if(!isValidTextInput(value)){
          return "Only characters required";
        }
        else{
          return document.getElementById("error-FirstName").innerHTML = "";
        }
        break;
      case "LastName":
        if (!value) {
          return "Please Enter Your Last Name";
        }else if(!isValidTextInput(value)){
          return "Only characters required";
        }else{
          return document.getElementById("error-LastName").innerHTML = "";
        }
        break;
      case "email":
        if (!value) {
          return "Please Enter Your Email";
        }else if(!isValidTextInput(value)){
          return "Only characters required";
        }else{
          return document.getElementById("error-email").innerHTML = "";
        }
        break;
      case "password":
        if (!isValidPassword(value)) {
          return "Your password must be 8-20 characters long, contain letters and numbers and special characters, and must not contain spaces, or emoji.";
        }
        break;
      case "confirmPassword":
        if (!isValidPassword(value)) {
          return "Your password must be 8-20 characters long, contain letters and numbers and special characters, and must not contain spaces, or emoji.";
        }
        else if(!isMacthedPassword(value)){
            return "Password Do not Match. Please Try Again";
        }
        break;
      default:
        console.log("Invalid Input!!!");
    }
  };

  //Check Input Text.
  function isValidTextInput(name){
    const char =  /^[A-Za-z]+$/;
    console.log(char.test(name));
    return char.test(name);
  };


  //Check Password Input.
  function isValidPassword(password){
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,22}$/;
    return passwordPattern.test(password);
  };

  //check both password is matched or not.

  function isValidPassword(){
    const pwd = document.getElementById("password").value;
    const cnfPwd = document.getElementById("confirmPassword").value;


    if(pwd==cnfPwd){
        // console.log("Password Matched");
        // return "Password are Matched";
      }
      else{
        // console.log("Password Do not Matched");
        // return "Password are Do not Matched. Please Try Again";
      }
  };
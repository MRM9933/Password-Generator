// Assignment Code
let generateBtn = document.querySelector("#generate");

// setting arrays to draw password characters from
let array1 = ["a","b","c", "d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","w","x","y","z"]
// Write password to the #password input
function passpromt(){
  let criteria = passCriteria
  let length = prompt("How long do you want your password to be; between 8 and 128 characters")
  let charType = passCharType

  let parameters = {length : length, criteria : criteria, charType : charType}


}

function writePassword() { passpromt(length)
  let password = "test"
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

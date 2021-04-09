const lowerChars =  ["a","z"];
const upperChars = ["A","Z"];
const numericChar = ["0", "9"];
const specialChars = [" ","~"];
const generatedPassword = "";

var pwCriteria = {
  length: 0,
  lowercase: false,
  uppercase: false,
  numeric: false,
  special: false
}

// Assignment code here
function generatePassword() {

  alert("Please select your criteria...");
  gatherCriteria();
  for (var i in pwCriteria) {
    console.log(i.toString());
  }


}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// gatherCriteria function
function gatherCriteria(){

  while (pwCriteria.length < 8 || pwCriteria.length > 128
          && pwCriteria.length) {
    pwCriteria.length = prompt("Please enter length of password: [ 8 - 128 ]");
    if (pwCriteria.length < 8 || pwCriteria.length > 128) {
      alert("please select a length between 8 - 128");
    }
  }
  pwCriteria.lowercase = confirm("Do you want lowercase characters?");
  pwCriteria.uppercase = confirm("Do you want uppercase characters?");
  pwCriteria.uppercase = confirm("Do you want numeric characters?");
  pwCriteria.special = confirm("Do you want special characters?");
}



function rand(length, ...ranges) {
  var str = "";                                                   
  while(length--) {                                                   
    var ind = Math.floor(Math.random() * ranges.length);              
    var min = ranges[ind][0].charCodeAt(0),                           
        max = ranges[ind][1].charCodeAt(0);                          
    var c = Math.floor(Math.random() * (max - min + 1)) + min;        
    str += String.fromCharCode(c);                                   
  }
  return str;                                                        
}

// console.log(rand(5, upperChars, lowerChars, numericChar, specialChars));




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



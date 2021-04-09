const lowerChars = "abcdefghijklmnopqrstuvwxyz";
const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numericChars = "0123456789";
const specialChars = "!@#$%^&*(){}[]=<>/,."
var validChars = "";

var pwCriteria = {
  length: 0,
  lowercase: false,
  uppercase: false,
  numeric: false,
  special: false
}

// Assignment code here
function generatePassword() {

  var genPassword = "";

  alert("Please select your criteria...");
  gatherCriteria();

  for (var i = 0; i < pwCriteria.length; i++) {
    genPassword += validChars[Math.floor(Math.random() * validChars.length)];
  }

  return genPassword;
}

// gatherCriteria function
function gatherCriteria(){

  while (pwCriteria.length < 8 || pwCriteria.length > 128) {
    pwCriteria.length = prompt("Please enter length of password: [ 8 - 128 ]");
    if (pwCriteria.length < 8 || pwCriteria.length > 128) {
      alert("please select a length between 8 - 128");
    }
  }

  pwCriteria.lowercase = confirm("Do you want lowercase characters?");
  if (pwCriteria.lowercase) validChars += lowerChars; 

  pwCriteria.lowercase = confirm("Do you want uppercase characters?");
  if (pwCriteria.lowercase) validChars += upperChars; 

  pwCriteria.numeric = confirm("Do you want numeric characters?");
  if (pwCriteria.numeric) validChars += numericChars; 

  pwCriteria.special = confirm("Do you want special characters?");
  if (pwCriteria.special) validChars += specialChars; 

};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



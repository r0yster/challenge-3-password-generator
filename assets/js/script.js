// string variables holding characters to use for password generation
const lowerChars = "abcdefghijklmnopqrstuvwxyz";
const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numericChars = "0123456789";
const specialChars = "!@#$%^&*(){}[]=<>/,."

// password object initialization
var pwCriteria = {
  length: 0,
  lowercase: false,
  uppercase: false,
  numeric: false,
  special: false,
  validChars: "",
  reset: function() {
    this.length = 0;
    this.lowercase = false;
    this.uppercase = false;
    this.numeric = false;
    this.special = false;
    this.validChars = "";
  }
}

// Assignment code here
function generatePassword() {
  // reset values to ensure clean run
  pwCriteria.reset();
  // initialize return value
  var genPassword = "";

  // funtion call to gatherCriteria()
  alert("Please select your criteria...");
  gatherCriteria();

  for (var i = 0; i < pwCriteria.length; i++) {
    genPassword += pwCriteria.validChars[Math.floor(Math.random() * pwCriteria.validChars.length)];
  }

  return genPassword;
};

// gather user criteria
function gatherCriteria(){
  // check valid length, leaving when pw.Criteria length is within 8 - 128 
  while (pwCriteria.length < 8 || pwCriteria.length > 128) {
    pwCriteria.length = prompt("Please enter length of password: [ 8 - 128 ]");
    if (pwCriteria.length < 8 || pwCriteria.length > 128) {
      alert("please select a length between 8 - 128");
    }
  }

  // prompt user for password criteria (lower, upper, numeric, special) using confirm
  // if confirm === true, append confirmed criteria string to validChars string
  pwCriteria.lowercase = confirm("Do you want lowercase characters?");
  if (pwCriteria.lowercase) pwCriteria.validChars += lowerChars; 

  pwCriteria.uppercase = confirm("Do you want uppercase characters?");
  if (pwCriteria.uppercase) pwCriteria.validChars += upperChars; 

  pwCriteria.numeric = confirm("Do you want numeric characters?");
  if (pwCriteria.numeric) pwCriteria.validChars += numericChars; 

  pwCriteria.special = confirm("Do you want special characters?");
  if (pwCriteria.special) pwCriteria.validChars += specialChars;

  // no criteria selected check
  if (!pwCriteria.lowercase && !pwCriteria.uppercase && !pwCriteria.numeric && !pwCriteria.special) {
    alert("No criteria selected!");
    pwCriteria.reset();
    gatherCriteria();
  }

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



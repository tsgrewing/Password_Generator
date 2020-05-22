var possibleChars = [];
var lowercaseChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numericChars= ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChars = ["!", "#", "$", "%", "&,", "(", ")", "*", "+", "-", ".", "<", "=", ">", "?", "@", "[", "]", ";", "^", "_", "{", "}", "|", ":",  "~"];
var passwordLength;
var password;
var lowercase;
var uppercase;
var numerals;
var specials;


// Assignment Code
var generateBtn = document.querySelector("#generate");
//run a series of prompts for user. 
// Prompt user for password length
function lengthPrompt () { 
  passwordLength = prompt("How long does your password need to be? (8-128 characters)");
  if (passwordLength < 8 || passwordLength > 128 || (isNaN(passwordLength))) {
    alert("Error: please enter a number between 8 and 128.");
    lengthPrompt();
    }
  else {
    lowercasePrompt();
    return passwordLength;
    }
}
// Prompt if password should contain lowercase letters
function lowercasePrompt() {
  lowercase = confirm("Should your password include lowercase letters?");
  if (lowercase) {
    possibleChars = possibleChars.concat(lowercaseChars);
    uppercasePrompt();
  }
  else if (!lowercase) {
    uppercasePrompt();  
  }
}
// prompt if password should contain uppercase letters
function uppercasePrompt() {
  uppercase = confirm("Should your password include uppercase letters?");
  if (uppercase) {
    possibleChars = possibleChars.concat(uppercaseChars);
    numeralsPrompt();
  }
  else if (!uppercase) {
    numeralsPrompt();
  }
}
// prompt if password should contain numbers
function numeralsPrompt() {
  numerals = confirm("Should your password include numbers?");
  if (numerals) {
    possibleChars = possibleChars.concat(numericChars);
    specialsPrompt();
  }
  else if (!numerals) {
    specialsPrompt();
  }
}
// prompt if password should contain special characters
function specialsPrompt() {
  specials = confirm("Should your password include special characters?");
  if (specials) {
    possibleChars = possibleChars.concat(specialChars);
  }
  else if (!specials && !numerals && !lowercase && !uppercase) {
    alert("Error: Please select at least one type of character to include in your password.")
    lowercasePrompt();
  }
}
// Generate password based on input from user in above prompts
function generatePassword() {
  password = "";


    // if(var2 < passwordLength) {}  
      for (var i = 0; i < (passwordLength ) ; i++) {
        var nextChar = (Math.floor(Math.random() * possibleChars.length));
        password += possibleChars[nextChar];
      }
  return password;
}
// Write password to the #password input
function writePassword() {
  possibleChars = [];
  lengthPrompt();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
var possibleChars = [];
var lowercaseChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numericChars= ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialChars = ["!", "$", "%", "&", "?", "@", "*", "+", "=", "<", ">", "_", "-", "."];
var passwordLength;
var lowercase;
var uppercase;
var numerals;
var specials;
var pass;
var password;

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
    lowercase = prompt("Should your password include lowercase letters? (please enter 'y' or 'n')");
    if (lowercase === 'y') {
      possibleChars = possibleChars.concat(lowercaseChars);
      uppercasePrompt();
    }
    else if (lowercase === 'n') {
      uppercasePrompt();
    }
    else {
      alert("Error: please enter 'y' or 'n'.");
      lowercasePrompt();
    }
  }

  // prompt if password should contain uppercase letters
  function uppercasePrompt() {
    uppercase = prompt("Should your password include uppercase letters? (please enter 'y' or 'n')");
    if (uppercase === 'y') {
      possibleChars = possibleChars.concat(uppercaseChars);
      numeralsPrompt();
    }
    else if (uppercase === 'n') {
      numeralsPrompt();
    }
    else {
      alert("Error: please enter 'y' or 'n'.");
      uppercasePrompt();
    }
  }

  // prompt if password should contain numbers
  function numeralsPrompt() {
    numerals = prompt("Should your password include numbers? (please enter 'y' or 'n')");
    if (numerals === 'y') {
      possibleChars = possibleChars.concat(numericChars);
      specialsPrompt();
    }
    else if (numerals === 'n') {
      specialsPrompt();
    }
    else {
      alert("Error: please enter 'y' or 'n'.");
      numeralsPrompt();
    }
  }

  // prompt if password should contain special characters
  function specialsPrompt() {
   specials = prompt("Should your password include special characters? (please enter 'y' or 'n')");
    if (specials === 'y') {
      possibleChars = possibleChars.concat(specialChars);
      // newPassword();
    }
    else if (specials === 'n' && numerals === 'n' && lowercase === 'n' && uppercase ==='n') {
      alert('Error: Please select at least one type of character to include in your password.')
      lowercasePrompt();
    }
    else if (specials === 'n') {
      // newPassword();
    }
    else {
      alert("Error: please enter 'y' or 'n'.");
      specialsPrompt();
    }
  }

  // Generate password based on input from user in above prompts
  function newPassword() {
    password = '';
    for (var i = 0; i < passwordLength ; i++) {
      var nextChar = (Math.floor(Math.random() * possibleChars.length));
      password += possibleChars[nextChar];
    }
    return password;
  }

// Write password to the #password input
function writePassword() {
  possibleChars = [];

  lengthPrompt();
  var password = newPassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
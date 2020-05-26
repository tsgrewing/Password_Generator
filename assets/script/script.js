var possibleChars = [];
var lowercaseChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numericChars= ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChars = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "<", "=", ">", "?", "@", "[", "]", ";", "^", "_", "{", "}", "|", ":",  "~"];
var passwordLength;
var password;
var password = [];
var passArray = [];

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
    var lowercasePercentage = Math.floor(lowercaseChars.length / possibleChars.length * passwordLength);

    for (var i = 0; i < lowercasePercentage ; i++) {
      var nextChar = (Math.floor(Math.random() * lowercaseChars.length));
      passArray = passArray.concat(lowercaseChars[nextChar]);
    };
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
    var uppercasePercentage = Math.floor(uppercaseChars.length / possibleChars.length * passwordLength);

    for (var i = 0; i < uppercasePercentage ; i++) {
      var nextChar = (Math.floor(Math.random() * uppercaseChars.length));
      passArray = passArray.concat(uppercaseChars[nextChar]);
    numeralsPrompt();
    };
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
    var numeralPercentage = Math.round(numericChars.length / possibleChars.length * passwordLength);

    for (var i = 0; i < numeralPercentage ; i++) {
      var nextChar = (Math.floor(Math.random() * numericChars.length));
      passArray = passArray.concat(numericChars[nextChar]);
    };
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
    var specialPercentage = Math.floor(specialChars.length / possibleChars.length * passwordLength);

    for (var i = 0; i < specialPercentage ; i++) {
      var nextChar = (Math.floor(Math.random() * specialChars.length));
      passArray = passArray.concat(specialChars[nextChar]);
    };
  }
  else if (!specials && !numerals && !lowercase && !uppercase) {
    alert("Error: Please select at least one type of character to include in your password.")
    lowercasePrompt();
  }
}
// Generate password based on input from user in above prompts
function generatePassword() {


  // Accounting for any remaining characters needed and pulling them from the array of all available characters
  if (passArray.length < passwordLength){
    var difference = (passwordLength - passArray.length);

    for (var i = 0; i < difference ; i++) {
      var nextChar = (Math.floor(Math.random() * possibleChars.length));
      passArray = passArray.concat(possibleChars[nextChar]);
    };
  };
  // Durstenfeld Shuffle Algorithm, to randomize the order of the characters in passArray
  for (var i = passArray.length -1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = passArray[i];
    passArray[i] = passArray[j];
    passArray[j] = temp;
  };

  // Join the array and pass it to password then return 'password'
  password = passArray.join('');
  return password;
};

// Write password to the #password input
function writePassword() {
  // reset global variables for each new password
  possibleChars = [];

  //Run the prompts and generate password
  lengthPrompt();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
var possibleChars = [];
var lowercaseChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numericChars= ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialChars = ["!", "$", "%", "&", "?", "@"];
var pass;



// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Function to run a series of prompts for user. 
var generatePassword = () => {

  // Prompt user for password length
  var passwordLength = () => { 
    prompt("How long does your password need to be? (8-128 characters)");
    if (passwordLength < 8 && passwordLength > 128) {
      alert("Error: please enter a number between 8 and 128.");
      var passwordLength = prompt("How long does your password need to be? (8-128 characters)");
      passwordLength = parseInt(passwordLength, 10);
      return passwordLength;
      }
    else {
      lowercase();
      }
  }

  // Prompt if password should contain lowercase letters
  var lowercase = () => {
    prompt("Should your password include lowercase letters? (please enter 'y' or 'n')");
    if (lowercase === 'y') {
      possibleChars = possibleChars.concat(lowercaseChars);
      uppercase();
    }
    else if (lowercase === 'n') {
      alert("Error: please enter 'y' or 'n'.")
      uppercase();
    }
    else {
      alert("Error: please enter 'y' or 'n'.");
      lowercase();
    }
  }

  // prompt if password should contain uppercase letters
  var uppercase = () => {
    prompt("Should your password include uppercase letters? (please enter 'y' or 'n')");
    if (uppercase === 'y') {
      possibleChars = possibleChars.concat(uppercaseChars);
      numerics();
    }
    else if (uppercase === 'n') {
      alert("Error: please enter 'y' or 'n'.")
      numerics();
    }
    else {
      alert("Error: please enter 'y' or 'n'.");
      uppercase();
    }
  }

  // prompt if password should contain numbers
  var numerics = () => {
    prompt("Should your password include numbers letters? (please enter 'y' or 'n')");
    if (numerics === 'y') {
      possibleChars = possibleChars.concat(numericChars);
      specials();
    }
    else if (numerics === 'n') {
      alert("Error: please enter 'y' or 'n'.")
      specials();
    }
    else {
      alert("Error: please enter 'y' or 'n'.");
      numerics();
    }
  }

  // prompt if password should contain special characters
  var specials = () => {
    prompt("Should your password include lowercase letters? (please enter 'y' or 'n')");
    if (specials === 'y') {
      possibleChars = possibleChars.concat(specialChars);
      generatePassword();
    }
    else if (specials === 'n') {
      alert("Error: please enter 'y' or 'n'.")
      generatePassword();
    }
    else {
      alert("Error: please enter 'y' or 'n'.");
      specials();
    }
  }

  // Generate password based on input from user in above prompts
  var newPassword = () => {
    for (var i = 0; i < passwordLength; i++) {
      var nextChar = (Math.floor(Math.random() * possibleChars.length));
      pass += possibleChars[nextChar];
    }
        return pass;
  }
}



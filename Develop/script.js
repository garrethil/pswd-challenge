// Assignment code here
var alphabet = ["abcdefghijklmnopqrstuvwxyz"]
var numbers = ["0123456789"]
var special = ["!#$%&()*+,-./:;<=>?@^_|~"]

var generatePassword = function(){
  var pswdLength = window.prompt("How long would you like your password to be? (min. 8 characters)")
  var lowerCase = window.prompt("Would you like to include lowercase letters? 'Y' or 'N'")
  var upperCase = window.prompt("Would you like to include uppercase letters? 'Y' or 'N'")
  var specialChar = window.prompt("Would you like to include special characters? 'Y' or 'N'")
  var numbs = window.prompt("Would you like to include numbers? 'Y' or 'N'")
}

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

// Assignment code here


function generatePassword(){
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const alphabetCap = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const special = "!#$%&()*+-:;<=>?@^_|~";

  let selections = '';

  var pswdLength = window.prompt("How many characters would you like your password to have? (minimum 8)");

  var lowerCase = window.confirm("Would you like to include lowercase letters?");
if (lowerCase === true){
  selections += alphabet
}
  var upperCase = window.confirm("Would you like to include uppercase letters?");
if (upperCase === true){
  selections += alphabetCap
}
  var specialChar = window.confirm("Would you like to include special characters?");
  if (specialChar === true){
    selections += special
  }
  var numbs = window.confirm("Would you like to include numbers?");
  if (lowerCase === true){
    selections += numbers
  }

  console.log(selections)

let randPass = '';
  
for (let i = 0; i<pswdLength; i++){
  var randomIndex = Math.floor(Math.random()* selections.length)
  randPass += selections[randomIndex]
}
  


 return randPass;
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

var characterLength = 8;
var choiceArray = [];

var specialCharacterArray = ['!','@','#','$','%','^','&','*','(',')','{','}','[',']','/',':',';'];
var lowerCaseCharacterArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCaseCharacterArray = ['A','B','C','D','E','F','G','H','I','J','K','I','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numberCharacterArray = ['1','2','3','4','5','6','7','8','9','0'];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function popUPScreen () {
  characterLength = parseInt(prompt("How many characters would you like to have?"));

  if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("You must input a valid number between 8 to 128. Please try again (Number Only)!")
  }

if (confirm("Do you need lowercase characters in your new password?")) {
  choiceArray = choiceArray.concat(lowerCaseCharacterArray);
}



}

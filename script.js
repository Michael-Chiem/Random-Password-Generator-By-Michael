var numberLength = 8;
var choiceArray = [];

var specialCharacters = '!@#$%^&*(){}[]/:;';
var lowerCaseCharacters = 'abcdefghijklmnopqrstuvwxyz';
var upperCaseCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numberCharacters = '0123456789';

var specialCharacterArray = specialCharacters.split('');
var lowerCaseCharacterArray = lowerCaseCharacters.split('');
var upperCaseCharacterArray = upperCaseCharacters.split('');
var numberCharacterArray = numberCharacters.split('');


var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", function() {
  popUPScreen();
  writePassword();
});


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  passwordText.style.color = "red";
  passwordText.style.fontWeight = "bold";
  passwordText.classList.add("flashing");
}

function popUPScreen () {
  choiceArray = [];
  var incorrectAttempts = 0;

  function promptUser() {
  numberLength = parseInt(prompt("How many characters would you like to have?"));

  if (isNaN(numberLength) || numberLength < 8 || numberLength > 128) {
    incorrectAttempts++;
  if (incorrectAttempts <3) {
    alert("Please retry. The valid input should be a numerical value within the range of 8 to 128.");
    promptUser();
  } else {
    alert("Please try it again later. Have a nice day!");
  }
} else {
  incorrectAttempts = 0;

if (confirm("Do you need lowercase characters in your new password?")) {
  choiceArray = choiceArray.concat(lowerCaseCharacterArray);
}

if (confirm("Do you need uppercase characters in your new password?")) {
  choiceArray = choiceArray.concat(upperCaseCharacterArray);
}

if (confirm("Do you need special characters in your new password?")) {
  choiceArray = choiceArray.concat(specialCharacterArray);
}

if (confirm("Do you need numbers in your new password?")) {
  choiceArray = choiceArray.concat(numberCharacterArray);
    }
  }
}

promptUser();

}

function generatePassword() {
  var password = "";
  for (var i = 0; i < numberLength; i++) {
    var computerAIGeneratedCharacters = Math.floor(Math.random() * choiceArray.length);
    password = password + choiceArray[computerAIGeneratedCharacters]
  }
  return password;
}

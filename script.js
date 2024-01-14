
// 1) Refactor the code by establishing variables to capture the end-user's selection and implementing a for-loop function.
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

// 2) n this step, we establish a path or location using the Document Object Model (DOM).
var generateBtn = document.querySelector("#generate");


// 3) apply a click event listener to trigger the activation of the popUpScreen function.
generateBtn.addEventListener("click", function() {
  popUPScreen();
  writePassword();
});


// 5) The values obtained in step 4 are now being passed to the generatePassword function in step 6.
// 7) The output from step 6 is now inserted into the HTML body, showcasing the result to the end-user.
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  passwordText.style.color = "red";
  passwordText.style.fontWeight = "bold";
  passwordText.classList.add("flashing");
}

// 4) Upon activation of this function, it employs a for-loop parameter and checks for Not-A-Number to validate user input, subsequently concatenating the input value with the variables.
function popUPScreen () {
  choiceArray = [];

  // Note: I introduced the incorrectAttempts parameter to alert end-users when they have entered incorrect values within three attempts.
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

// 6) It initiates the generation of a random password according to the end-user's preferences, subsequently passing it to step 7.
function generatePassword() {
  var password = "";
  for (var i = 0; i < numberLength; i++) {
    var computerAIGeneratedCharacters = Math.floor(Math.random() * choiceArray.length);
    password = password + choiceArray[computerAIGeneratedCharacters]
  }
  return password;
}

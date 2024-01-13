Welcome to Michael Chiem "Random Password Generator" program.

Credit to: ChatGTP and Daniel Vega

First thing I created is variables.
    - characterLength = 8
    - choiceArray []; (Value zero)
    - specialCharacterArray []
    - lowerCaseCharacterArray []
    - upperCaseCharacterArray []
    - numberCharacterArray []

Next step is to create a function for a prompt
    - I used parseInt to convert string to number.
    - I used a parameter call "Not-A-Number" (NaN). To alert user is they are inputing the wrong value.
    - To test my codes, I inpected it and in the console, I typed "popUpScreen();" to see if the prompt is working, in this case, it's working as expected.

Next step is to add prompt to cofirm if the users want to have lower case, upper case, special characters and number in their password.
    - I used confirm parameter to create a prompt for the four arrays.
    - When the user click Ok to have the lower case in there, password. I used a parameter call concatenate the choiceArray with the lowerCaseCharacterArray.




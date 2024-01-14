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
    - To test my codes, I inspected it and in the console, I typed "popUpScreen();" to see if the prompt is working, in this case, it's working as expected.

Next step is to add prompt to cofirm if the users want to have lower case, upper case, special characters and number in their password.
    - I used confirm parameter to create a prompt for the four arrays.
    - When the user click Ok to have the lower case in there, password. I used a parameter call concatenate the choiceArray with the lowerCaseCharacterArray.

Next step is to add the rest of the if statements, concatenate the choiceArray with selection variables.
    - I added if statements for specialCharacterArray, upperCaseCharacterArray and numberCharacterArray
    - I test my codes by using console debug log.
    - I ran "popUpScreen ();" to verify the prompt and selection are working. Which they are.

Next step, I added the popUpScreen function into the eventlistener-
so that when the end user clicked on the Generate Password button, the popUpScreen parameter prompt the user to insert and select the values.
I tested the Generate Password button by clicking on it, then I get a prompt, after select the values, I got an error messages on my console log "writtenPassword is not defined"

I updated the special characters variables so that I can easily read the file structure.

Next step, I create a function for the generatePassword by using for lop parameter and return the output by adding to the choiceArray variables.
    - When I tested my codes, I noticed that when an incorrect value used in the characterLength, the system still processing the other parameter.
    - To fixed this problem, I will added recursive call to itself if the user enters an invalide character length.
    - The recursive call ensures that the user is prompted again until a valid input is received.

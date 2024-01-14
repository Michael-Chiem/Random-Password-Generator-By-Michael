Welcome to the Random Password Generator, skillfully crafted by Michael Chiem, with credit to Daniel Vega and ChatGPT for their design contributions.

This program boasts a user-friendly interface, guaranteeing secure and swift access.

Amidst the multitude of online password generators, rest assured that my codes prioritize safety and user-friendliness.

Thank you for opting to use our generator! Wishing you a fantastic day!

Credit to: ChatGTP and Daniel Vega

I included an image of myself on the page to confirm my authenticity as a real person.

The first thing I will create the following variables.
    - numberLength = 8
    - choiceArray []; (Value zero)
    - specialCharacterArray []
    - lowerCaseCharacterArray []
    - upperCaseCharacterArray []
    - numberCharacterArray []

The next step is to create a function for the prompt function.
    - I used parseInt to convert string to number.
    - I used a parameter called "Not-A-Number" (NaN). To alert users if they are inputting the wrong value.
    - To test my codes, I inspected using the dev console, I typed "popUpscreen ();" to see if the prompt was working; in this case, it's working as expected.

The next step is to add a prompt to confirm whether users want lowercase, uppercase, special characters, and numbers in their password.
    - I used the confirm parameter to create a prompt for the four arrays.
    - When the user clicks OK to select the lowercase letter in their password, I used a parameter called concatenating the choiceArray to merge with lowercaseCharacterArray.

The next step is to add the rest of the if statements and concatenate the choiceArray with selection variables.
    - I added if statements for specialCharacterArray, upperCaseCharacterArray, and numberCharacterArray
    - I tested my codes by using the dev console debug log.
    - I ran "popUpScreen ();" to verify the prompt and selection are working. Which they are.

In the next step, I added the popUpScreen function into the eventlistener-
so that when the end user clicks on the Generate Password button, the popUpScreen parameter prompts the user to insert and select the values.
I tested the Generate Password button by clicking on it and got a prompt. After selecting the values, I got an error message on my console log: "writtenPassword is not defined."

I updated the special character variables to read the file structure easily.

In the next step, I create a function for the generatePassword using the lop parameter and return the output by adding to the choiceArray variables.
    - I also used Math Floor to round the numbers to the nearest and used Math Random to help with selecting the random character in the variables.
    - When I tested my codes, I noticed an incorrect value was used in the character length. The system still processed the other parameters.
    - To fix this problem, I will add a recursive call to itself if the user enters an invalid character length.
    - The recursive call ensures the user is prompted again until a valid input is received.

In the final step, I added the popUpScreen into the popUpScreen function and kept returning the prompt until the end user inserted the correct value.
I also added the alert "Congratulations, your new password is:
I also changed the password text to red and bolded the font.

I added flash around the password text box so the user can stay focus to the new password value.

I also added failed safe reset, after three failed attempts inputting the number length. The system prompt a message and stop processing the request.


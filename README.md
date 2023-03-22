# 10 Object-Oriented Programming: Team Profile Generator

## Description

This is a Node.js command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person.

There are also four tests to ensure that the information is taken in correctly.

## User Story

```md
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```

## Installation

This project requires you to use inquirer and jest.
Use 'npm install' in your terminal to install the dependencies.

## Usage

Enter into 'Main' and run 'node index.js' from there to start the application.
Answer the questions, and the answers will create cards for each employee in index.html.

Enter the 'test' directory and run 'npm test' in order to see if the tests pass.

The script can be found on https://github.com/eddygoto/Team-Generator.
![Screenshot](/assets/html.png)
![JestScreenshot](/assets/jest.png)

The following link will take you to a demo recording:
https://watch.screencastify.com/v/4KoVNVbivN4qYVgNbvGx

## Credits

None

## License

None

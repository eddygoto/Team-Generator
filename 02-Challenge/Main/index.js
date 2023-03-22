// bring inquirer
const inquirer = require('inquirer');
const fs = require('fs');

const generateHTML = require('./src/generateHTML');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const employees = [];

// create function that runs inquirer prompt questions .then(() => inquirer.prompt()then)s
const questions = async () => {

const answers = await inquirer
.prompt([
{
    type: "input",
    message: "What is your name?",
    name: "name",
},
{
    type: "input",
    message: "What is your ID number?",
    name: "id",
},
{
    type: "input",
    message: "What is your email address?",
    name: "email",
},
{
    type: "list",
    message: "What is your role?",
    name: "role",
    choices: ["Manager", "Engineer", "Intern"],
},
])

    if (answers.role === "Manager") {
        const managerAnswers = await inquirer
        .prompt([
            {
                type: "input",
                message: "What is your office number?",
                name: "officeNumber",
            },
        ])
        const newManager = new Manager(
            answers.name,
            answers.id,
            answers.email,
            answers.officeNumber,
        );
        employees.push(newManager);

    } else if (answers.role === "Engineer") {
        const engineerAnswers = await inquirer
        .prompt([
            {
                type: "input",
                message: "What is your Github?",
                name: "github",
            },
        ])
        const newEngineer = new Engineer(
            answers.name,
            answers.id,
            answers.email,
            answers.github,
        );
        employees.push(newEngineer);

    } else {
        const internAnswers = await inquirer
        .prompt([
            {
                type: "input",
                message: "What school do you attend?",
                name: "school",
            },
        ])
        const newIntern = new Intern(
            answers.name,
            answers.id,
            answers.email,
            answers.school,
        );
        employees.push(newIntern);
    }
};
// chain promises until user decides to end

// end point = loop through employee array => convert into html

async function promptQuestions() {
  await questions();

  const addAnotherEmployee = await inquirer
    .prompt([
      {
        type: 'list',
        name: 'add',
        message: 'What would you like to do next?',
        choices: [
            'Add a New Team Member',
            'Create Team'
          ]
      }
    ])

    if (addAnotherEmployee.add === 'Add a New Team Member') {
      return promptQuestions();
    }

    return create();
}

promptQuestions();


function create() {
    console.log('Generating your team...');
    const html = generateHTML(employees);
    fs.writeFileSync('./dist/index.html', html, 'utf-8');
  }
  
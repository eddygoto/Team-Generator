const generateCards = (data) => {
    // create manager card
const generateManager = (manager) => {
    return `
    <div class="col-4 mt-4 card-container">
        <div class="card h-100">
            <div class="card-header">
                <h3>${manager.getName()}</h3>
                <h4>Manager</h4>
            </div>
            <div class="card-body">
                <p class="id">ID: ${manager.getId()}</p>
                <p class="email">Email: ${manager.getEmail()}</p>
                <p class="office">Office Number: ${manager.getOfficeNumber()}</p>
            </div>
        </div>
    </div>
    `;
    }

    // create engineer card
const generateEngineer = (engineer) => {
    return `
    <div class="col-4 mt-4 card-container">
        <div class="card h-100">
            <div class="card-header">
                <h3>${engineer.getName()}</h3>
                <h4>Engineer</h4>
            </div>
            <div class="card-body">
                <p class="id">ID: ${engineer.getId()}</p>
                <p class="email">Email: ${engineer.getEmail()}</p>
                <p class="github">Github: ${engineer.getGithub()}</p>
            </div>
        </div>
    </div>
    `;
    }

    // create Intern card
const generateIntern = (intern) => {
    return `
    <div class="col-4 mt-4 card-container">
        <div class="card h-100">
            <div class="card-header">
                <h3>${intern.getName()}</h3>
                <h4>Intern</h4>
            </div>
            <div class="card-body">
                <p class="id">ID: ${intern.getId()}</p>
                <p class="email">Email: ${intern.getEmail()}</p>
                <p class="school">School: ${intern.getSchool()}</p>
            </div>
        </div>
    </div>
    `;
    }

const html = [];

  html.push(
    data
      .filter((employee) => employee.getRole() === "Manager")
      .map((manager) => generateManager(manager))
  );
  html.push(
    data
      .filter((employee) => employee.getRole() === "Engineer")
      .map((engineer) => generateEngineer(engineer))
      .join("")
  );
  html.push(
    data
      .filter((employee) => employee.getRole() === "Intern")
      .map((intern) => generateIntern(intern))
      .join("")
  );

  return html.join("");
};


const generateHTML = (data) => {
return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Team Profile Generator</title>
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
    />
    <link rel="stylesheet" href="./stylesheet.css">
</head>
<body>
    <div class="container">
        <h1 class="text-center">Team Profile</h1>
            <div class="row justify-content-center" id="team-cards">
            ${generateCards(data)}
            </div>
        </h1>
    </div>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
</body>
</html>
`
}

module.exports = generateHTML;
// Packages needed for this application
const inquirer = require('inquirer');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const fs = require('fs');
const generatePage = require('./src/page-template');
const { getConsoleOutput } = require('@jest/console');

// Array of questions for user input
const managerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "What is your team's manager name?",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter the team manager's name!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "What is your team's manager employee ID?",
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log("Please enter the manager's employee id!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "What is your team's manager email address?",
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log("Please enter the manager's email address!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "What is your team's manager office number?",
        validate: officeInput => {
            if (officeInput) {
                return true;
            } else {
                console.log('Please enter the description of the office number!');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'newTeamMember',
        message: "What kind of employee would you like to add to your team?",
        choices: ["Engineer", "Intern", "I'm all done building out my team"]
    }
];

const engineerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "What is the engineer's name?",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter the team engineer's name!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the engineer's employee ID?",
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log("Please enter the engineer's employee id!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the engineer's email address?",
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log("Please enter the engineer's email address!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: "What is the engineer's GitHub username?",
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter the engineer github username!');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'newTeamMember',
        message: "What kind of employee would you like to add to your team?",
        choices: ["Engineer", "Intern", "I'm all done building out my team"]
    }
];

const internQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "What is the intern's name?",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter the team intern's name!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the intern's employee ID?",
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log("Please enter the intern's employee id!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the intern's email address?",
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log("Please enter the intern's email address!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'school',
        message: "What is the intern's school?",
        validate: schoolInput => {
            if (schoolInput) {
                return true;
            } else {
                console.log("Please enter the intern's school!");
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'newTeamMember',
        message: "What kind of employee would you like to add to your team?",
        choices: ["Engineer", "Intern", "I'm all done building out my team"]
    }
];

const addManager = () => {
    inquirer.prompt(managerQuestions)
    .then(responses => {
        const manager = new Manager(responses.name, responses.id, responses.email, responses.officeNumber, responses.role = 'Manager');

        if(!manager.team) {
            manager.team = [];
        }

        if (responses.newTeamMember === "Engineer") {
            addEngineer(manager);
        }
        else if (responses.newTeamMember === "Intern") {
            addIntern(manager);
        } else {
            writeFile(manager);
        }
    });
};

const addEngineer = manager => {
    console.log('You would like to add a new engineer to your team!');

    inquirer.prompt(engineerQuestions)
    .then(responses => {
        const engineer = new Engineer(responses.name, responses.id, responses.email, responses.github, responses.role = 'Engineer');
        manager.team.push(engineer);

        if (responses.newTeamMember === "Engineer") {
            addEngineer(manager);
        }
        else if (responses.newTeamMember === "Intern") {
            addIntern(manager);
        } else {
            writeFile(manager);
        }
    });
};

const addIntern = manager => {
    console.log('You would like to add a new intern to your team!');
    inquirer.prompt(internQuestions)

    .then(responses => {
        const intern = new Intern(responses.name, responses.id, responses.email, responses.school, responses.role = 'Intern');
        manager.team.push(intern);

        if (responses.newTeamMember === "Engineer") {
            addEngineer(manager);
        }
        else if (responses.newTeamMember === "Intern") {
            addIntern(manager);
        } else {
            writeFile(manager);
        }
    });
};

const writeFile = manager => {
    const pageContent = generatePage(manager);
    fs.writeFile('./dist/index.html', pageContent, err => {
        if (err) throw err;

        console.log('Team Page complete! Check out the HTML.index to see the output!');
    });
}

const init = () => {
    addManager();
}

init();
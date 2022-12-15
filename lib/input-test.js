// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// Require Classses
const Employee = require("./Employee");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const Manager = require("./Manager");


const questionsManager = [
    //1. Team Membership
    {
        type: 'list',
        name: 'teamName',
        message: '5. Which team are you on?',
        choices: ["The Alliance", "Rock 'n' Sock", "D-Generation X"]
    },
    // 2.
    {
        type: 'input',
        name: 'employeeManagerName',
        message: '2. What is the Manager\'s name?',
    },
    // 3.
    {
        type: 'input',
        name: 'employeeManagerID',
        message: '3. What is the Manager\'s ID?',
    },
    // 4.
    {
        type: 'input',
        name: 'officeNumber',
        message: '4. What is the the manager\'s office number?'
    }
]

// Engineers
const questionsEngineer = [
    // 1.
    {
        type: 'input',
        name: 'employeeManagerName',
        message: '1. What is the Manager\'s name?',
    },
    // 2.
    {
        type: 'input',
        name: 'employeeManagerID',
        message: '3. What is the Manager\'s ID?',
    },
    // 3.
    {
        type: 'input',
        name: 'githubName',
        message: '3. What is the engineer\'s GitHub account?'
    }
]

// Interns
const questionsIntern = [
     // 1.
     {
        type: 'input',
        name: 'employeeManagerName',
        message: '1. What is the Manager\'s name?',
    },
    // 2.
    {
        type: 'input',
        name: 'employeeManagerID',
        message: '2. What is the Manager\'s ID?',
    },

    // 3.
    {
        type: 'input',
        name: 'schoolName',
        message: '3. What is the intern\'s school name?',
        when: (answers) => answers.employeePosition === 'Intern'
    }
]













// Plan of Action
// 1. Ask Questions
// 2. Create a new person using classes


// 1. enterData is ran
// 2. Ask about manager --> engineer --> intern

// enter data for team 
// Create a Manager, Engineer, and Intern


// -----------------Function Definitions--------------------
// Author: Immanuel Williams PhD 
// Date Created: (FLEX Staff)
// Date Modified: 11/27/2022
// Name: writeToFile
// Purpose: writes the markdown file to a file based on the data input of data filename
// Input: fileName, Data
// Output: NA
// Notes: NA
// -----------------Function Definitions--------------------
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => err ? console.log(err) : console.log('Success!'));
}

// -----------------Function Definitions--------------------
// Author: Immanuel Williams PhD 
// Date Created: (FLEX Staff)
// Date Modified: 11/27/2022
// Name: writeToFile
// Purpose: runs questions of prompt and stores information into data then runs writeToFile
// Input: NA
// Output: NA
// Notes: NA
// -----------------Function Definitions--------------------
function init() {
    inquirer.prompt(questions).then((data) => {
        console.log("Made it");
        // writeToFile(`${data.teamName}.md`, data);
    });
}

// Function call to initialize app
init();
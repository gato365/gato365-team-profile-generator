// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// Require Classses
// const Employee = require("./Employee");
const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");





const questionsManager = [
    //1. Team Membership
    {
        type: 'list',
        name: 'teamName',
        message: '1. Which team are you on?',
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
        name: 'employeeManagerEmail',
        message: '4. What is the Manager\'s Email?',
    },
    // 5.
    {
        type: 'input',
        name: 'officeNumber',
        message: '5. What is the the manager\'s office number?'
    }
]

// Engineers
const questionsEngineer = [
    // 1.
    {
        type: 'input',
        name: 'employeeEngineerName',
        message: '1. What is the Engineer\'s name?',
    },
    // 2.
    {
        type: 'input',
        name: 'employeeEngineerID',
        message: '2. What is the Engineer\'s ID?',
    },
    // 3.
    {
        type: 'input',
        name: 'employeeEngineerEmail',
        message: '3. What is the Engineer\'s Email?',
    },
    // 4.
    {
        type: 'input',
        name: 'githubAccount',
        message: '4. What is the Engineer\'s GitHub account?'
    }
]

// Interns
const questionsIntern = [
    // 1.
    {
        type: 'input',
        name: 'employeeInternName',
        message: '1. What is the Intern\'s name?',
    },
    // 2.
    {
        type: 'input',
        name: 'employeeInternID',
        message: '2. What is the Intern\'s ID?',
    },

    // 3.
    {
        type: 'input',
        name: 'employeeInternEmail',
        message: '3. What is the Intern\'s Email?',
    },
    // 4.
    {
        type: 'input',
        name: 'schoolName',
        message: '4. What is the Intern\'s school name?',

    }
]















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




function testHTML(currentManager,currentEngineer,currentIntern){
return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    

    <h3>"Manager's Information" </h3>
    
    ${currentManager.getName()}
    ${currentManager.getId()}
    ${currentManager.getEmail()}
    ${currentManager.getOfficeNumber()}
    ${currentManager.getRole()}


    <h3>"Engineer's Information" </h3>
    ${currentEngineer.getName()}
    ${currentEngineer.getId()}
    ${currentEngineer.getEmail()}
    ${currentEngineer.getGitHubAccount()}
    ${currentEngineer.getRole()}

    
    <h3>"Intern's Information" </h3>
    ${currentIntern.getName()}
    ${currentIntern.getId()}
    ${currentIntern.getEmail()}
    ${currentIntern.getUniversity()}
    ${currentIntern.getRole()}


</body>
</html>
`;
}




















// -----------------Function Definitions--------------------
// Author: Immanuel Williams PhD 
// Date Created: 12/16/2022
// Date Modified: 12/16/2022
// Name: testConsoleLogInfo
// Purpose: Displays Information in Console
// Input: NA
// Output: NA
// Notes: NA
// -----------------Function Definitions--------------------

function testConsoleLogInfo(){
    console.log("Manager's Information");
    console.log(currentManager.getName());
    console.log(currentManager.getId());
    console.log(currentManager.getEmail());
    console.log(currentManager.getOfficeNumber());
    console.log(currentManager.getRole());


    console.log("Engineer's Information");
    console.log(currentEngineer.getName());
    console.log(currentEngineer.getId());
    console.log(currentEngineer.getEmail());
    console.log(currentEngineer.getGitHubAccount());
    console.log(currentEngineer.getRole());

    
    console.log("Intern's Information");
    console.log(currentIntern.getName());
    console.log(currentIntern.getId());
    console.log(currentIntern.getEmail());
    console.log(currentIntern.getUniversity());
    console.log(currentIntern.getRole());
};








// -----------------Function Definitions--------------------
// Author: Immanuel Williams PhD 
// Date Created: (FLEX Staff)
// Date Modified: 12/16/2022
// Name: writeToFile
// Purpose: runs questions of prompt and stores information into data then runs writeToFile
// Input: NA
// Output: NA
// Notes: NA
// -----------------Function Definitions--------------------
function init() {
    inquirer.prompt(questionsManager).then((dataManager) => {
        inquirer.prompt(questionsEngineer).then((dataEngineer) => {
            inquirer.prompt(questionsIntern).then((dataIntern) => {


                // Create a new Manager
                const currentManager = new Manager(
                    dataManager.employeeManagerName,
                    dataManager.employeeManagerID,
                    dataManager.employeeManagerEmail,
                    dataManager.officeNumber);


                // Create a new Engineer
                const currentEngineer = new Engineer(
                    dataEngineer.employeeEngineerName,
                    dataEngineer.employeeEngineerID,
                    dataEngineer.employeeEngineerEmail,
                    dataEngineer.githubAccount);



                // Create a new Intern
                const currentIntern = new Intern(
                    dataIntern.employeeInternName,
                    dataIntern.employeeInternID,
                    dataIntern.employeeInternEmail,
                    dataIntern.schoolName);


                    // Display Information
                    // testConsoleLogInfo()
                   const htmlFile =  testHTML(currentManager,currentEngineer,currentIntern);
                   console.log(htmlFile);


                    
            });

        });
    });
}

// Function call to initialize app
init();


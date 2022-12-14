// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


const questions = [
    // 1.
    {
        type: 'list',
        name: 'employeePosition',
        message: '1. What is the employee\'s role?',
        choices: ['Manager', 'Intern', 'Engineer']
    },
    // 2.
    {
        type: 'input',
        name: 'employeeName',
        message: '2. What is the employee\'s name?',
    },

    // 3.

    {
        type: 'input',
        name: 'employeeID',
        message: '3. What is the employee\'s ID?',
    },
    // 4a.
    {
        type: 'input',
        name: 'officeNumber',
        message: '4. What is the the manager\'s office number?',
        when: (answers) => answers.employeePosition === 'Manager'
    },
    // 4b.
    {
        type: 'input',
        name: 'githubName',
        message: '4. What is the engineer\'s GitHub account?',
        when: (answers) => answers.employeePosition === 'Engineer'
    },
    // 4c.
    {
        type: 'input',
        name: 'schoolName',
        message: '4. What is the intern\'s school name?',
        when: (answers) => answers.employeePosition === 'Intern'
    },
    //5. Team Membership
    {
        type: 'list',
        name: 'teamName',
        message: '5. Which team are you on?',
        choices: ["The Alliance", "Rock 'n' Sock", "D-Generation X"]
    }
]

// The Alliance: Manager - Vince McMahon ; Engineer - Stephanie McMahon; Intern - Shane McMahon
// Information: The Alliance, also known as Team WCW/ECW and The Coalition, was a professional wrestling stable in the World Wrestling Federation (WWF, now WWE) that existed during the Invasion storyline from July to November 2001.



// Rock 'n' Sock: Manager - The Rock ; Engineer - Mick Foley; Intern - The Sock
//The Rock 'n' Sock Connection was a professional wrestling tag team of The Rock and Mankind/Mick Foley who wrestled in the World Wrestling Federation between 1999 and 2000 and briefly in 2004. As a team, they held the WWF Tag Team Championship three times

// D-Generation X: Manager - Chyna ; Engineer - Triple H; Intern - X-Pac
//The group originated in the World Wrestling Federation (WWF, now known as WWE) in the midst of the "Attitude Era" in 1997 as a foil to another prominent faction, The Hart Foundation and became one of the main driving forces behind the WWF competing with World Championship Wrestling (WCW) in the Monday Night Wars. In addition to two other founding members Chyna and Rick Rude aside from Michaels and Triple H, the group expanded with new additions X-Pac, The New Age Outlaws (Road Dogg and Billy Gunn), and Tori until it disbanded in August 2000. 


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
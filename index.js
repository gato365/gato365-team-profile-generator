


const questions = [
    // 1.
    {
        type: 'list',
        name: 'employeePosition',
        message: '1. What is your role?',
        choices: ['Manager', 'Intern', 'Engineer']
    },
    // 2.
    {
        type: 'input',
        name: 'employeeName',
        message: '2. What is your name?', 
    }
    // 3.
    // 4a.
    {
        type: 'input',
        name: 'officeNumber',
        message: '4. what is office number',
        when: (answers) => answers.employeePosition === 'Manager'
    },
    // 4b.
    {
        type: 'input',
        name: 'githubName',
        message: '4. what is github name?',
        when: (answers) => answers.employeePosition === 'Engineer'
    },
    // 4c.
    {
        type: 'input',
        name: 'schoolName',
        message: '4. what is School name?',
        when: (answers) => answers.employeePosition === 'Intern'
    }
    //5. Team Membership
    {
        type: 'list',
        name: 'teamName',
        message: '5. Which team are you on?',
        choices: ["The Alliance", "Rock 'n' Sock","D-Generation X"]
    }
]

// The Alliance: Manager - Vince McMahon ; Engineer - Stephanie McMahon; Intern - Shane McMahon
// Rock 'n' Sock: Manager - The Rock ; Engineer - Mick Foley; Intern - The Sock
// D-Generation X: Manager - Chyna ; Engineer - Triple H; Intern - X-Pac



function init() {
    inquirer.prompt(questions).then((data) => {
        writeToFile(`${data.repoName}.md`, data);
    });
}
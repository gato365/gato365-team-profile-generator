


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
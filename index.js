


const questions = [
    // 1.
    {
        type: 'list',
        name: 'position',
        message: '1. What is your role?',
        choices: ['Manager', 'Intern', 'Engineer']
    },
    // 2.
    {
        
    }
    // 3.
    // 4a.
    {
        type: 'input',
        name: 'officeNumber',
        message: '4. what is office number',
        when: (answers) => answers.position === 'Manager'
    },
    // 4b.
    {
        type: 'input',
        name: 'githubName',
        message: '4. what is github name?',
        when: (answers) => answers.position === 'Engineer'
    },
    // 4c.
    {
        type: 'input',
        name: 'schoolName',
        message: '4. what is School name?',
        when: (answers) => answers.position === 'Intern'
    },
]




function init() {
    inquirer.prompt(questions).then((data) => {
        writeToFile(`${data.repoName}.md`, data);
    });
}
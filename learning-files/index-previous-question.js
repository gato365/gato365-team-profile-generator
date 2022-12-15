
const inquirer = require('inquirer');
const questions = [{
    name: 'REACT',
    message: 'Do you want to install React App?',
    type: 'confirm',
},
{
    name: 'EXPRESS',
    message: 'Do you want to install Express App?',
    type: 'confirm',
    when: (answers) => answers.REACT
}]


function init() {
    inquirer.prompt(questions).then((data) => {
        console.log("Made it");
        
    });
}

// Function call to initialize app
init();
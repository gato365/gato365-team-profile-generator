



const Input = require("./lib/Input");

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
                    dataManager.officeNumber,
                    dataManager.teamInfo,
                    );


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
                //    const oldhtmlFile = testHTML(currentManager,currentEngineer,currentIntern);
                   const newhtmlFile = generateHTML(currentManager,currentEngineer,currentIntern);

                   writeToFile('index.html', newhtmlFile);

                    
            });

        });
    });
}

// Function call to initialize app
init();


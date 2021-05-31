const fs = require('fs');
const inquirer = require('inquirer');

const team = teamBuild => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'teamChoices',
            message: 'Would you like to add an engineer or intern?',
            choices: ['engineer', 'intern', 'finish building my team']
        }
    ]).then(data => {
        switch (data.teamChoices) {
            case 'engineer':
            employeeQuestions()
            break;

            case 'intern':
            internQuestions()
            break

            case 'finish building my team':
            console.log('team finished!')
            break
        }
    })
}
const managerQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: 'what is your managers name?',
            validate: mngName => {
                if (mngName) {
                    return true;
                } else {
                    console.log('Please enter a name')
                }
            }
        },
        {
            type: 'input',
            name: 'managerId',
            message: 'what is your managers id?',
            validate: mngId => {
                if (mngId) {
                    return true;
                } else {
                    console.log('Please enter a id')
                }
            }
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: 'what is your managers email?',
            validate: mngEmail => {
                if (mngEmail) {
                    return true;
                } else {
                    console.log('Please enter a email')
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Enter manager office number',
            validate: mngPhone => {
                if (mngPhone) {
                    return true;
                } else {
                    console.log('Please enter a email')
                }
            }
        }
    ])    
}

const internQuestions = () => {
    return inquirer.prompt([
        {
        type: 'input',
            name: 'internName',
            message: 'what is your interns name?',
            validate: enpName => {
                if (enpName) {
                    return true;
                } else {
                    console.log('Please enter a name')
                }
            }
        },
        {
            type: 'input',
            name: 'internId',
            message: 'what is your interns id?',
            validate: enpId => {
                if (enpId) {
                    return true;
                } else {
                    console.log('Please enter a id')
                }
            }
        },
        {
            type: 'input',
            name: 'internEmail',
            message: 'what is your interns email?',
            validate: enpEmail => {
                if (enpEmail) {
                    return true;
                } else {
                    console.log('Please enter a email')
                }
            }
        },
        {
            type: 'input',
            name: 'internSchool',
            message: 'What is interns school?',
            validate: intSchool => {
                if (intSchool) {
                    return true;
                } else {
                    console.log('Please enter school')
                }
            }
        }
    ])
}

const employeeQuestions = (

) => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'what is your engineers name?',
            validate: enpName => {
                if (enpName) {
                    return true;
                } else {
                    console.log('Please enter a name')
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'what is your employees id?',
            validate: enpId => {
                if (enpId) {
                    return true;
                } else {
                    console.log('Please enter a id')
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'what is your employees email?',
            validate: enpEmail => {
                if (enpEmail) {
                    return true;
                } else {
                    console.log('Please enter a email')
                }
            }
        },
        // {
        //     type: 'confirm',
        //     name: 'confirmNewEmployee',
        //     message: 'Would you like to enter another employee?',
        //     default: false
        // }
    ])
}

managerQuestions()
.then(team)
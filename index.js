const fs = require('fs');
const inquirer = require('inquirer');

const employeeQuestions = newEmployee => {
    if (!newEmployee.employee) {
        newEmployee.employee = [];
    }
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'what is your employees name?',
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
        {
            type: 'confirm',
            name: 'confirmNewEmployee',
            message: 'Would you like to enter another employee?',
            default: false
        }
    ])
    .than(newEmp => {
        newEmployee.employee.push(newEmp);
        if (newEmp.confirmNewEmployee) {
            return employeeQuestions(newEmployee);
        } else {
            return newEmployee
        }
    })
}
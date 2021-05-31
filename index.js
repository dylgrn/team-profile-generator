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
            html()
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
    ]).then(team)
}

const employeeQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'engineerName',
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
            name: 'engineerId',
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
            name: 'engineerEmail',
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
            type: 'input',
            name: 'engineerGithub',
            message: 'What is your engineers github username?',
            validate: enpGithub => {
                if (enpGithub) {
                    return true;
                } else {
                    console.log('Please enter a email')
                }
            }
        }
    ]).then(team)
}

const html = data => {
    const inHTML = `
    <!DOCTYPE html>
    <html lang="en">
  
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Portfolio Demo</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
  </head>

    <header>
        <nav class="navbar navbar-danger bg-danger mb-5">
            <span class="navbar-brand mb-0 h1 w-100 text-center">Team Profile</span>
        </nav>
    </header>
  <body>  
  <div class="card" style="width: 18rem;">
  <div class="card-header">
    ${data.managerName}
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${data.managerId}</li>
    <li class="list-group-item">${data.managerEmail}</li>
    <li class="list-group-item">${data.officeNumber}</li>
  </ul>
</div>

    </main>
    <footer class="container text-center py-3">
      <h3 class="text-dark">&copy; ${new Date().getFullYear()}</h3>
    </footer>
  </body>
  </html>`;
  fs.writeFile('./dist/index.html', inHTML, err => {
    if (err) {
      reject(err);
      return;
    }
    resolve({
      ok: true,
      message: 'File created!'
    });
    fs.copyFile('./src/style.css', './dist/style.css', err => {
        if (err) {
           reject(err);
           return;
         }
         resolve({
           ok: true,
           message: 'File created!'
         });
       });
    })
}
managerQuestions()
.then(team)
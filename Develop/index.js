const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// array of questions for user
const questions = [
    
    {
        type: 'input',
        name: 'title',
        message: 'What is the project title?',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter the project title!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'what',
        message: 'What is you project about?',
      },
      {
        type: 'input',
        name: 'why',
        message: 'Why did you create this project?',
      },
      {
        type: 'input',
        name: 'how',
        message: 'How did you create this project?',
      }, 
      {
        type: 'checkbox',
        name: 'license',
        message: 'What license did you use? (Check all that apply)',
        choices: ['MIT', 'Apache License 2.0', 'ISC License', 'GNU General Public License v3.0']
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use. Include screenshots as needed.',
      },
      {
        type: 'input',
        name: 'contributions',
        message: 'List your collaborators, if any, with links to their GitHub profiles.',
      },
      
      {
        type: 'input',
        name: 'tests',
        message: 'Provide examples for how to run your application.',
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter your GitHub Username!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: 'Please enter your email',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter your email!');
            return false;
          }
        }
      },
      
      
      



];

// function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
      fs.writeFile(fileName, data, (err) => {
        // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
        if (err) {
          console.log (err);
          
          reject(err);
          // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
          return;
        }
        console.log("wrote file");
  
        // if everything went well, resolve the Promise and send the successful data to the `.then()` method
        resolve({
          ok: true,
          message: 'File created!'
        });
    })
})
};

// function to initialize program
function init() {
    inquirer.prompt(questions).then(data => {
        var markdown = generateMarkdown(data)
        console.log(markdown)
        writeToFile("README.md", markdown)

    })
}

// function call to initialize program
init()

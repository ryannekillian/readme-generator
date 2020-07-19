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
        type: 'input',
        name: 'problem',
        message: 'What problem does your project solve?',
      },
      {
        type: 'checkbox',
        name: 'languages',
        message: 'What did you create this project with? (Check all that apply)',
        choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
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

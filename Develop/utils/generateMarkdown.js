const fs = require('fs')

// function to generate markdown for README
//data {keys: names from questions: values are what the user entered}
function generateMarkdown(data) {
  var ourReadme = '';
  //if(data.title)
  //Invoke function to build title secitons passing in correct text
  //Add returned text to ourReadme
  return `
  # **${data.title}**

  ## **Description**
  * ${data.what}
  * ${data.why}
  * ${data.how}
  
  ## **License:**
  This project is protected under the ${data.license} license.
  
  ## **Table of Contents**
  ### [Installation](#Installation)
  ### [Usage](#Usage) 
  ### [Contributing](#contributing)

  ## **Tests**

  ## Installation
  Please describe the installation process for your project: ${data.installation}

  ## Usage
  Provide instructions and examples for use. Include screenshots as needed.
  ${data.usage}

  ## Contributing
  ${data.contributions}

  ## **Questions**
  * Visit me at [gitHub](http://www.github.com/${data.github})
  * For additional questions, please reach me at: ${data.email}

  `

}

module.exports = generateMarkdown;

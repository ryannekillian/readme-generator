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
  ${data.license}
  
  ## **Table of Contents**
  ### [Installation](#Installation)
  ### [Usage](#Usage) 
  ### [Contributing](#contributing)
  ## **Tests**
  ## **Questions**
  * [gitHub](http://www.github.com/${data.github})
  * For additional questions, please reach me at: ${data.email}

  `

}

module.exports = generateMarkdown;

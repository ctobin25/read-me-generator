
const inquirer = require("inquirer");
const fs = require('fs');



const questions = [
  {
    type: 'input',
    message: 'What is your project title?',
    name: 'title',

  },
  {
    type: 'input',
    message: 'Enter a description of your project.',
    name: 'description',

  },

  {
    type: 'input',
    message: 'Enter your table of contents.',
    name: 'contents',

  },

  {
    type: 'input',
    message: 'Enter the installation instructions.',
    name: 'installation',

  },

  {
    type: 'input',
    message: 'Enter how to use your app.',
    name: 'usage',

  },

];


function writeToFile(fileName, data) {
  console.log(fileName, data)

  fs.writeFile(fileName, organizeReadMe(data), (err) => {
    err ? console.error(err) : console.log('Success!')
  })

}

function organizeReadMe(data) {
  console.log(data)

  return `# ${data.title}

description: ${data.description}

contents: ${data.contents}

installation: ${data.installation}

usage: ${data.usage}
 



`
}




function init() {
  inquirer
    .prompt(questions)
    .then(data => {


      writeToFile("README1.md", data);
    })
    .catch(error => {
      if (error.isTtyError) {

      } else {

      }
    });
}


init();

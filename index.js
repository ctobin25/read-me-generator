// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');


// TODO: Create an array of questions for user input
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


];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
console.log(fileName,data)

fs.writeFile(fileName, organizeReadMe(data), (err) => {
    err ? console.error(err) : console.log('Success!')
})

}

function organizeReadMe (data){
    console.log(data)

return `# ${data.title}

description: ${data.description}

`
}
 


// TODO: Create a function to initialize app
function init() {
    inquirer
  .prompt(questions)
  .then(data => {
    // Use user feedback for... whatever!!

    writeToFile("README1.md", data);
  })
  .catch(error => {
    if(error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else when wrong
    }
  });
}

// Function call to initialize app
init();

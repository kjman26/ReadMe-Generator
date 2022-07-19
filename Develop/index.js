// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const toMarkdown = require("to-markdown");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
// generateMarkdown(inquirer.name
inquirer.prompt([
    
    {
        type: 'input',
        message: 'ADD Project Title and Link to your project',
        name: 'TITLE',
    },
    {
        type: 'input',
        message: 'Describe and add a link to your project',
        name: 'DESCRIPTION',
    },
    {
        type: 'input',
        message: 'How Do You Install Your Project?',
        name: 'INSTALL',
    },
    {
        type: 'input',
        message: 'How Do I Use the Application?',
        name: 'USAGE',
    },  
    {
        type: 'list',
        message: 'What License/Badge Would You Like?',
        name: 'LICENSE',
        choices: ["APM", "CRAN/METACRAN", "NPM", "NONE"],
    },
    {
        type: 'input',
        message: 'Put contributors here',
        name: 'CREDITS',
    },
    {
        type: 'input',
        message: 'What Tests Have Were Run?',
        name: 'TESTS',
    },
    {
        type: 'input',
        message:"add your Github Username",
        name: "GITHUB"
    },
    {
        type: 'input',
        message:"add your Email",
        name: "EMAIL"
    },
])

.then((response) => {
    const md = `#${response.TITLE}
    
    
##Table of Contents:

[Description](#Description)
    
[Installation](#Install)
    
[Usage](#Usage)
    
[Contributions](#Credits)
    
[Tests](#Test)
    
[Questions](#Questions)    
  
    
##Description: 

${response.DESCRIPTION}
     
##Install: 

${response.INSTALL}

##Usage: 

${response.USAGE}
    
##Licenses: 

${response.LICENSE}


##Contributions: 

${response.CREDITS}

##Testing: 

${response.TESTS}    
    
##Questions: 

[Link to Github](https://www.github.com/${response.GITHUB}), [Link to Email](${response.EMAIL})

    `

    const fileName = `${response.TITLE}.md`;
        fs.writeFile(fileName, md, (err) =>err ? console.log(err) : console.log('Success!'))
})

// Function call to initialize app
// init();


// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');
const askUser = require('inquirer')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: "title?"
    },
    {
        type: 'input',
        name: 'description',
        message: "description?"
    },
    {
        type: 'input',
        name: 'install',
        message: "install?"
    },
    {
        type: 'input',
        name: 'usage',
        message: "usage?"
    },
    {
        type: 'input',
        name: 'contribution',
        message: "contribution?"
    },
    {
        type: 'input',
        name: 'test',
        message: "test?"
    },
    {
        type: 'list',
        name: 'license',
        message: "license?",
        choices: ['license ', 'license2', 'license3'],
    },
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, "utf-8", error => {
        if(error){
            console.error("Not generated right");
        }else {
            console.log("Successfully generated");
        }
    })
}

// TODO: Create a function to initialize app
function init() {

    // ask the user questions through inquirer
    askUser.prompt(questions).then((answers) => {
        // pass the answers to generateMarkdown function
        // generates markdown from the data collected
        let mkDown = generateMarkdown(answers);
        // pass the mkdown to writing function
        writeToFile("generatedREADME.md", mkDown);
        
    })
    
}

// Function call to initialize app
init();

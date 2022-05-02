// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require('fs')
const renderTemplate = require('./utils/generateMarkdown')


//These questions should help the user create a professional readme. 

// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests

// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under

// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile



const questions = () => {
  return inquirer.prompt([ 
    {
      type: "input",
      message: "What is the project title?",
      name: "title"
    },

    {
      type: "input",
      message: "What is the project description?",
      name: "description"
    },

    {
      type: "input",
      message: "What are the installation requirements?",
      name: "install"
    },

    {
      type: "input",
      message: "What are the usage instructions? (How can someone else use this?)",
      name: "usage"
    },

    {
      type: "input",
      message: "Who contributed to this project?",
      name: "contribution"
    },

    {
      type: "input",
      message: "What are the requirements for testing this project?",
      name: "test"
    },

    {
      type: "input",
      message: "Which license would you like to add? (MIT, BSD, or GNU. If you are not using a license, press ENTER to skip this question)",
      name: "license",
    },

    { type: "input", 
    message: "What is your GitHub account name?", 
    name: "github"
    },

    {
      type: "input",
      message: "What is your email address?",
      name: "email"
    },
  ]);
};


questions()
 .then((answers) => {
    const template = renderTemplate(answers);

  fs.writeFile('README.md', template, err => {
    if (err) throw new Error(err);
    console.log('Your Readme.md file is ready. Check it out!')
  })
});

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();


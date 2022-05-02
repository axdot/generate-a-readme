// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require('fs')
const renderTemplate = require('./utils/generateMarkdown')

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

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
      message: "Please include a link to this project.",
      name: "urltoproject"
    },

    {
      type: "input",
      message: "If you want to include an image, please type a filler message so you can come back to this section and add it later. (You can either upload it directly to GitHub (creates an absolute path when you drag and drop) or you can add it to your directory and source it using a relative path.",
      name: "image"
    },

    {
      type: "input",
      message: "What are the installation requirements? (Ex: 'npm i') ",
      name: "install"
    },

    {
      type: "input",
      message: "What are the usage instructions? (Ex: 'npm start' or 'node server')",
      name: "usage"
    },

    {
      type: "input",
      message: "Who contributed to this project?",
      name: "contribution"
    },

    {
      type: "input",
      message: "What are the requirements for testing this project? (Ex: 'npm run test'.)",
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

  fs.writeFile('yourreadme/README.md', template, err => {
    if (err) throw new Error(err);
    console.log('Your Readme.md file is ready. Check it out!')
  })
});

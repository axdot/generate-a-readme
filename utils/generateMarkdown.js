// A function that returns the license section of README
const renderLicenseSection = (license) => {
  if (!license) {
    return '';
  }
  return `## License
  This project uses the ${license} license.`
}

// If there is no license, return an empty string
const renderLicenseBadge = (license) => {
  if (!license) {
    return '';
  } 
  if (license === 'MIT') return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  if (license === 'BSD') return '[![License: BSD](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
  if (license === 'GNU') return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
  
}

// A function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = (license) => {
//  return `[License Information](https://opensource.org/licenses/${license})`
if (!license) {
  return '';
} 
if (license === 'MIT') return 'https://opensource.org/licenses/MIT'
if (license === 'BSD') return 'https://opensource.org/licenses/BSD-3-Clause'
if (license === 'GNU') return 'https://www.gnu.org/licenses/gpl-3.0.en.html'
}

// 
const renderTestCommand = (test) => {
  if (!test) {
    return '';
  }
  return `## Test Instructions
  To test, please navigate to the directory and run the ${test} command.`
}

// A function to generate markdown for README
function generateMarkdown(data) {
  return `${renderLicenseBadge(data.license)}

# ${data.title} 
## Description

${data.description}

${data.urltoproject}

## Table of Contents
   
- [Installation](#installation)
- [Usage](#usage-instructions)
- [License](#license)
- [Contributions](#contributions)
- [Test](#test-instructions)
- [Contact](#contact)

## Images

${data.image}

## Installation

${data.install}

## Usage Instructions

${data.usage}

${renderLicenseSection(data.license)}
${renderLicenseLink(data.license)}
${renderLicenseBadge(data.license)}

## Contributions

${data.contribution}

## Test Instructions

${data.test}

## Contact
Questions? Please email me at ${data.email}.
Do you like this project and want to see what else I'm doing? Here is my Github: [${data.github}](https://github.com/${data.github}).
`;
}


module.exports = generateMarkdown
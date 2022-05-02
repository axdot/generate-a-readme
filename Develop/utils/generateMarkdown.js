// TODO: Create a function that returns the license section of README
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
  if (license === 'BSD') return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
  if (license === 'GNU') return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
  
}

// TODO: Create a function that returns the license link
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

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `${renderLicenseBadge(data.license)}
# ${data.title} 
## Description

${data.description}

## Table of Contents
   
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Badges](#badges)
- [Contribute](#contribute)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.install}

## Usage Instructions

${data.usage}

${renderLicenseSection(data.license)}
${renderLicenseLink(data.license)}
${renderLicenseBadge(data.license)}

## Contributions

${data.contribution}

## Test Instructions/How to test this Project

${data.test}

## Questions
Questions? Please email me at ${data.email}.
Do you like this project and want to see what else I'm doing? Here is my Github: [${data.github}](https://github.com/${data.github}).
`;
}



// module.exports = {renderTemplate, renderLicenseSection, renderLicenseLink, renderLicenseBadge}
// module.exports = {generateMarkdown, renderTemplate, renderLicenseSection, renderLicenseLink, renderLicenseBadge}
module.exports = generateMarkdown
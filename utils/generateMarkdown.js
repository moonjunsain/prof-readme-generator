// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license != 'none'){
    // removes space from license
    license = license.split(" ").join("");
    return `license-${license}-blue`;
  }else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license != 'none'){
    return `https://img.shields.io/badge/${renderLicenseBadge(license)}`;
  }else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license != 'none'){
    return `![Github license](${renderLicenseLink(license)})`
  }else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
${renderLicenseSection(data.license)}
  
# ${data.title}

## Description
${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Contribution](#contribution)
* [Test](#test)
* [Contact](#contact)
* [License](#license)

## Installation
${data.install}

## Usage
${data.usage}

## Contribution
${data.contribution}

## Test 
${data.test}

## Questions
- Email: ${data.email}
- Github: https://github.com/${data.username}

## License 
- This app is covered under ${data.license} license.
`;
}

module.exports = generateMarkdown;

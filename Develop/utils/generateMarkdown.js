// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string

// }

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
function renderLicenseBadge(LICENSE) {
  let badge = "";
  if (LICENSE === "APM") {
    badge = `![Alt = badge]('https://img.shields.io/apm/l/APM?style=flat-square')`
  } else if (LICENSE === "CRAN/METACRAN") {
    badge = `![alt = badge]('https://img.shields.io/cran/l/CRAN?color=red')`
  } else if (LICENSE === "NPM") {
    badge = `![alt = badge]('https://img.shields.io/npm/l/NPM?color=BLUE')`
  } else {
    badge = ""
  }
}
// return `${data.TITLE}`
 

module.exports =  renderLicenseBadge()
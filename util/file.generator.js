function renderLicenseBadge(license) {
    if (license === "MIT") {
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    } else if (license ==="Mozilla Public License 2.0") {
      return "[![License: Mozilla Public License 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
    } else if (license === "Apache 2.0") {
      return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    } else { return "" };
  }
  
  function renderLicenseLink(license) {
    if (license === "MIT") {
      return "[MIT](https://opensource.org/licenses/MIT)";
    } else if (license === "Mozilla Public License 2.0")  {
      return "[MPL 2.0](https://opensource.org/licenses/MPL-2.0)";
    }else if (license === "Apache 2.0") {
      return "[Apache](https://opensource.org/licenses/Apache-2.0)";
    } else { return "" };
    
    
  }

  function renderLicenseSection(license) {
    if (license !== undefined) {
      return `
## License
This application is rendered under ${renderLicenseLink(license)}
`;
    } else { return "" };
  }
  
  
  
  
  
  
  

function generateMarkdown(data) { console.log(data);
    return `# ${data.title}
!(http://img.shields.io/badge/license-${renderLicenseBadge(data.license)}-9cf)

    
## Description:
${data.description}

## Installation:
${data.installation}

## Usage:
${data.usage}

${renderLicenseSection(data.license)}

## Contribution:
${data.contribution}

## Testing
${data.test}
## Contact information
- Github: [${data.github}](https://github.com/${data.github})
- Email: [${data.email}](mailto:user@example.com) `;
}

module.exports = generateMarkdown;
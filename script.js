const inquirer = require("inquirer")
const fs = require("fs")
const generateMarkdown = require('./util/file.generator');
console.log("answer the following questions to generate a Readme file.")

const questions = [
    {
        type:"input",
        message:"what is your project title",
        name: "title"
    },
    {
        type:"input",
        message:"How to use readme generator",
        name: "usage"
    },
    {
        type:"input",
        message: "installation instructions",
        name: "installation"
    },
    {
        type:"input",
        message:"how to test the software",
        name:"test"
    },
    {
        type:"input",
        message: "rules and requlations for contribution",
        name: "contribution"
    },
    {
        type:"input", 
        name: "description",
        message: "Provide a description",
        validate: projectDescription => {
            if (projectDescription) {
                return true;
            } else {
                console.log("Enter a project description");
                returnfalse;
            }
        }
        
    },
    {
        type: "list",
        message: "choose the license you'd like to use",
        name: "license",
        choices: ['Mozilla Public License 2.0', 'Apache 2.0', 'MTT', 'None of these'],
        validate: license => {
            if (license) {
                return true;
            } else {
                console.log("choose the license you want to use.");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "contribution",
        message: "how do you wish to contribute to this project?",
        validate: projectContribution => {
            if (projectContribution) {
                return true;
            } else {
                console.log("provide some info on how you can contribute to this project!");
                return false;
            }
        }
    },
    {
         type: "input",
         name: "test",
         message: "how can I test my roject?",
         valide: projectTest => {
             if (projectTest) {
                 return true;
             } else {
                 console.log("explain how this project can be tested.");
                 return false;
             }
         }
    },
    {
        type: "input",
        name: "github",
        message: "enter your github username",
        validate: githubName => {
            if (githubName) {
                return true;
            } else {
                console.log("you did not enter your github username");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "email",
        message: "enter your email if you have any questions",
        validate: yourEmail => {
            if (yourEmail) {
                return true;
            } else {
                console.log("please enter your email");
                return false;
            }
        }
            
    }
]
// .then( response =>{
//     console.log(response.title)
//     console.log(response)
// }
//     )
 function writeInFile(fileName, data) {
        fs.writeFileSync(fileName, data)  
         }

 function initialize() {
         inquirer.prompt(questions)
         .then(responses => {
             writeInFile("Readme.md", generateMarkdown(responses));
         })
     };

     initialize();
 
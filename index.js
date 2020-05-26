let inquirer = require("inquirer");
let fs = require('fs');

inquirer.prompt([
  {
    type: "input",
    name: "userName",
    message: "What is your github username?"
  },

  {
    type: "input",
    name: "title",
    message: "What is the project title?"
  },
  {
    type: "input",
    name: "description",
    message: "Please describe the project:"
  },
  {
      type: "list",
      message: "License Type:",
      name: "license",
      choices: [
        "MIT", 
        "GNU", 
        "ISC", 
        "Apache"
      ]
    },
  {
    type: "input",
    name: "installation",
    message: "Installation Instructions:"
  },
  {
    type: "input",
    name: "installation",
    message: "Installation Instructions:"
  },
  {
    type: "input",
    name: "usage",
    message: "Usage Instructions:"
  },
  {
  type: "input",
  name: "contributors",
  message: "Additional Authors:"
  },
  {
    type: "input",
    name: "tests",
    message: "Tests:"
  },
  {
    type: "input",
    name: "questions",
    message: "Questions:"
    },
  // {
  //   type: "checkbox",
  //   message: "What languages do you know?",
  //   name: "stack",
  //   choices: [
  //     "HTML", 
  //     "CSS", 
  //     "JavaScript", 
  //     "MySQL"
  //   ]
  // },
]).then(function(data) {

  let filename = "README.md";
  let content = `
  # ${data.title}

  ## Description 

  ${data.description}


  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  * [Additional-Badges](#additional-badges)


  ## Installation

  ${data.installation}


  ## Usage 

  ${data.usage}

  ## License

  ![alt text](https://img.shields.io/github/license/${data.userName}/${data.title}.svg "License")


  ## Contributing

  ${data.contributors}

  ## Tests

  ${data.tests}

  ## Questions

  ${data.questions}

  ## Additional-Badges

  ![alt text](https://img.shields.io/github/languages/top/${data.userName}/${data.title} "Top Language Used")



  ---
  © 2020 Jonafi
  `
  ;





  fs.writeFile(filename, content, function(err) {

    if (err) {
      return console.log(err);
    }

  });
});

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
    type: "input",
    name: "license",
    message: "License Type:"
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
  // {
  //   type: "list",
  //   message: "Please select license type:",
  //   name: "license",
  //   choices: [
  //     "MIT",
  //     "ISC",
  //     "GNU"
  //   ]
  // }
]).then(function(data) {

  let filename = "SAMPLE.md";
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
  * [Badges](#badges)


  ## Installation

  Installation text goes here


  ## Usage 

  Provide instructions and examples for use. Include screenshots as needed. 


  ## License

  License Text goes here


  ## Contributing

  contribution text goes here

  ## Tests

  Test text goes here.

  ## Questions

  Question Text goes here.

  ## Badges

  ![alt text](https://img.shields.io/github/languages/top/${data.userName}/${data.title} "Top Language Used")
  ![alt text](https://img.shields.io/github/license/${data.userName}/${data.title}.svg "License")



  ---
  © 2020 Jonafi
  `
  ;





  fs.writeFile(filename, content, function(err) {

    if (err) {
      return console.log(err);
    }

    
    // console.log(data.userName);
    // console.log(data.title);
    // console.log(data.description);
    // console.log(data.license);

  });
});

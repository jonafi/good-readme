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
  
  let content = `![alt text](https://img.shields.io/github/languages/top/${data.userName}/${data.title} "Top Language Used")
  ![alt text](https://img.shields.io/github/license/${data.userName}/${data.title}.svg "License")

  ${data.userName}

  ${data.title}

  ${data.description}
  
 `;


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

var inquirer = require("inquirer");
var fs = require('fs');

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
  {
    type: "list",
    message: "Please select license type:",
    name: "license",
    choices: [
      "MIT",
      "ISC",
      "GNU"
    ]
  }
]).then(function(data) {

  var filename = "README.md";

  fs.writeFile(filename, JSON.stringify(data, null, '\t'), function(err) {

    if (err) {
      return console.log(err);
    }

    console.log("Success!");

  });
});

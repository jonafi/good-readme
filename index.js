const axios = require("axios");
const inquirer = require("inquirer");
const fs = require('fs');

makeReadMe();

async function makeReadMe() {
  try {
    const  user  = await inquirer.prompt([
      {
        type: "input",
        name: "userName",
        message: "What is your github username?"
      },
      {
        type: "input",
        name: "email",
        message: "Email?"
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
    ]);

    const { data } = await axios.get(      
      `https://api.github.com/users/${user.userName}`
    );
   //console.log(data.avatar_url)
      let profilePic = data.avatar_url;
      let filename = "README.md";
      //to do fix weird tabbing issue;
      let content = `
# ${user.title}

## Description 

${user.description}


## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
* [Additional-Badges](#additional-badges)


## Installation

${user.installation}


## Usage 

${user.usage}

## License

![alt text](https://img.shields.io/github/license/${user.userName}/${user.title}.svg "License")


## Contributing

${user.contributors}

## Tests

${user.tests}

## Questions

Please direct any questions to ${user.email}

Here is my profile picture for some reason:

![Profile Picture](${profilePic})


## Additional-Badges

![alt text](https://img.shields.io/github/languages/top/${user.userName}/${user.title} "Top Language Used")



---
© 2020 Jonafi
      `
      ;
      fs.writeFile(filename, content, function(err) {

        if (err) {
          return console.log(err);
        }
    
      });

  } catch (err) {
    console.log(err);
  }
}






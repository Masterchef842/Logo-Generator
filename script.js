const fs = require("fs");
const inquirer = require("inquirer");
const Shape=require("./Shape.js")
let logo;

inquirer.prompt([
    {
        type: 'input',
        message: 'What text would you like included in the Logo? (up to 3 characters)',
        name: 'logoText',
    },
    {
        type: 'input',
        message: 'What color would you like your logo? (enter color name or hex)',
        name: 'logoColor',
    },
    {
        type: 'list',
        message: 'What shape do you want your logo?',
        choices: ["Square","Circle","Triangle"],
        name: 'logoShape',
    },
]).then((response)=>{
    logo=new Shape(response.logoText, response.logoColor, response.logoShape)
    fs.writeFile("./logo.svg",response.renderSVG(),err =>{
        if(err){
            console.error(err);
            return;
        }
    })
})



//invoke shape constructor
//render shape






// GIVEN a command-line application that accepts user input
// WHEN I am prompted for text
// TODO THEN I can enter up to three characters
// WHEN I am prompted for the text color
// TODO THEN I can enter a color keyword (OR a hexadecimal number)
// WHEN I am prompted for a shape
// TODO THEN I am presented with a list of shapes to choose from: circle, triangle, and square
// WHEN I am prompted for the shape's color
// TODO THEN I can enter a color keyword (OR a hexadecimal number)
// WHEN I have entered input for all the prompts
// TODO THEN an SVG file is created named `logo.svg`
// AND the output text "Generated logo.svg" is printed in the command line
// TODO WHEN I open the `logo.svg` file in a browser
// THEN I am shown a 300x200 pixel image that matches the criteria I entered








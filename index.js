//inquirer prompt

const inquirer = require('inquirer');
const { Triangle, Circle, Square } = require('./lib/shapes.js');
const fs = require('fs');

const colorKeywords = [
    'red', 'green', 'blue', 'yellow', 'purple', 'pink', 'orange',
    'black', 'white', 'gray', 'brown', 'cyan', 'magenta', 'olive', 'lime'
];
const hexColorPattern = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;


const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Please enter your text (up to 3 characters)',
        validate: (text) => {
            if (text.length > 3 || text.length === 0) {
                return 'please input 0-3 characters';
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Please enter your text color (keyword or hexadecimal number)',
        validate: (color) => {
            if (!colorKeywords.includes(color) && !hexColorPattern.test(input)) {
                return 'please use color key word or hexadecimal number';
            }
            return true;
        }
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Please select the shape of your logo',
        choices: ['Triangle', 'Square', 'Circle']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Please enter your shape color (keyword or hexadecimal number)',
        validate: (color) => {
            if (!colorKeywords.includes(color) && !hexColorPattern.test(input)) {
                return 'please use color key word or hexadecimal number';
            }
            return true;
        }
    },
];

function writeToFile (fileName, chosenShape, chosenTextColor, userText) {
    let svgString = `
    <svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg">
      <g>
        ${chosenShape}
        <text x="150" y="165" text-anchor="middle" font-size="75" fill="${chosenTextColor}" font-family="Times New Roman">${userText}</text>
      </g>
    </svg>`;
    
    fs.writeFile(fileName, svgString, (err) => {
        err ? console.log(err) : console.log("Generated logo.svg");
      })
}

function init() {
    inquirer
        .prompt(questions)
        .then(res => {

            console.log('Response from promise -> ', res);
            const { shape, textColor, text, shapeColor} = res;

            let chosenShape;
            
            switch (shape) {
                case 'Triangle':
                    chosenShape = new Triangle()
                    break;
                case 'Circle':
                    chosenShape = new Circle()
                    break;
                case 'Square':
                    chosenShape = new Square()
                    break;
                default:
                    break;
            }

    
            chosenShape.setColor(shapeColor)

            userShape = chosenShape.render()

            console.log('user shape -> ', userShape);

            let chosenTextColor = textColor;
            let userText = text;

            writeToFile('userLogo.svg', userShape, chosenTextColor, userText);
        })
        .catch(err => {
            console.log('Error on promise -> ', err);
        })
};

init()

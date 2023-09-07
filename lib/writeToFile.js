
const fs = require('fs');



function writeToFile (fileName, chosenShape, chosenTextColor, userText) {

    let svgString = `
    <svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg">
      <g>
        ${chosenShape}
        <text x="150" y="150" text-anchor="middle" font-size="75" fill="${chosenTextColor}" alignment-baseline="middle" font-family="Times New Roman">${userText}</text>
      </g>
    </svg>`;
    
    fs.writeFile(fileName, svgString, (err) => {
        err ? console.log(err) : console.log("Generated logo.svg");
      })
}


module.exports = writeToFile;
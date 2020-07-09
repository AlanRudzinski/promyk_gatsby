/* eslint-disable no-unused-vars */
const fs = require('fs');
const path = require('path');
const readline = require('readline');

const svgDir = 'src/images/';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const getInfoFromUser = msg => (
  new Promise(resolve => {
    rl.question(msg, ans => {
      resolve(ans.trim());
    });
  })
);

const regex = /[.]+[a-z]+([{]|[,])/gm;
const regex2 = /class="+[a-z]+"/gm;


const changeClasses = async () => {
  const askedFileName = await getInfoFromUser('SVG to fix name(with extension): ');
  const pathToSVG = path.join(__dirname, `../${svgDir}`, askedFileName);
  const fullFileName = path.basename(pathToSVG);
  const fileName = fullFileName.slice(0, fullFileName.indexOf('.'));
  const str = fs.readFileSync(pathToSVG, 'utf-8');
  const newSVGdata = str.replace(regex, m => m[0] + fileName + m.substr(1))
    .replace(regex2, m => m.substr(0, 7) + fileName + m.substr(7));
  fs.writeFileSync(pathToSVG, newSVGdata);
  rl.close();
};

changeClasses();

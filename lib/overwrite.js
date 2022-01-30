const path = require("path");
const fs = require("fs");
const dir = path.join(`${process.cwd()}`, 'swan-config.js');
module.exports = (updatedFile) => {return new Promise ((reject, resolve) => {
    console.log(updatedFile);
    fs.writeFileSync(dir, updatedFile, {encoding:'utf8',flag:'w'})
    resolve();
})}
#!/usr/bin/env node
const runCommand = require("swan-run-command");
const overWrite = require("../../lib/overwrite");
const path = require("path");
const dir = path.join(`${process.cwd()}`, 'swan-config.js');
//making sure that the swan-config.js file exists

console.log("skjadkhfs");
const swanConfig = require(dir);

if(!swanConfig || !swanConfig.modules) {
    console.log("This project does not enclude swan cms in it");
    process.exit(-1);
}

//making sure that the package was not installed before

const packageName = process.argv[2];

if(!packageName) {
    console.log("You should pass the package name into your arguments !");
    process.exit(-1);
}

if (swanConfig.modules.includes(packageName)){
    console.log("This package already exists in swan-config directory");
    process.exit(-1);
}


const installPackageCommand = `npm install ${packageName}`


console.log(`Installing Swan-module : ${packageName} ...`)


const installPackage = async () => {
    try {
        await runCommand(installPackageCommand);
        console.log("ldkj");
        let newFile = {...swanConfig};
        newFile.modules.push(packageName);
        
        newFile = `
            module.exports = ${newFile.toString()}
        ` 
        console.log(newFile);
        
        await overWrite(newFile);
    } catch (error) {
        console.log(error);
        process.exit(-1);
    }
}

installPackage();





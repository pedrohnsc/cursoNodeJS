"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const yargs = require("yargs");
const argv = yargs
    .alias('f', 'file')
    .alias('c', 'content')
    .demandOption('file')
    .demandOption('content')
    .argv;
fs.writeFile(argv.file, argv.content, (error) => {
    if (error)
        throw error;
    console.log(`Arquivo ${argv.file} foi salvo com sucesso`);
});

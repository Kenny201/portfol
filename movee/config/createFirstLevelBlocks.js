"use strict";

const { params, plugins: { fs } } = require("./variables");

let folder, file, fileJade, fileJSON, folderImg;

module.exports = function () {
    for ( let blockName of params.blocksName ) {
        folder     = `./blocks/${blockName}`; // ./blocks/example
        file       = `${folder}/${blockName}`;
        fileJade   = `${file}.pug`;
        fileJSON   = `${file}.json`;
        folderImg  = `./blocks/${blockName}/images/`;
        try {
            fs.mkdirSync(folder);
            fs.mkdirSync(folderImg);
            fs.writeFileSync(fileJade, `.${blockName}`);
            fs.writeFileSync(fileJSON, `{\n  "${blockName}" : {\n\n  }\n}`);
            fs.writeFileSync(fileJade, `.${blockName}`);
        } catch (err) {
            console.log(err);
        }

    }
};
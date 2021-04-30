const fs = require("fs");
const constants = require("../constants");

const BASE_DIR = `${constants.BASE_DIR}/convertSheetToJSON`;
module.exports = function convertSheetToJSON(rl, back) {
    const config = [
        "en", "name", "iLvl", "primeLocation", "fishingHoles", "type", "bait"
    ];

    const sheet = fs.readFileSync(`${BASE_DIR}/sheet.txt`, "utf8");
    const lines = sheet.split("\r\n");

    const json = [];

    for(let i = 0; i < lines.length; i++) {
        const line = lines[i].split("\t");

        const obj = {};
        for(let j = 0; j < line.length; j++) {
            if(config[j]) obj[config[j]] = line[j];
        }
        json.push(obj);
    }

    fs.writeFileSync(`${BASE_DIR}/output.json`, JSON.stringify(json, null, 4));
    done();

    function done() {
        rl.write("\n\n");
        rl.question("Completed, press any key to continue...", () => back());
    }
};
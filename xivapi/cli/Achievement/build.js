const fs = require("fs");

const mapProperties = require('./propertyMap');

// const setupFileWrite = require("../../util/setupFileWrite");

const CACHE_DIR = './xivapi/cache/achievement';

module.exports = function buildAchievements() {
    const output = { keys: [], tasks: [] };
    dive(CACHE_DIR, output);

    return output;
//     const output = categorizeAchievements();
//     Object.keys(output).forEach((category) => {
//         Object.keys(output[category]).forEach((subCategory) => {
//             // Map additional properties on
//             const finalList = output[category][subCategory].map((item) => ({
//                 ...item,
//                 // ...(ADDITIONAL[item.ID] || {})
//             })).sort((a, b) => a.Order - b.Order);
//
//             // Write the file
//             const fileName = setupFileWrite(BASE_OUTPUT_DIR, [category, subCategory]);
//             fs.writeFileSync(fileName, JSON.stringify(finalList, null, 4));
//         });
//     });
//
//     done();
};

const dive = (path, obj) => {
    const dir = fs.readdirSync(path);

    dir.forEach((item) => {
        if(item !== '_error') {
            const newPath = `${path}/${item}`;

            if(fs.lstatSync(newPath).isDirectory()) {
                obj[item] = { keys: [], tasks: [] };
                obj.keys.push(item);
                dive(newPath, obj[item]);
            }
            else {
                try {
                    const apiFile = JSON.parse(fs.readFileSync(newPath));
                    const staticFile = mapProperties(apiFile);
                    obj.tasks.push(staticFile);
                }
                catch(e) {
                    console.error(newPath);
                    console.error(e);
                }
            }
        }
    });
};

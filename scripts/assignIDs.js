const fs = require('fs');

dive("resources/fr", true);

console.log('DONE');

// Recursive dive starting at "path"
function dive(path, notEN) {
    const dir = fs.readdirSync(path);

    dir.forEach((item) => {
        if(item.includes(".json")) assignIDs(`${path}/${item}`, notEN);
        else dive(`${path}/${item}`, notEN);
    });
}

function assignIDs(file, notEN) {
    let shouldWriteFile = false;
    let json = JSON.parse(fs.readFileSync(file, "utf8"));

    // Assign a key to any group that doesn't have one
    if(!json.key && json.groupName) {
        let key = json.groupName;

        if(notEN) {
            const enFile = file.replace(/resources\/[a-z][a-z]/, 'resources/en');
            const enJson = JSON.parse(fs.readFileSync(enFile, "utf8"));
            key = enJson.groupName;
        }

        json = { key: makeKey(key), ...json };
        shouldWriteFile = true;
    }

    // Assign an ID to any task that doesn't have one
    if(json.tasks) {
        for(let i = 0; i < json.tasks.length; i++) {
            const isMissingID = !Object.keys(json.tasks[i]).find((key) => key.toLowerCase() === 'id');
            if(isMissingID) {
                json.tasks[i] = { id: i, ...json.tasks[i] };
                shouldWriteFile = true;
            }
        }
    }

    if(shouldWriteFile) {
        fs.writeFileSync(file, JSON.stringify(json, null, 4));
    }
}

function makeKey(text) {
    return text
        .toLowerCase()
        .replace(/ /g, '-')
        .replace(/[^a-z0-9-]/g, '');
}

// const keyOrder = ["key", "groupName", "headers", "tasks"];
// Looks through all files and sorts the keys of each
// function sortKeys(file) {
//     const json = JSON.parse(fs.readFileSync(file, "utf8"))
//     const newJson = {};
//
//     keyOrder.forEach((key) => {
//         if(json[key]) newJson[key] = json[key];
//     });
//
//     fs.writeFileSync(file, JSON.stringify(newJson, null, 4));
// }
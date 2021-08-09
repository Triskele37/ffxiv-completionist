import fs from "fs";

export const loadJson = function(path, lang) {
    if(!lang) lang = 'en';

    let langPrefix, commonPrefix;
    if(process.env.NODE_ENV === 'production') {
        langPrefix = `${process.resourcesPath}/resources/${lang}`;
        commonPrefix = `${process.resourcesPath}/resources/common`;
    }
    else {
        langPrefix = `./resources/${lang}`;
        commonPrefix = `./resources/common`;
    }

    let langJson;
    try {
        langJson = JSON.parse(fs.readFileSync(`${langPrefix}/${path}.json`).toString());

        if(fs.existsSync(`${commonPrefix}/${path}.json`)) {
            try {
                const { tasks: commonTasks, ...other } = JSON.parse(fs.readFileSync(`${commonPrefix}/${path}.json`).toString());
                langJson = { ...other, ...langJson }; //TODO: wut did I do here

                for(const id in commonTasks) {
                    langJson.tasks[id] = {
                        ...commonTasks[id],
                        ...langJson.tasks[id]
                    };
                }
            }
            catch(e) {
                console.error(`Error in ${commonPrefix}/${path}.json`, e);
            }
        }
    }
    catch(e) {
        console.error(`Error in ${langPrefix}/${path}.json`, e);
    }

    return langJson;
}

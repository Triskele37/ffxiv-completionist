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

    const langJson = JSON.parse(fs.readFileSync(`${langPrefix}/${path}.json`).toString());

    if(fs.existsSync(`${commonPrefix}/${path}.json`)) {
        const commonJson = JSON.parse(fs.readFileSync(`${commonPrefix}/${path}.json`).toString());

        if(commonJson.tasks) {
            for(let i = 0; i < commonJson.tasks.length; i++) {
                for(let j = 0; j < langJson.tasks.length; j++) {
                    if(langJson.tasks[j].id === commonJson.tasks[i].id) {
                        langJson.tasks[j] = {
                            ...langJson.tasks[j],
                            ...commonJson.tasks[i]
                        };
                    }
                }
            }
        }
    }

    return langJson;
}

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

    let langJson = JSON.parse(fs.readFileSync(`${langPrefix}/${path}.json`).toString());

    if(fs.existsSync(`${commonPrefix}/${path}.json`)) {
        const { tasks: commonTasks, ...other } = JSON.parse(fs.readFileSync(`${commonPrefix}/${path}.json`).toString());
        langJson = { ...other, ...langJson };

        if(commonTasks) {
            for(let i = 0; i < commonTasks.length; i++) {
                for(let j = 0; j < langJson.tasks.length; j++) {
                    if(langJson.tasks[j].id === commonTasks[i].id) {
                        langJson.tasks[j] = {
                            ...langJson.tasks[j],
                            ...commonTasks[i]
                        };
                    }
                }
            }
        }
    }

    return langJson;
}

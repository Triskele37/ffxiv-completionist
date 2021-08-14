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
        langJson = JSON.parse(fs.readFileSync(`${langPrefix}/${path}.json`));

        if(fs.existsSync(`${commonPrefix}/${path}.json`)) {
            try {
                const commonFile = fs.readFileSync(`${commonPrefix}/${path}.json`);
                const { tasks: commonTasks, ...commonProps } = JSON.parse(commonFile);

                // Map group-level common props
                langJson = { ...commonProps, ...langJson }; //TODO: wut did I do here

                // Map task-level common props
                for(const id in commonTasks) {
                    langJson.tasks[id] = {
                        id: parseInt(id.substr(1)),
                        ...commonTasks[id],
                        ...langJson.tasks[id]
                    };
                }

                // Map ids
                for(const id in langJson.tasks) {
                    // Remove the leading "x" and cast to int
                    langJson.tasks[id].id = parseInt(id.substr(1));
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

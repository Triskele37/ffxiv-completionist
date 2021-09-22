// import * as fs from 'fs';
const fs = window.require('fs');

type Lang = 'en' | 'fr';
export function loadJson(path: string, lang: Lang) {
    if(!lang) lang = 'en';

    let langPrefix: string;
    let commonPrefix: string;
    if(process.env.NODE_ENV === 'production') {
        langPrefix = `${process.resourcesPath}/resources/${lang}`;
        commonPrefix = `${process.resourcesPath}/resources/common`;
    }
    else {
        langPrefix = `./resources/${lang}`;
        commonPrefix = `./resources/common`;
    }

    let langJson: any;
    try {
        langJson = JSON.parse(fs.readFileSync(`${langPrefix}/${path}.json`).toString());

        if(fs.existsSync(`${commonPrefix}/${path}.json`)) {
            try {
                const commonFile = fs.readFileSync(`${commonPrefix}/${path}.json`);
                const { tasks: commonTasks, ...commonProps } = JSON.parse(commonFile.toString());

                // Map group-level common props
                langJson = { ...commonProps, ...langJson }; //TODO: wut did I do here

                // Map task-level common props
                for(const id in commonTasks) {
                    if(commonTasks.hasOwnProperty(id)) {
                        langJson.tasks[id] = {
                            id: parseInt(id.substr(1), 10),
                            ...commonTasks[id],
                            ...langJson.tasks[id]
                        };
                    }
                }

                // Map ids
                for(const id in langJson.tasks) {
                    if(langJson.tasks.hasOwnProperty(id)) {
                        // Remove the leading "x" and cast to int
                        langJson.tasks[id].id = parseInt(id.substr(1), 10);

                        // Removes tasks with 'hidden' so placeholders can be in resources
                        if(langJson.tasks[id].hidden) {
                            delete langJson.tasks[id];
                        }
                    }
                }
            } catch(e) {
                console.error(`Error in ${commonPrefix}/${path}.json`, e);
            }
        }
    } catch(e) {
        console.error(`Error in ${langPrefix}/${path}.json`, e);
    }

    return langJson;
}

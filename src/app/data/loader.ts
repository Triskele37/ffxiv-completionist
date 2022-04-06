import { Lang } from '@constant';
import { ElectronService } from '@service/electron/electron.service';

export function loadJson(svcElectron: ElectronService, path: string, lang: Lang) {
    const [langPrefix, commonPrefix] = getPrefixes(lang || Lang.EN);

    let finalJson: any;
    try {
        const common = svcElectron.ipcRenderer.sendSync('load-json', `${commonPrefix}/${path}.json`);
        const locale = svcElectron.ipcRenderer.sendSync('load-json', `${langPrefix}/${path}.json`);

        try {
            // Destructure headers and tasks so they aren't mapped
            const { headers: cHeaders, tasks: cTasks, ...cProps } = common;
            const { headers: lHeaders, tasks: lTasks, ...lProps } = locale;

            // Map group-level common props
            finalJson = {
                ...cProps, // map common props onto final json
                ...lProps // allow locale to override common
            };

            finalJson.headers = mapHeaders(common, locale);
            finalJson.tasks = mapTasks(common, locale);
        }
        catch(e) {
            console.error(`Error in ${commonPrefix}/${path}.json`, e);
        }
    }
    catch(e) {
        console.error(`Error in ${langPrefix}/${path}.json`, e);
    }

    return finalJson;
}

// Get the path prefixes based on environment
function getPrefixes(lang: Lang) {
    if(process.env.NODE_ENV === 'production') {
        return [
            `${process.resourcesPath}/resources/${lang}`,
            `${process.resourcesPath}/resources/common`
        ];
    }
    else {
        return [
            `./resources/${lang}`,
            `./resources/common`
        ];
    }
}

function mapHeaders(common, locale) {
    if(!common.headers && !locale.headers) return null;
    const headers: any = {};

    Object.keys(locale.headers).forEach((key) => {
        headers[key] = { key, header: locale.headers[key] };

        if(common.headers?.[key]) {
            headers[key] = {
                ...headers[key],
                ...common.headers[key]
            };
        }

        applyStaticHeaderProps(headers, key);
    });

    return headers;
}

function applyStaticHeaderProps(headers, key) {
    switch(key) {
        case 'category':
            headers[key].filterable = headers[key].filterable ?? true;
            // headers[key].width = headers[key].width ?? 250;
            break;
        case 'patch':
            headers[key].filterable = headers[key].filterable ?? true;
            headers[key].width = headers[key].width ?? 100;
            break;
        case 'zone':
            headers[key].filterable = headers[key].filterable ?? true;
            break;
        case 'level':
        case 'iLevel':
        case 'iLvl':
            headers[key].width = headers[key].width ?? 75;
            break;
    }
}

function mapTasks(common, locale) {
    const tasks: any = {};

    // Map task-level common props
    for(const id in common.tasks) {
        if(common.tasks.hasOwnProperty(id)) {
            tasks[id] = {
                id: parseInt(id.substr(1), 10),
                ...common.tasks[id],
                ...locale.tasks[id]
            };

            // Merge props found on both into an array
            Object.keys(common.tasks[id]).forEach((key) => {
                if(common.tasks[id][key] && locale.tasks[id][key]) {
                    tasks[id][key] = [].concat(common.tasks[id][key], locale.tasks[id][key]);
                }
            });
        }
    }

    // Map ids
    for(const id in tasks) {
        if(tasks.hasOwnProperty(id)) {
            // Remove the leading "x" and cast to int
            tasks[id].id = parseInt(id.substr(1), 10);

            // Removes tasks with 'hidden' so placeholders can be in resources
            if(tasks[id].hidden) delete tasks[id];
        }
    }

    return tasks;
}

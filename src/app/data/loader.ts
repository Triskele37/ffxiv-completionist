import { TranslateService } from '@ngx-translate/core';

import { ElectronService, IPC_EVENT } from '@service/electron/electron.service';

export const refs: {
    svcElectron: ElectronService;
    translate: TranslateService;
} = {
    svcElectron: null,
    translate: null,
};

export function loadJson(path: string) {
    const prefix = getPrefix();

    let finalJson: any;
    try {
        const fullPath = [prefix, path].filter((s) => s).join('/');
        const json = refs.svcElectron.sendSync(IPC_EVENT.LOAD_JSON, fullPath);

        try {
            finalJson = {
                ...json,
                headers: mapHeaders(json),
                tasks: mapTasks(json),
            };
        }
        catch(e) {
            console.error(`Error in ${prefix}/${path}.json`, e);
        }
    }
    catch(e) {
        console.error(`Error in ${prefix}/${path}.json`, e);
    }

    return finalJson;
}

// Get the path prefix based on environment
function getPrefix() {
    if(process.env.NODE_ENV === 'production' && process.resourcesPath) {
        return `${process.resourcesPath}/resources`;
    }
    else {
        return './resources';
    }
}

function mapHeaders(json) {
    if(!json.headers) return null;
    return Object.keys(json.headers)
        .map((key) => ({
            key,
            ...json.headers[key],
            ...staticHeaderProps(key, json.headers[key])
        }));
}

function staticHeaderProps(key, column) {
    switch(key) {
        case 'category':
            return {
                filterable: column.filterable ?? true,
                width: column.width ?? 250,
            };
        case 'patch':
            return {
                filterable: column.filterable ?? true,
                width: column.width ?? 100,
            };
        case 'zone':
            return {
                filterable: column.filterable ?? true,
            };
        case 'level':
        case 'iLevel':
        case 'iLvl':
            return {
                width: column.width ?? 75,
            };
        default: return {};
    }
}

function mapTasks(json) {
    const tasks: any = {};

    // Map task-level common props
    for(const id in json.tasks) {
        if(json.tasks.hasOwnProperty(id)) {
            tasks[id] = {
                id: parseInt(id.substr(1), 10),
                ...json.tasks[id]
            };
        }
    }

    // Map ids
    for(const id in tasks) {
        if(tasks.hasOwnProperty(id)) {
            // Removes tasks with 'hidden' so placeholders can be in resources
            if(tasks[id].hidden) {
                delete tasks[id];
            }
            else {
                // Remove the leading "x" and cast to int
                tasks[id].id = parseInt(id.substr(1), 10);

                json.common?.forEach((field) => {
                    tasks[id][field] = replaceCommonStrings(tasks[id][field]);
                });
            }
        }
    }

    return tasks;
}

function replaceCommonStrings(value: string | string[]): string | string[] {
    if(!value) return value;

    if(Array.isArray(value)) return value.map((v) => getCommonTranslation(v));
    else return getCommonTranslation(value);
}

function getCommonTranslation(value: string): string {
    const keys = value.match(/[A-Z0-9_]+.[A-Z0-9_.]+/g);
    if(!keys) return value;

    return keys.reduce((acc, key) => {
        // Attempt to get a common translation
        const fullKey = `DATA.${key}`;
        const common = refs.translate.instant(fullKey);

        if(common === fullKey) return acc; // Not found
        else return acc.replace(key, common); // Found
    }, value);
}

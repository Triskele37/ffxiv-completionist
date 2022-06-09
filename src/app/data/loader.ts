import { TranslateService } from '@ngx-translate/core';

import { Lang } from '@constant';
import { DataGroup } from '@domain/DataGroup';
import { ElectronService } from '@service/electron/electron.service';

export const refs: {
    svcElectron: ElectronService;
    translate: TranslateService;
} = {
    svcElectron: null,
    translate: null,
};

export function loadJson(path: string) {
    const { lang } = DataGroup;
    const [langPrefix, commonPrefix] = getPrefixes(lang || Lang.EN);

    let finalJson: any;
    try {
        const common = refs.svcElectron.ipcRenderer.sendSync('load-json', `${commonPrefix}/${path}.json`);
        const locale = refs.svcElectron.ipcRenderer.sendSync('load-json', `${langPrefix}/${path}.json`);

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
            // Removes tasks with 'hidden' so placeholders can be in resources
            if(tasks[id].hidden) {
                delete tasks[id];
            }
            else {
                // Remove the leading "x" and cast to int
                tasks[id].id = parseInt(id.substr(1), 10);

                common.common?.forEach((field) => {
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

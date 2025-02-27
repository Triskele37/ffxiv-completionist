import { TranslateService } from '@ngx-translate/core';

import { ElectronService, IPC_EVENT } from '@service/electron/electron.service';

export const refs: {
    svcElectron: ElectronService;
    translate: TranslateService;
} = {
    svcElectron: null,
    translate: null,
};

export type JSON = Record<string, any>;
export type JSON_GROUP = JSON & {
    headers?: JSON;
    tasks?: Record<string, JSON & {
        hidden?: boolean;
    }>;
};

const COMMON_KEY_PREFIX = '@';

let logTimeout;
let start, end;
let offset = 0;

/**
 * Load the group json file at the given path, applying necessary
 * pre-class transformations
 */
export function loadJson(path: string) {
    const resourcesRoot = getResourcesRoot();
    if(!start) start = Date.now();

    let finalJson: JSON_GROUP = {};
    try {
        const fullPath = [resourcesRoot, path].filter((s) => s).join('/');
        let ss = Date.now();
        const json = refs.svcElectron.sendSync(IPC_EVENT.LOAD_JSON, fullPath);
        offset += Date.now() - ss;

        try {
            finalJson = {
                ...json,
                headers: mapHeaders(json),
                tasks: mapTasks(json),
            };
        }
        catch(e) {
            console.error(`Error in ${resourcesRoot}/${path}.json`, e);
        }
    }
    catch(e) {
        console.error(`Error in ${resourcesRoot}/${path}.json`, e);
    }

    end = Date.now();
    if(logTimeout) clearTimeout(logTimeout);
    logTimeout = setTimeout(() => {
        console.log('Total millis to load:', end - start);
        console.log('Excluding app layer access:', (end - start) - offset);
    }, 5000);

    return finalJson;
}

/**
 * Get the path prefix based on environment
 */
function getResourcesRoot() {
    if(process.env.NODE_ENV === 'production' && process.resourcesPath) {
        return `${process.resourcesPath}/resources`;
    }
    else {
        return './resources';
    }
}

/**
 * Transform the raw header json to the initial app json
 */
function mapHeaders(json: JSON_GROUP) {
    if(!json.headers) return null;
    return Object.keys(json.headers)
        .map((key) => ({
            key,
            ...json.headers[key],
            ...defaultHeaderProps(key, json.headers[key])
        }));
}

/**
 * Apply default header properties
 * - e.g. 'patch' has a default width of 100px
 */
function defaultHeaderProps(key: string, column: JSON) {
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

/**
 * Transform the raw task json to the initial app json (pre-class)
 */
function mapTasks(json: JSON_GROUP) {
    const tasks: JSON = {};
    if(!json.tasks) return tasks;

    for(const [id, rawTask] of Object.entries(json.tasks)) {
        // Don't add 'hidden' tasks so placeholders can be in resources
        if(rawTask.hidden) continue;

        tasks[id] = {
            // Remove the leading "x" and cast to int
            id: parseInt(id.substring(1), 10),
            ...rawTask
        };

        // Replace common keys (ZONE.ULDAH) with translations
        translateCommonKeys(tasks[id]);
    }

    return tasks;
}

function shouldTranslate(value: any) {
    return typeof value === 'string' && value.startsWith(COMMON_KEY_PREFIX);
}

/**
 * Iterate fields on an object, looking for ones that need i18n transformation
 */
function translateCommonKeys(obj: JSON) {
    for(const field in obj) {
        const value = obj[field];

        if(Array.isArray(value)) {
            const len = value.length;
            for(let i = 0; i < len; i++) {
                const item = value[i];

                if(shouldTranslate(item)) {
                    value[i] = getCommonTranslation(item);
                }
            }
        }
        else if(shouldTranslate(value)) {
            obj[field] = getCommonTranslation(value);
        }
    }
}

/**
 * Transform i18n keys at any place in a string
 * @param value - should already have returned true when passed to `shouldTranslate`
 */
function getCommonTranslation(value: string): string {
    const keys = value.match(/[A-Z0-9_]+.[A-Z0-9_.]+/g);
    if(!keys) return value;

    let updatedValue = value.substring(1);

    for(const key of keys) {
        // Attempt to get a common translation
        const fullKey = `DATA.${key}`;
        const common = refs.translate.instant(fullKey);

        if(common !== fullKey) {
            updatedValue = updatedValue.replace(key, common);
        }
    }

    return updatedValue;
}

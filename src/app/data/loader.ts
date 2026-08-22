import { TranslateService } from '@ngx-translate/core';

import { ElectronService } from '@service/electron/electron.service'
import { IPC_EVENT } from '@service/electron/IPC_EVENT';
import { Globals } from '@constant/Global';
import { JSONResource } from '@model/JSONResource';

export const refs: {
    svcElectron: ElectronService | null;
    translate: TranslateService | null;
} = {
    svcElectron: null,
    translate: null,
};

export type JSON_GROUP = JSONResource & {
    columns?: JSONResource;
    tasks?: Record<string, JSONResource & {
        hidden?: boolean;
    }>;
};

const COMMON_KEY_PREFIX = '@';
const COMMON_KEY_REGEX = /[A-Z]+[A-Z0-9_]+\.[A-Z0-9_.]+/g;
const NUMBER_REGEX = /\b\d+[,.]+[\d.,]+\b/g;

/**
 * Load the group json file at the given path, applying necessary
 * pre-class transformations
 */
export function loadJson(key: string) {
    let finalJson: JSON_GROUP = {};

    try {
        const json = refs.svcElectron?.sendSync(IPC_EVENT.LOAD_JSON, key);

        try {
            translateCommonKeys(json);
            finalJson = {
                ...json,
                columns: mapColumns(json),
                tasks: mapTasks(json),
            };
        }
        catch(e) {
            console.error(`Error processing group: ${key}`, e);
        }
    }
    catch(e) {
        console.error(`Error loading group: ${key}`, e);
    }

    return finalJson;
}

/**
 * Transform the raw column json to the initial app json
 */
function mapColumns(json: JSON_GROUP) {
    if(!json.columns) return null;

    return Object.keys(json.columns).map((key) => {
        const column = {
            key,
            ...json.columns![key],
            ...defaultColumnProps(key, json.columns![key])
        };

        translateCommonKeys(column);

        return column;
    });
}

/**
 * Apply default column properties
 * - e.g. 'patch' has a default width of 100px
 */
function defaultColumnProps(key: string, column: JSONResource) {
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
    const tasks: JSONResource = {};
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
function translateCommonKeys(obj: JSONResource) {
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
    let updatedValue = value.substring(1);
    let commonKeys: string[] | null;

    // Loop through the updated value (allows for nested common values)
    while(commonKeys = updatedValue.match(COMMON_KEY_REGEX)) {
        const replacements: Record<string, string> = {};

        for(const commonKey of commonKeys) {
            if(!replacements[commonKey]) {
                // Attempt to get translation
                const fullCommonKey = `GAME.${commonKey}`;
                const commonTranslation = refs.translate?.instant(fullCommonKey);

                // No translation if these two are equal
                if(commonTranslation !== fullCommonKey) {
                    replacements[commonKey] = commonTranslation;
                }
            }
        }

        // Bail if an entry somehow gets this far without replacements
        if(Object.keys(replacements).length === 0) {
            console.error('Missing i18n key:', commonKeys, updatedValue);
            break;
        }

        // Do the actual replacement transformation
        for (const [commonKey, translation] of Object.entries(replacements)) {
            updatedValue = updatedValue.replace(new RegExp(commonKey, 'g'), translation);
        }
    }

    // Special currency handling
    if(Globals.config?.lang === 'fr') {
        updatedValue = updatedValue.replace(NUMBER_REGEX, (n) =>
            n.replace(/[.,]/g, (punct) => punct === '.' ? ',' : '.')
        );
    }

    return updatedValue;
}

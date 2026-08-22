import path from 'path';

import { loadJson } from './loadJson.js';

const thisPath = path.join('scripts', 'i18nHelper');

let verified;

export function loadVerified(lang) {
    verified = loadJson(path.join(thisPath, `verified_${lang}.json`));
}

export function getVerifiedKeys(keyPath, lang) {
    const keys = keyPath
        .replace(/\\/g, '.') // replace path separators with .
        .replace(/\//g, '.') // replace path separators with .
        .replace('._index', '') // remove index layers
        .replace('.tasks', '') // remove task layers
        .replace(/\.json/g, '') // omit file type
        .split('.');

    // Remove lang suffix from resource properties
    if(keys[keys.length - 1].endsWith(`_${lang}`)) {
        keys[keys.length - 1] = keys[keys.length - 1].split('_')[0];
    }

    // Merge final resource keys into their task id
    if(keys[keys.length - 2].startsWith('x')) {
        const taskField = keys.pop();
        keys[keys.length - 1] = keys[keys.length - 1] + '.' + taskField;
    }

    return keys;
}

export function getVerified(keys) {
    let obj = verified;

    // const log = keys.join('.') === 'resources.character.gold-saucer.triple-triad-card-list.page-1.groupName';
    const log = false;

    for(let i = 0; i < keys.length; i++) {
        const k = keys[i];

        if(obj === undefined) {
            if(log) console.log('undefined return');
            return 0;
        }

        // Look for pattern matching the rest of the keys path
        for(let ok in obj) {
            if(!ok.startsWith('@')) continue;

            // Construct the remaining key path
            const rk = keys.slice(i).join('.');

            const regex = new RegExp(ok.substring(1));
            if(!regex.test(rk)) {
                if(log) console.log('no match', rk, ok.substring(1))
                continue;
            }

            if(log) console.log('regex match');
            return 2;
        }

        // Check for exact match if no pattern did
        if(Object.hasOwn(obj, k)) {
            obj = obj[k];
            if(log) console.log('exact match next', k);
        }
        else return 0;
    }

    if(log) console.log('final value', obj);
    return obj !== undefined ? 1 : 0;
}

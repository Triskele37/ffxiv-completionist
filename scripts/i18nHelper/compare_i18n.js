import fs from 'fs';
import path from 'path';

import { loadJson } from './loadJson.js';
import { getVerified } from './loadVerified.js';
import { logOutput } from './output.js';

const i18nPath = path.join('src', 'assets', 'i18n');

export function compare_i18n(lang1, lang2) {
    diveDirectory(i18nPath, lang1, lang2);
}

function diveDirectory(dirPath, lang1, lang2) {
    const entities = fs.readdirSync(dirPath);
    for(const entity of entities) {
        const entityFullPath = path.join(dirPath, entity);

        if(fs.lstatSync(entityFullPath).isDirectory()) {
            diveDirectory(entityFullPath, lang1, lang2);
        }
        else if(entity === `${lang1}.json`) {
            const lang1Path = path.join(dirPath, lang1 + '.json');
            const i18n_lang1 = loadJson(lang1Path);

            const lang2Path = path.join(dirPath, lang2 + '.json');
            if(fs.existsSync(lang2Path)) {
                const i18n_lang2 = loadJson(lang2Path);
                dive(i18n_lang1, i18n_lang2, '');
            }
            else {
                console.error(`${lang2Path} does not exist`);
            }
        }
    }
}

function dive(objA, objB, fullKeyPath) {
    const aIsObject = typeof objA === 'object' && objA !== null;
    const bIsObject = typeof objB === 'object' && objB !== null;

    // Value branch
    if(!aIsObject || !bIsObject) {
        if(objA === objB && !getVerified(fullKeyPath.split('.'))) {
            logOutput('UNTRANSLATED', fullKeyPath);
        }

        return;
    }

    // verify values and key parity
    for(let aKey in objA) {
        const newFullKeyPath = fullKeyPath ? `${fullKeyPath}.${aKey}` : aKey;

        if(!Object.hasOwn(objB, aKey)) {
            logOutput('MISSING_DATA_KEY', newFullKeyPath);
            continue;
        }

        dive(objA[aKey], objB[aKey], newFullKeyPath);
    }

    // verify b doesn't have keys a doesn't
    for(let bKey in objB) {
        const newFullKeyPath = fullKeyPath ? `${fullKeyPath}.${bKey}` : bKey;

        if(!Object.hasOwn(objA, bKey)) {
            logOutput('EXTRA_DATA_KEY', newFullKeyPath);
        }
    }
}

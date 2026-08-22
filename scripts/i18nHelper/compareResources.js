import fs from 'fs';
import path from 'path';

import { loadJson } from './loadJson.js';
import { getVerified, getVerifiedKeys } from './loadVerified.js';
import { logOutput } from './output.js';

const resourcesPath = path.join('resources');

export function compareResources(lang1, lang2) {
    diveDirectories(resourcesPath, lang1, lang2);
}

function diveDirectories(entityPath, lang1, lang2) {
    if(fs.lstatSync(entityPath).isDirectory()) {
        fs.readdirSync(entityPath).forEach((entity) => {
            const newEntityPath = path.join(entityPath, entity);
            diveDirectories(newEntityPath, lang1, lang2);
        });
    }
    else {
        compareFile(entityPath, lang1, lang2);
    }
}

function compareFile(filePath, lang1, lang2) {
    const file = loadJson(filePath);
    diveFile(file, lang1, lang2, filePath);
}

function diveFile(obj, lang1, lang2, fullKeyPath) {
    if(typeof obj !== 'object' || obj === null) return;

    for(let key in obj) {
        const newFullKeyPath = fullKeyPath ? `${fullKeyPath}.${key}` : key;

        // Derive the opposite lang key from the current
        let otherKey;
        if(key.endsWith(`_${lang1}`)) otherKey = makeLangBKey(key, lang1, lang2);
        else if(key.endsWith(`_${lang2}`)) otherKey = makeLangBKey(key, lang2, lang1);
        else continue; // not a localized key

        const verifiedKeys = getVerifiedKeys(newFullKeyPath, lang2);

        if(!Object.hasOwn(obj, otherKey)) {
            logOutput('MISSING_DATA_KEY', verifiedKeys.join('.'));
            continue;
        }

        // Don't add double logs for lang1
        if(key.endsWith(`_${lang1}`)) continue;

        if(obj[key] === obj[otherKey]) {
            if(getVerified(verifiedKeys)) continue;
            logOutput('UNTRANSLATED', verifiedKeys.join('.'));
        }
        else if(getVerified(verifiedKeys) === 1) {
            logOutput('EXTRA_VERIFIED_KEY', verifiedKeys.join('.'));
        }
    }

    // Recurse into child objects
    for(let key in obj) {
        if(typeof obj[key] === 'object' && obj[key] !== null) {
            const newFullKeyPath = fullKeyPath ? `${fullKeyPath}.${key}` : key;
            diveFile(obj[key], lang1, lang2, newFullKeyPath);
        }
    }
}

function makeLangBKey(langAKey, langA, langB) {
    return `${langAKey.slice(0, -(langA.length + 1))}_${langB}`;
}

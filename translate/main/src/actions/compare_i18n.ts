import { IpcMainEvent } from 'electron';
import fs from 'fs';
import path from 'path';

import type { Issue } from './types';
import { loadJson } from './loadJson.js';

export const I18N_PATH = path.join('..', 'desktop', 'renderer', 'assets', 'i18n');

export function compare_i18n(
    event: IpcMainEvent,
    lang1: string,
    lang2: string
): void {
    const issues: Issue[] = [];

    diveDirectory(I18N_PATH, lang1, lang2, issues);

    event.returnValue = issues;
}

function diveDirectory(
    dirPath: string,
    lang1: string,
    lang2: string,
    issues: Issue[]
): void {
    const entities = fs.readdirSync(dirPath);
    for(const entity of entities) {
        const entityFullPath = path.join(dirPath, entity);

        if(fs.lstatSync(entityFullPath).isDirectory()) {
            diveDirectory(entityFullPath, lang1, lang2, issues);
        }
        else if(entity === `${lang1}.json`) {
            const lang1Path = path.join(dirPath, lang1 + '.json');
            const i18n_lang1 = loadJson(lang1Path);

            const lang2Path = path.join(dirPath, lang2 + '.json');
            if(fs.existsSync(lang2Path)) {
                const i18n_lang2 = loadJson(lang2Path);
                dive(i18n_lang1, i18n_lang2, dirPath.split(path.sep).pop() ?? '', issues);
            }
            else {
                console.error(`${lang2Path} does not exist`);
            }
        }
    }
}

function dive(
    objA: any,
    objB: any,
    fullKeyPath: string,
    issues: Issue[]
): void {
    const aIsObject = typeof objA === 'object' && objA !== null;
    const bIsObject = typeof objB === 'object' && objB !== null;

    // Value branch
    if(!aIsObject || !bIsObject) {
        if(objA === objB) {
            issues.push({
                key: fullKeyPath,
                type: 'UNTRANSLATED',
                source: objA,
                target: objB,
            });
        }

        return;
    }

    // verify values and key parity
    for(let aKey in objA) {
        const newFullKeyPath = fullKeyPath ? `${fullKeyPath}.${aKey}` : aKey;

        if(!Object.hasOwn(objB, aKey)) {
            issues.push({
                key: newFullKeyPath,
                type: 'MISSING_DATA_KEY',
                source: objA[aKey],
                target: undefined,
            });
            continue;
        }

        dive(objA[aKey], objB[aKey], newFullKeyPath, issues);
    }

    // verify b doesn't have keys a doesn't
    for(let bKey in objB) {
        const newFullKeyPath = fullKeyPath ? `${fullKeyPath}.${bKey}` : bKey;

        if(!Object.hasOwn(objA, bKey)) {
            issues.push({
                key: newFullKeyPath,
                type: 'EXTRA_DATA_KEY',
                source: undefined,
                target: objB[bKey],
            });
        }
    }
}

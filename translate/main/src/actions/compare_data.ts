import { IpcMainEvent } from 'electron';
import fs from 'fs';
import path from 'path';

import { loadJson } from './loadJson.js';
import { Issue } from './types';

export const RESOURCES_PATH = path.join('..', 'resources');

export function compareResources(
    event: IpcMainEvent,
    lang1: string,
    lang2: string,
): void {
    const issues: Issue[] = [];

    diveDirectories(RESOURCES_PATH, lang1, lang2, issues);

    for(const issue of issues) {
        issue.key = issue.key
            .replaceAll(`..${path.sep}`, '')
            .replaceAll(path.sep, '.');
    }

    event.returnValue = issues;
}

function diveDirectories(
    entityPath: string,
    lang1: string,
    lang2: string,
    issues: Issue[],
): void {
    if(fs.lstatSync(entityPath).isDirectory()) {
        fs.readdirSync(entityPath).forEach((entity) => {
            const newEntityPath = path.join(entityPath, entity);
            diveDirectories(newEntityPath, lang1, lang2, issues);
        });
    }
    else {
        compareFile(entityPath, lang1, lang2, issues);
    }
}

function compareFile(
    filePath: string,
    lang1: string,
    lang2: string,
    issues: Issue[],
): void {
    const file = loadJson(filePath);
    diveFile(file, lang1, lang2, filePath, issues);
}

function diveFile(
    obj: any,
    lang1: string,
    lang2: string,
    fullKeyPath: string,
    issues: Issue[],
): void {
    if(typeof obj !== 'object' || obj === null) return;

    for(let key in obj) {
        const newFullKeyPath = fullKeyPath ? `${fullKeyPath}.${key}` : key;

        // Derive the opposite lang key from the current
        let otherKey;
        if(key.endsWith(`_${lang1}`)) otherKey = makeLangBKey(key, lang1, lang2);
        else if(key.endsWith(`_${lang2}`)) otherKey = makeLangBKey(key, lang2, lang1);
        else continue; // not a localized key

        if(!Object.hasOwn(obj, otherKey)) {
            issues.push({
                key: newFullKeyPath,
                type: 'MISSION_DATA_KEY',
                source: key,
                target: otherKey,
            });
            continue;
        }

        // Don't add double logs for lang1
        if(key.endsWith(`_${lang1}`)) continue;

        if(obj[key] === obj[otherKey]) {
            //TODO - remove
            if(key.startsWith('npc')) continue;

            issues.push({
                key: newFullKeyPath,
                type: 'UNTRANSLATED',
                source: obj[key],
                target: obj[otherKey],
            });
        }
    }

    // Recurse into child objects
    for(let key in obj) {
        if(typeof obj[key] === 'object' && obj[key] !== null) {
            const newFullKeyPath = fullKeyPath ? `${fullKeyPath}.${key}` : key;
            diveFile(obj[key], lang1, lang2, newFullKeyPath, issues);
        }
    }
}

function makeLangBKey(
    langAKey: string,
    langA: string,
    langB: string,
): string {
    return `${langAKey.slice(0, -(langA.length + 1))}_${langB}`;
}

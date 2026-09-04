import { IpcMainEvent } from 'electron';
import fs from 'fs';
import path from 'path';

import { loadJson } from './loadJson';
import { prettyJson } from './prettyJson';
import { Issue } from './types';

import { I18N_PATH } from './compare_i18n';
import { RESOURCES_PATH } from './compare_data';
import { diveToProperty } from './diveToProperty';

type Payload = {
    lang: string;
    issue: Issue;
    value: string | string[];
};

export function saveDataChange(event: IpcMainEvent, payload: Payload): void {
    let success = false;

    if(payload.issue.key.startsWith(path.basename(I18N_PATH))) {
        success = saveI18n(payload);
    }
    else if(payload.issue.key.startsWith(path.basename(RESOURCES_PATH))) {
        success = saveResources(payload);
    }

    event.returnValue = success;
}

function saveI18n({ lang, issue, value }: Payload): boolean {
    const segments = issue.key.split('.');
    segments.shift(); // remove i18n segment

    // Dive segments until the first isn't a directory
    const base: string[] = [];
    while(segments.length) {
        const potentialPath = path.join(I18N_PATH, ...base, segments[0]);
        if(!fs.existsSync(potentialPath) || !fs.lstatSync(potentialPath).isDirectory()) {
            break;
        }

        base.push(segments.shift()!);
    }

    // Load the i18n at the derived `base`
    const filePath = path.join(I18N_PATH, base.join(path.sep), `${lang}.json`);
    const file = loadJson(filePath);

    // Update the value using the remaining `segments` after `base` derivation
    const { obj, last } = diveToProperty(file, segments.join('.')) ?? {};
    if(!obj || !last) return false;

    obj[last] = value;
    fs.writeFileSync(filePath, JSON.stringify(file, null, 4));

    return true;
}

function saveResources({ issue, value }: Payload): boolean {
    const segments = issue.key.replace('.json.', '.').split('.');
    segments.shift(); // remove resources segment

    // Dive segments until the first isn't a directory
    const base: string[] = [];
    while(segments.length) {
        const potentialPath = path.join(RESOURCES_PATH, ...base, segments[0]);
        if(!fs.existsSync(potentialPath) || !fs.lstatSync(potentialPath).isDirectory()) {
            break;
        }

        base.push(segments.shift()!);
    }

    // Load the resource at the derived `base` plus the first segment
    const fileName = segments.shift();
    const filePath = path.join(RESOURCES_PATH, base.join(path.sep), `${fileName}.json`);
    const file = loadJson(filePath);

    // Update the value using the remaining `segments` after `base` derivation
    const { obj, last } = diveToProperty(file, segments.join('.')) ?? {};
    if(!obj || !last) return false;

    obj[last] = value;
    fs.writeFileSync(filePath, prettyJson(file));

    return true;
}

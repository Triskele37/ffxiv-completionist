import { IpcMainEvent } from 'electron';
// import fs from 'fs';
// import path from 'path';

// import { loadJson } from './loadJson';
import { Issue } from './types';

// import { RESOURCES_PATH } from './compare_data';

type Payload = {
    lang: string;
    issue: Issue;
    value: string | string[];
};

export function saveVerified(
    event: IpcMainEvent,
    { lang, issue, value }: Payload,
): void {
    // const verifiedPath = path.join(RESOURCES_PATH, `verified_${lang}.json`);
    // const verified = loadJson(verifiedPath);
    //
    // const segments = issue.key.split('.');
    // const last = segments.pop();
    //
    // if(!last) {
    //     console.error('Invalid key:', issue.key);
    //     event.returnValue = false;
    //     return;
    // }
    //
    // let obj = verified;
    // while(segments.length) {
    //     const next = segments.shift();
    //     if(!next) {
    //         console.error('Invalid key:', issue.key);
    //         event.returnValue = false;
    //         return;
    //     }
    //
    //     if(!obj[next]) obj[next] = {};
    //
    //     obj = obj[next];
    // }
    //
    // obj[last] = reasons.join(' ; ');
    //
    // fs.writeFileSync(verifiedPath, JSON.stringify(verified, null, 4));

    event.returnValue = true;
}

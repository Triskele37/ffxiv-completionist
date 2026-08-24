import { IpcMainEvent } from 'electron';
import fs from 'fs';
import path from 'path';

import { loadJson } from './loadJson';
import { Issue } from './types';
import { VERIFIED_DIR } from './getVerified';
import { diveToProperty } from './diveToProperty';

type Payload = {
    lang: string;
    issue: Issue;
    reasons: string[];
};

export function saveVerified(
    event: IpcMainEvent,
    { lang, issue, reasons }: Payload,
): void {
    const verifiedPath = path.join(VERIFIED_DIR, `verified_${lang}.json`);
    const verified = loadJson(verifiedPath);

    const { obj, last } = diveToProperty(verified, issue.key) ?? {};
    if(!obj || !last) {
        event.returnValue = false;
        return;
    }

    obj[last] = reasons.join(' ; ');

    fs.writeFileSync(verifiedPath, JSON.stringify(verified, null, 4));

    event.returnValue = true;
}

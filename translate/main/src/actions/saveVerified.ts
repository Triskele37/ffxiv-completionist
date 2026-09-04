import { IpcMainEvent } from 'electron';
import fs from 'fs';
import path from 'path';

import { loadJson } from './loadJson';
import { prettyJson } from './prettyJson';
import { Issue } from './types';
import { VERIFIED_DIR } from './getVerified';
import { diveToProperty } from './diveToProperty';

type Payload = {
    lang: string;
    issue: Issue;
};

export function saveVerified(
    event: IpcMainEvent,
    { lang, issue }: Payload,
): void {
    const verifiedPath = path.join(VERIFIED_DIR, `verified_${lang}.json`);
    const verified = loadJson(verifiedPath);

    const { obj, last } = diveToProperty(verified, issue.key) ?? {};
    if(!obj || !last) {
        event.returnValue = false;
        return;
    }

    if(!issue.reasons?.length) {
        delete obj[last];
    }
    else {
        obj[last] = issue.reasons;
    }

    fs.writeFileSync(verifiedPath, prettyJson(verified));

    event.returnValue = true;
}

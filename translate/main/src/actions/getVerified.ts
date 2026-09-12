import { IpcMainEvent } from 'electron';
import fs from 'fs';
import path from 'path';

import { loadJson } from './loadJson';
import type { JSON } from './types';

export const VERIFIED_DIR = path.join('main', 'verified');

export function getVerifiedIpc(event: IpcMainEvent, lang: string): void {
    event.returnValue = getVerified(lang);
}

export function getVerified(lang: string): JSON {
    const verifiedPath = path.join(VERIFIED_DIR, `verified_${lang}.json`);

    if(!fs.existsSync(verifiedPath)) {
        fs.writeFileSync(verifiedPath, JSON.stringify({}));
    }

    return loadJson(verifiedPath);
}

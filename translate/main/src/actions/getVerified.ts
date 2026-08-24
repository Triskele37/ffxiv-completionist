import { IpcMainEvent } from 'electron';
import fs from 'fs';
import path from 'path';

import { loadJson } from './loadJson';

export const VERIFIED_DIR = path.join('main', 'verified');

export function getVerified(
    event: IpcMainEvent,
    lang: string,
): void {
    const verifiedPath = path.join(VERIFIED_DIR, `verified_${lang}.json`);

    if(!fs.existsSync(verifiedPath)) {
        fs.writeFileSync(verifiedPath, JSON.stringify({}));
    }

    event.returnValue = loadJson(verifiedPath);
}

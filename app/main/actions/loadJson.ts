import { IpcMainEvent } from 'electron';

import { JSON_CACHE } from './preloadJson';

/**
 * NOTE - remember to keep this OS agnostic
 */
export function loadJson(event: IpcMainEvent, key: string): void {
    try {
        // Check if passed group has a self-named file
        if(JSON_CACHE[key]) {
            event.returnValue = JSON_CACHE[key];
            return;
        }

        // Check if passed group has/is an index file
        const keyIfIndex = [key, '_index'].filter((p) => p).join('.');
        if(JSON_CACHE[keyIfIndex]) {
            event.returnValue = JSON_CACHE[keyIfIndex];
            return;
        }

        console.log(`Could not find file for: ${key}`);

        // Failed to find file
        event.returnValue = null;
    }
    catch(e) {
        console.error('load-json failed:', e);
        event.returnValue = null;
    }
}

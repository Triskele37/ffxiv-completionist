import { IpcMainEvent } from 'electron';

import { JSON_CACHE } from './preloadJson';

/**
 * Simple handoff of cached data to renderer
 */
export function getData(event: IpcMainEvent): void {
    event.returnValue = JSON_CACHE;
}

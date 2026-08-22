import { IPC_EVENT } from '@service/electron/IPC_EVENT';

import { DataServiceContext } from '../types';
import { JSON_GROUP } from './_types';

/**
 * Load the group json file at the given path
 */
export function loadJson(
    this: DataServiceContext,
    key: string,
): JSON_GROUP {
    let finalJson: JSON_GROUP = {};

    try {
        const json = this.svcElectron?.sendSync(IPC_EVENT.LOAD_JSON, key);

        try {
            this.loader.translateCommonKeys(json);
            finalJson = {
                ...json,
                columns: this.loader.mapColumns(json),
                tasks: this.loader.mapTasks(json),
            };
        }
        catch(e) {
            console.error(`Error processing group: ${key}`, e);
        }
    }
    catch(e) {
        console.error(`Error loading group: ${key}`, e);
    }

    return finalJson;
}

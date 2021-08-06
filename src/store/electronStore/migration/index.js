import { getPlayerStore } from "../index";

import { migrate_5_5_to_5_58 } from "./5_5-5_58";

export const migrateData = () => {
    const completionStore = getPlayerStore();
    const version = completionStore.get('version');

    // Migrate based on current store version
    // Must flow to each migration for multi-version jumps
    if(version === '0.5.5') migrate_5_5_to_5_58();

    if(!version) {
        console.log('No version found, setting to current');
        completionStore.set('version', '0.5.58');
    }
};

import { eStore, getPlayerStore } from "../index";
import { migrate_0_to_5_21 } from "./0-5_21";
import { migrate_5_21_to_5_25 } from "./5_21-5_25";

export const migrateData = () => {
    const completionStore = getPlayerStore();

    if(eStore.get('overall')) {
        console.log('Migrating alpha save location');
        moveCompletionStore(completionStore);
    }

    // 2nd beta release, when version started being used for migration
    if(!completionStore.get('version')) migrate_0_to_5_21();
    if(completionStore.get('version') === '0.5.21') migrate_5_21_to_5_25();
};

const moveCompletionStore = (completionStore) => {
    // Move the completion storage location
    const { overall, ...rest } = eStore.store;
    completionStore.store = { overall };
    eStore.store = rest;
};

import { eStore, getPlayerStore } from "../index";
import { migrate_0_to_5_21 } from "./0-5_21";
import { migrate_5_21_to_5_25 } from "./5_21-5_25";
import { migrate_5_25_to_5_3 } from "./5_25-5_3";
import { migrate_5_3_to_5_45 } from "./5_3-5_45";
import { migrate_5_45_to_5_5 } from "./5_45-5_5";

export const migrateData = () => {
    const completionStore = getPlayerStore();

    if(eStore.get('overall')) {
        console.log('Migrating alpha save location');
        moveCompletionStore(completionStore);
    }

    // 2nd beta release, when version started being used for migration
    if(!completionStore.get('version')) migrate_0_to_5_21();
    if(completionStore.get('version') === '0.5.21') migrate_5_21_to_5_25();
    if(completionStore.get('version') === '0.5.25') migrate_5_25_to_5_3();
    if(completionStore.get('version') === '0.5.3') migrate_5_3_to_5_45();
    if(completionStore.get('version') === '0.5.45') migrate_5_45_to_5_5();
};

const moveCompletionStore = (completionStore) => {
    // Move the completion storage location
    const { overall, ...rest } = eStore.store;
    completionStore.store = { overall };
    eStore.store = rest;
};

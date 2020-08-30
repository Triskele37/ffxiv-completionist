import { eStore, getPlayerStore } from "../index";
import { migrate_0_to_5_21 } from "./0-5_21";
import { migrate_5_21_to_5_25 } from "./5_21-5_25";
import { migrate_5_25_to_5_3 } from "./5_25-5_3";

export const migrateData = () => {
    const completionStore = getPlayerStore();

    if(eStore.get('overall')) {
        console.log('Migrating alpha save location');
        moveCompletionStore(completionStore);
    }

    // 2nd beta release, when version started being used for migration
    const version = completionStore.get('version');
    switch(version) {
        case '0.5.21': migrate_5_21_to_5_25(); break;
        case '0.5.25': migrate_5_25_to_5_3(); break;
        case '0.5.3': break;
        default: migrate_0_to_5_21();
    }
};

const moveCompletionStore = (completionStore) => {
    // Move the completion storage location
    const { overall, ...rest } = eStore.store;
    completionStore.store = { overall };
    eStore.store = rest;
};

import { eStore, getPlayerStore } from "../index";
import { migrateBeta } from "./beta";

export const migrateData = () => {
    // 2nd beta release, when version started being used for migration
    if(!eStore.get('version')) {
        const completionStore = getPlayerStore();

        // Move the completion storage location
        const { overall, ...rest } = eStore.store;
        completionStore.store = { overall };
        eStore.store = rest;

        migrateBeta(completionStore);
        eStore.set('version', '0.5.21');
    }
};

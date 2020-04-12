import { eStore, getPlayerStore } from "../index";
import { ChangeStore } from "./utils";
import { migrate_0_to_5_21 } from "./0-5_21";
import { migrate_5_21_to_5_25 } from "./5_21-5_25";

export const migrateData = () => {
    const completionStore = getPlayerStore();

    const test = new ChangeStore();
    test.dive('crafting-log.leatherworker.level-based.61-65');

    if(eStore.get('overall')) {
        moveCompletionStore(completionStore);
    }

    // 2nd beta release, when version started being used for migration
    if(!completionStore.get('version')) {
        migrate_0_to_5_21();
        completionStore.set('version', '0.5.21');
    }

    if(completionStore.get('version') === '0.5.21') {
        migrate_5_21_to_5_25();
        completionStore.set('version', '0.5.25');
    }
};

const moveCompletionStore = (completionStore) => {
    // Move the completion storage location
    const { overall, ...rest } = eStore.store;
    completionStore.store = { overall };
    eStore.store = rest;
};

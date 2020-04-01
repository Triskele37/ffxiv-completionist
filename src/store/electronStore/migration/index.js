import { eStore, getPlayerStore } from "../index";
import { migrateBeta } from "./beta";

export const migrateData = () => {
    // 2nd beta release, when version started being used for migration
    if(!eStore.get('version')) {
        eStore.set('version', '0.5.21');
        migrateBeta(getPlayerStore());
    }
};

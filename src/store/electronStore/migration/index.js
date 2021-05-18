import { getPlayerStore } from "../index";

import { migrate_5_5_to_5_55 } from "./5_5-5_55";

export const migrateData = () => {
    const completionStore = getPlayerStore();

    // Migrate based on current store version
    if(completionStore.get('version') === '0.5.5') migrate_5_5_to_5_55();
};

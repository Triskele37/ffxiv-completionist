import { ChangeStore } from "../ChangeStore";
import {eStore, getPlayerStore} from "../../index";

import { migrate_5_58_titles } from "./title";
import { migrate_5_58_barding } from "./barding";
import { migrate_5_58_emotes } from "./emote";
import { migrate_5_58_shared_fate } from "./shared-fate";

export const migrate_5_5_to_5_58 = () => {
    const store = new ChangeStore('0.5.58');

    // Fixing bug from last build
    store.changeKey("duty.quests.other", "undefined", "quasi-quests");

    // Fixing mixup of final quest in starting questline
    const seventhUmbral = "duty.quests.main-scenario.seventh-umbral-era";
    store.changeKey(`${seventhUmbral}.gridania`, 66209, 66210);
    store.changeKey(`${seventhUmbral}.uldah`, 66210, 66209);

    // Sections where ids have to be completely re-mapped
    if(process.env.NODE_ENV !== 'development' || eStore.get('run-volatile')) {
        migrate_5_58_titles(store);
        migrate_5_58_barding(store);
        migrate_5_58_emotes(store);
        migrate_5_58_shared_fate(store);
    }

    //------------------------------------------------------------------ Custom Task Reformat
    const oldCustom = getPlayerStore().get('custom');

    // Perform once
    if(Array.isArray(oldCustom)) {
        const oldFlags = store.oldStore.custom;

        // Update custom meta data
        const customMeta = {};
        Object.keys(oldFlags)
            .forEach((id) => customMeta[`x${id}`] = { id, ...oldCustom.shift() });
        getPlayerStore().set('custom', customMeta);

        // Update custom flag storage
        const customFlag = {};
        Object.keys(oldFlags).forEach((id) => customFlag[`x${id}`] = oldFlags[id]);
        getPlayerStore().set('overall.custom', customFlag);
    }

    store.write();
};

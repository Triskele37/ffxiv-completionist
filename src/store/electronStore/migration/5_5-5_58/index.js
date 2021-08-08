import { ChangeStore } from "../ChangeStore";

import { migrate_5_55_titles } from "./title";
import { migrate_5_55_barding } from "./barding";
import { migrate_5_55_emotes } from "./emote";
import { getPlayerStore } from "../../index";

export const migrate_5_5_to_5_58 = () => {
    const overall = new ChangeStore('0.5.58');

    // Fixing bug from last build
    overall.changeKey("duty.quests.other", "undefined", "quasi-quests");

    // Fixing mixup of final quest in starting questline
    const seventhUmbral = "duty.quests.main-scenario.seventh-umbral-era";
    overall.changeKey(`${seventhUmbral}.gridania`, 66209, 66210);
    overall.changeKey(`${seventhUmbral}.uldah`, 66210, 66209);

    // Sections where ids have to be completely re-mapped
    if(process.env.NODE_ENV !== 'development') {
        migrate_5_58_titles(overall);
        migrate_5_58_barding(overall);
        migrate_5_58_emotes(overall);
    }

    //------------------------------------------------------------------ Custom Task Reformat
    const oldCustom = getPlayerStore().get('custom');

    // Perform once
    if(Array.isArray(oldCustom)) {
        const oldFlags = overall.oldStore.custom;

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

    overall.write();
};

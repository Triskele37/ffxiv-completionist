import { ChangeStore } from "../ChangeStore";

import { migrate_5_55_titles } from "./title";
import { migrate_5_55_barding } from "./barding";
import { migrate_5_55_emotes } from "./emote";

export const migrate_5_5_to_5_55 = () => {
    const overall = new ChangeStore('0.5.55', true);

    overall.changeKey("duty.quests.other", "undefined", "quasi-quests");
    overall.deleteTask("duty.quests.levequests.battlecraft", 546);

    //TODO: Don't forget to uncomment
    // migrate_5_55_titles(overall);
    // migrate_5_55_barding(overall);
    // migrate_5_55_emotes(overall);

    overall.write();
};

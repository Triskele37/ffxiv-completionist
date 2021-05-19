import { ChangeStore } from "../ChangeStore";

import { migrate_5_55_titles } from "./title";
import { migrate_5_55_barding } from "./barding";

export const migrate_5_5_to_5_55 = () => {
    const overall = new ChangeStore('0.5.55', true);

    overall.changeKey("duty.quests.other", "undefined", "quasi-quests");

    //TODO: Don't forget to uncomment
    // migrate_5_55_titles(overall);
    // migrate_5_55_barding(overall);

    overall.write();
};

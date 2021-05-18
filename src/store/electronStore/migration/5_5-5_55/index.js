import { ChangeStore } from "../ChangeStore";

import { migrate_5_55_titles } from "./title";

export const migrate_5_5_to_5_55 = () => {
    const overall = new ChangeStore('0.5.55', true);

    // migrate_5_55_titles(overall);

    overall.write();
};

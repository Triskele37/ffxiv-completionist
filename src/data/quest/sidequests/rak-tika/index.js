import { DataGroup } from "../../../DataGroup";

import { Quests_Sidequests_Rak_Tika_The_Rak_Tika_Greatwood } from "./the-rak-tika-greatwood";

export const Quests_Sidequests_Rak_Tika = function(name, parent) {
    const data = new DataGroup(name, parent);
    data.name = "Rak'Tika";

    data.initializeSubGroups([
        Quests_Sidequests_Rak_Tika_The_Rak_Tika_Greatwood,
    ]);

    return data;
};

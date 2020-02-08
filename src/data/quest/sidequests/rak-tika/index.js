import { DataGroup } from "../../../DataGroup";

import { Quests_Sidequests_Rak_Tika_The_Rak_Tika_Greatwood } from "./the-rak-tika-greatwood";

export const Quests_Sidequests_Rak_Tika = function(parent) {
    return new DataGroup("Rak'Tika", parent).initializeSubGroups([
        Quests_Sidequests_Rak_Tika_The_Rak_Tika_Greatwood,
    ]);
};

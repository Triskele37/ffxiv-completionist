import { DataGroup } from "../../../DataGroup";

import { Quests_Sidequests_Rak_Tika_The_Rak_Tika_Greatwood } from "./the-rak-tika-greatwood";

export const Quests_Sidequests_Rak_Tika = function(name, parent) {
    return new DataGroup(name, parent).initializeSubGroups([
        Quests_Sidequests_Rak_Tika_The_Rak_Tika_Greatwood,
    ]);
};

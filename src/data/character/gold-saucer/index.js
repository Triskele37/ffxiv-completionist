import { DataGroup } from "../../DataGroup";

import { Character_Gold_Saucer_Triple_Triad_Card_List } from "./triple-triad-card";
import { Character_Gold_Saucer_Triple_Triad_Opponents } from "./tripletriad-opponent";

export const Character_Gold_Saucer = function(parent) {
    const data = new DataGroup("Gold Saucer", parent);

    data.initializeSubGroups([
        Character_Gold_Saucer_Triple_Triad_Card_List,
        Character_Gold_Saucer_Triple_Triad_Opponents
    ]);

    return data;
};

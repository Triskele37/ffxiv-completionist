import { DataGroup } from "../../DataGroup";
import { loadJson } from "../../loader";

import { Character_Gold_Saucer_Triple_Triad_Card_List } from "./triple-triad-card";
import { Character_Gold_Saucer_Triple_Triad_Opponents } from "./tripletriad-opponent";

export const Character_Gold_Saucer = function(parent) {
    const json = loadJson('./character/gold-saucer/index', parent.lang);
    const data = new DataGroup(json.groupName, parent);

    data.initializeSubGroups([
        Character_Gold_Saucer_Triple_Triad_Card_List,
        Character_Gold_Saucer_Triple_Triad_Opponents
    ]);

    return data;
};

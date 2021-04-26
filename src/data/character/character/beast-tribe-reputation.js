import { DataGroup } from "../../DataGroup";
import { loadJson } from "../../loader";

export const Character_Character_Beast_Tribe_Reputation = function(parent) {
    const json = loadJson('./character/character/beast-tribe-reputation', parent.lang);
    const data = new DataGroup(json.groupName, parent);

    data.initializeColumnConfig([
        { key: "name" },
        { key: "expansion", filterable: true },
        { key: "reputationToCap" },
        { key: "notes" }
    ], json.headers);
    data.initializeTasks(json.tasks);

    return data;
};

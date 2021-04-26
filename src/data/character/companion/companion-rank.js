import { DataGroup } from "../../DataGroup";
import { loadJson } from "../../loader";

export const Character_Companion_Rank = function(parent) {
    const json = loadJson('./character/companion/companion-rank', parent.lang);
    const data = new DataGroup(json.groupName, parent);

    data.initializeColumnConfig([
        { key: "name", centered: true },
        { key: "experience" },
        { key: "skillPoints", centered: true },
        { key: "notes" }
    ], json.headers);
    data.initializeTasks(json.tasks);

    return data;
};

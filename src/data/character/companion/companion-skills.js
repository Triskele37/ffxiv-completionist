import { DataGroup } from "../../DataGroup";
import { loadJson } from "../../loader";

export const Character_Companion_Skills = function(parent) {
    const json = loadJson('./character/companion/companion-skills', parent.lang);
    const data = new DataGroup(json.groupName, parent);

    data.initializeColumnConfig([
        { key: "name" },
        { key: "tree", filterable: true },
        { key: "spCost", centered: true },
        { key: "type", filterable: true },
        { key: "description" }
    ], json.headers);
    data.initializeTasks(json.tasks);

    return data;
};

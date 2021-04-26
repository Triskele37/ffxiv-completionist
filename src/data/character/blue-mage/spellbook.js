import { DataGroup } from "../../DataGroup";
import { loadJson } from "../../loader";

export const Character_Blue_Mage_Spellbook = function(parent) {
    const json = loadJson('./character/blue-mage/spellbook', parent.lang);
    const data = new DataGroup(json.groupName, parent);

    data.initializeColumnConfig([
        { key: "number", centered: true },
        { key: "name" },
        { key: "enemy" },
        { key: "location" },
    ], json.headers);
    data.initializeTasks(json.tasks);

    return data;
};

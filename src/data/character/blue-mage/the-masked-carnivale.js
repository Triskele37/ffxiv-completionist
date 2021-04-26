import { DataGroup } from "../../DataGroup";
import { loadJson } from "../../loader";

export const Character_Blue_Mage_The_Masked_Carnivale = function(parent) {
    const json = loadJson('./character/blue-mage/spellbook', parent.lang);
    const data = new DataGroup(json.groupName, parent);

    data.initializeColumnConfig([
        { key: "level", centered: true },
        { key: "name" },
        { key: "standardTime" },
        { key: "idealTime" },
    ], json.headers);
    data.initializeTasks(json.tasks);

    return data;
};

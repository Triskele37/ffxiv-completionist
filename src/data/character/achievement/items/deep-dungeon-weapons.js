import { DataGroup } from "../../../DataGroup";
import { loadJson } from "../../../loader";

export const Character_Achievements_Items_Deep_Dungeon_Weapons = function(parent) {
    const json = loadJson('./character/achievement/items/deep-dungeon-weapons', parent.lang);
    const data = new DataGroup(json.groupName, parent);

    data.initializeTasks(json.tasks);

    return data;
};

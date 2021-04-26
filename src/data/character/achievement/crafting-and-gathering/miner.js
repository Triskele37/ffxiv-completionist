import { DataGroup } from "../../../DataGroup";
import { loadJson } from "../../../loader";

export const Character_Achievements_Crafting_and_Gathering_Miner = function(parent) {
    const json = loadJson('./character/achievement/crafting-and-gathering/miner', parent.lang);
    const data = new DataGroup(json.groupName, parent);

    data.initializeTasks(json.tasks);

    return data;
};

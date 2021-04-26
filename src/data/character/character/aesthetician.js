import { DataGroup } from "../../DataGroup";
import { loadJson } from "../../loader";

export const Character_Character_Aesthetician = function(parent) {
    const json = loadJson('./character/character/aesthetician', parent.lang);
    const data = new DataGroup(json.groupName, parent);

    data.initializeColumnConfig([
        { key: 'name', },
        { key: 'category', filterable: true },
        { key: 'source' },
        { key: 'gender', filterable: true },
        { key: 'patch', filterable: true }
    ], json.headers);
    data.initializeTasks(json.tasks);

    return data;
};

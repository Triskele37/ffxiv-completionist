import { DataGroup } from "../DataGroup";
import { loadJson } from "../loader";

export const Character_Fashion_Accessories = function(parent) {
    const json = loadJson('./character/fashion-accessories', parent.lang);
    const data = new DataGroup(json.groupName, parent);

    data.initializeColumnConfig([
        { key: 'name', },
        { key: 'category', filterable: true },
        { key: 'source' },
        { key: 'patch', filterable: true },
    ], json.headers);
    data.initializeTasks(json.tasks);

    return data;
};

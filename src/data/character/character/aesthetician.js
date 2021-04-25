import { DataGroup } from "../../DataGroup";
import { loadJson } from "../../loader";

export const Character_Character_Aesthetician = function(parent) {
    const json = loadJson('./character/character/aesthetician', parent.lang);
    const data = new DataGroup(json.info.groupName, parent);

    data.initializeTasks(json.tasks, [
        { header: json.info.headers.name, key: 'name', },
        { header: json.info.headers.category, key: 'category', filterable: true },
        { header: json.info.headers.source, key: 'source' },
        { header: json.info.headers.gender, key: 'gender', filterable: true },
        { header: json.info.headers.patch, key: 'patch', filterable: true }
    ]);

    return data;
};

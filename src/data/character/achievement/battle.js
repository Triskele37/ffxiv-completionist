import { DataGroup } from "../../DataGroup";

const basePath = './character/achievement/battle';
export const Character_Achievements_Battle = function(parent) {
    const group = DataGroup.fromJSON(parent, `${basePath}/index`);

    group.subGroups = [
        DataGroup.fromJSON(group, `${basePath}/battle`),
        DataGroup.fromJSON(group, `${basePath}/dungeons`),
        DataGroup.fromJSON(group, `${basePath}/trials`),
        DataGroup.fromJSON(group, `${basePath}/raids`),
        DataGroup.fromJSON(group, `${basePath}/the-hunt`),
        DataGroup.fromJSON(group, `${basePath}/treasure-hunt`),
        DataGroup.fromJSON(group, `${basePath}/field-operations`),
    ];

    return group;
};

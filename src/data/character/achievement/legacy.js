import { DataGroup } from "../../DataGroup";

const basePath = "./character/achievement/legacy";
export const Character_Achievements_Legacy = function(parent) {
    const group = DataGroup.fromJSON(parent, `${basePath}/index`);
    group.defaultCompletion = "X";

    group.subGroups = [
        DataGroup.fromJSON(group, `${basePath}/battle`),
        DataGroup.fromJSON(group, `${basePath}/currency`),
        DataGroup.fromJSON(group, `${basePath}/gathering`),
        DataGroup.fromJSON(group, `${basePath}/quests`),
        DataGroup.fromJSON(group, `${basePath}/seasonal-events`),
        DataGroup.fromJSON(group, `${basePath}/dungeons`),
        DataGroup.fromJSON(group, `${basePath}/exploration`),
        DataGroup.fromJSON(group, `${basePath}/grand-company`),
    ];

    return group;
};

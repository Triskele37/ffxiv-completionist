import { DataGroup } from "../../DataGroup";

const basePath = "./character/achievement/quests";
export const Character_Achievements_Quests = function(parent) {
    const group = DataGroup.fromJSON(parent, `${basePath}/index`);

    group.subGroups = [
        DataGroup.fromJSON(group, `${basePath}/quests`),
        DataGroup.fromJSON(group, `${basePath}/levequests`),
        DataGroup.fromJSON(group, `${basePath}/beast-tribe-quests`),
        DataGroup.fromJSON(group, `${basePath}/seasonal-events`),
    ];

    return group;
};

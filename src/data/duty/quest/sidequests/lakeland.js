import { DataGroup } from "../../../DataGroup";

const basePath = "./duty/quest/sidequests/lakeland-sidequests";
export const Duty_Quests_Sidequests_Lakeland = function(parent) {
    const group = DataGroup.fromJSON(parent, `${basePath}/index`);

    group.subGroups = [
        DataGroup.fromJSON(group, `${basePath}/lakeland`),
        DataGroup.fromJSON(group, `${basePath}/the-crystarium`),
    ];

    return group;
};

import { DataGroup } from "../../../DataGroup";

const basePath = "./duty/quest/sidequests/coerthan-sidequests";
export const Duty_Quests_Sidequests_Coerthan = function(parent) {
    const group = DataGroup.fromJSON(parent, `${basePath}/index`);

    group.subGroups = [
        DataGroup.fromJSON(group, `${basePath}/coerthas-central-highlands`),
        DataGroup.fromJSON(group, `${basePath}/coerthas-western-highlands`),
    ];

    return group;
};

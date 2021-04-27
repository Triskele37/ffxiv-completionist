import { DataGroup } from "../../../DataGroup";

const basePath = "./duty/quest/sidequests/kholusia-sidequests";
export const Duty_Quests_Sidequests_Kholusia = function(parent) {
    const group = DataGroup.fromJSON(parent, `${basePath}/index`);

    group.subGroups = [
        DataGroup.fromJSON(group, `${basePath}/kholusia`),
        DataGroup.fromJSON(group, `${basePath}/eulmore`),
    ];

    return group;
};

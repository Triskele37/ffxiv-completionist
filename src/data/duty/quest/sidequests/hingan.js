import { DataGroup } from "../../../DataGroup";

const basePath = "./duty/quest/sidequests/hingan-sidequests";
export const Duty_Quests_Sidequests_Hingan = function(parent) {
    const group = DataGroup.fromJSON(parent, `${basePath}/index`);

    group.subGroups = [
        DataGroup.fromJSON(group, `${basePath}/kugane`),
    ];

    return group;
};

import { DataGroup } from "../../../DataGroup";

const basePath = "./duty/quest/sidequests/il-mheg-sidequests";
export const Duty_Quests_Sidequests_Il_Mheg = function(parent) {
    const group = DataGroup.fromJSON(parent, `${basePath}/index`);

    group.subGroups = [
        DataGroup.fromJSON(group, `${basePath}/il-mheg`),
    ];

    return group;
};

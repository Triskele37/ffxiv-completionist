import { DataGroup } from "../../../DataGroup";

const basePath = "./duty/quest/sidequests/ishgardian-sidequests";
export const Duty_Quests_Sidequests_Ishgardian = function(parent) {
    const group = DataGroup.fromJSON(parent, `${basePath}/index`);

    group.subGroups = [
        DataGroup.fromJSON(group, `${basePath}/ishgard`),
    ];

    return group;
};

import { DataGroup } from "../../../DataGroup";

const basePath = "./duty/quest/sidequests/othardian-sidequests";
export const Duty_Quests_Sidequests_Othardian = function(parent) {
    const group = DataGroup.fromJSON(parent, `${basePath}/index`);

    group.subGroups = [
        DataGroup.fromJSON(group, `${basePath}/the-ruby-sea`),
        DataGroup.fromJSON(group, `${basePath}/yanxia`),
        DataGroup.fromJSON(group, `${basePath}/the-azim-steppe`),
    ];

    return group;
};

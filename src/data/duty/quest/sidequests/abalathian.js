import { DataGroup } from "../../../DataGroup";

const basePath = "./duty/quest/sidequests/abalathian-sidequests";
export const Duty_Quests_Sidequests_Abalathian = function(parent) {
    const group = DataGroup.fromJSON(parent, `${basePath}/index`);

    group.subGroups = [
        DataGroup.fromJSON(group, `${basePath}/the-sea-of-clouds`),
    ];

    return group;
};

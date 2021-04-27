import { DataGroup } from "../../../DataGroup";

const basePath = "./duty/quest/sidequests/mor-dhonan-sidequests";
export const Duty_Quests_Sidequests_Mor_Dhonan = function(parent) {
    const group = DataGroup.fromJSON(parent, `${basePath}/index`);

    group.subGroups = [
        DataGroup.fromJSON(group, `${basePath}/mor-dhona`),
    ];

    return group;
};

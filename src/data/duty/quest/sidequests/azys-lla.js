import { DataGroup } from "../../../DataGroup";

const basePath = "./duty/quest/sidequests/azys-lla-sidequests";
export const Duty_Quests_Sidequests_Azys_Lla = function(parent) {
    const group = DataGroup.fromJSON(parent, `${basePath}/index`);

    group.subGroups = [
        DataGroup.fromJSON(group, `${basePath}/azys-lla`),
    ];

    return group;
};

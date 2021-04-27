import { DataGroup } from "../../../DataGroup";

const basePath = "./duty/quest/class-job-quests/role-quests";
export const Duty_Quests_Class_and_Job_Role = function(parent) {
    const group = DataGroup.fromJSON(parent, `${basePath}/index`);

    group.subGroups = [
        DataGroup.fromJSON(group, `${basePath}/tank-role-quests`),
        DataGroup.fromJSON(group, `${basePath}/healer-role-quests`),
        DataGroup.fromJSON(group, `${basePath}/physical-dps-role-quests`),
        DataGroup.fromJSON(group, `${basePath}/magical-dps-role-quests`),
    ];

    return group;
};

import { DataGroup } from "../../../DataGroup";

const basePath = "./duty/quest/class-job-quests/disciple-of-magic-quests";
export const Duty_Quests_Class_and_Job_Disciple_of_Magic = function(parent) {
    const group = DataGroup.fromJSON(parent, `${basePath}/index`);

    group.subGroups = [
        DataGroup.fromJSON(group, `${basePath}/conjurer`),
        DataGroup.fromJSON(group, `${basePath}/thaumaturge`),
        DataGroup.fromJSON(group, `${basePath}/arcanist`),
    ];

    return group;
};

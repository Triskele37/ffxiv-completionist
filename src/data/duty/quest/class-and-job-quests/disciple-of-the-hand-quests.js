import { DataGroup } from "../../../DataGroup";

const basePath = "./duty/quest/class-job-quests/disciple-of-the-land-quests";
export const Duty_Quests_Class_and_Job_Disciple_of_the_Hand = function(parent) {
    const group = DataGroup.fromJSON(parent, `${basePath}/index`);

    group.subGroups = [
        DataGroup.fromJSON(group, `${basePath}/carpenter`),
        DataGroup.fromJSON(group, `${basePath}/blacksmith`),
        DataGroup.fromJSON(group, `${basePath}/armorer`),
        DataGroup.fromJSON(group, `${basePath}/goldsmith`),
        DataGroup.fromJSON(group, `${basePath}/leatherworker`),
        DataGroup.fromJSON(group, `${basePath}/weaver`),
        DataGroup.fromJSON(group, `${basePath}/alchemist`),
        DataGroup.fromJSON(group, `${basePath}/culinarian`),
    ];

    return group;
};

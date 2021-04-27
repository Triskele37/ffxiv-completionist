import { DataGroup } from "../../../DataGroup";

const basePath = "./duty/quest/class-job-quests/disciple-of-the-hand-quests";
export const Duty_Quests_Class_and_Job_Disciple_of_the_Hand = function(parent) {
    const group = DataGroup.fromJSON(parent, `${basePath}/index`);

    group.subGroups = [
        DataGroup.fromJSON(group, `${basePath}/carpenter-quests`),
        DataGroup.fromJSON(group, `${basePath}/blacksmith-quests`),
        DataGroup.fromJSON(group, `${basePath}/armorer-quests`),
        DataGroup.fromJSON(group, `${basePath}/goldsmith-quests`),
        DataGroup.fromJSON(group, `${basePath}/leatherworker-quests`),
        DataGroup.fromJSON(group, `${basePath}/weaver-quests`),
        DataGroup.fromJSON(group, `${basePath}/alchemist-quests`),
        DataGroup.fromJSON(group, `${basePath}/culinarian-quests`),
    ];

    return group;
};

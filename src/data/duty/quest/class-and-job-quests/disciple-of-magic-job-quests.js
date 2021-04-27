import { DataGroup } from "../../../DataGroup";

const basePath = "./duty/quest/class-job-quests/disciple-of-magic-job-quests";
export const Duty_Quests_Class_and_Job_Disciple_of_Magic_Job = function(parent) {
    const group = DataGroup.fromJSON(parent, `${basePath}/index`);

    group.subGroups = [
        DataGroup.fromJSON(group, `${basePath}/white-mage-quests`),
        DataGroup.fromJSON(group, `${basePath}/black-mage-quests`),
        DataGroup.fromJSON(group, `${basePath}/summoner-quests`),
        DataGroup.fromJSON(group, `${basePath}/scholar-quests`),
        DataGroup.fromJSON(group, `${basePath}/astrologian-quests`),
        DataGroup.fromJSON(group, `${basePath}/red-mage-quests`),
        DataGroup.fromJSON(group, `${basePath}/blue-mage-quests`),
    ];

    return group;
};

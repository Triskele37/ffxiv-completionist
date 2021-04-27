import { DataGroup } from "../../../DataGroup";

const basePath = "./duty/quest/class-job-quests/disciple-of-magic-job-quests";
export const Duty_Quests_Class_and_Job_Disciple_of_Magic_Job = function(parent) {
    const group = DataGroup.fromJSON(parent, `${basePath}/index`);

    group.subGroups = [
        DataGroup.fromJSON(group, `${basePath}/white-mage`),
        DataGroup.fromJSON(group, `${basePath}/black-mage`),
        DataGroup.fromJSON(group, `${basePath}/summoner`),
        DataGroup.fromJSON(group, `${basePath}/scholar`),
        DataGroup.fromJSON(group, `${basePath}/astrologian`),
        DataGroup.fromJSON(group, `${basePath}/red-mage`),
        DataGroup.fromJSON(group, `${basePath}/blue-mage`),
    ];

    return group;
};

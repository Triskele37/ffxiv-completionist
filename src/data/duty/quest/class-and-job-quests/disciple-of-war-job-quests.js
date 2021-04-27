import { DataGroup } from "../../../DataGroup";

const basePath = "./duty/quest/class-job-quests/disciple-of-war-job-quests";
export const Duty_Quests_Class_and_Job_Disciple_of_War_Job = function(parent) {
    const group = DataGroup.fromJSON(parent, `${basePath}/index`);

    group.subGroups = [
        DataGroup.fromJSON(group, `${basePath}/paladin-quests`),
        DataGroup.fromJSON(group, `${basePath}/monk-quests`),
        DataGroup.fromJSON(group, `${basePath}/warrior-quests`),
        DataGroup.fromJSON(group, `${basePath}/dragoon-quests`),
        DataGroup.fromJSON(group, `${basePath}/bard-quests`),
        DataGroup.fromJSON(group, `${basePath}/ninja-quests`),
        DataGroup.fromJSON(group, `${basePath}/dark-knight-quests`),
        DataGroup.fromJSON(group, `${basePath}/machinist-quests`),
        DataGroup.fromJSON(group, `${basePath}/samurai-quests`),
        DataGroup.fromJSON(group, `${basePath}/gunbreaker-quests`),
        DataGroup.fromJSON(group, `${basePath}/dancer-quests`),
    ];

    return group;
};

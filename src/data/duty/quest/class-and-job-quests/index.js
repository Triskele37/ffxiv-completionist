import { DataGroup } from "../../../DataGroup";

import { Duty_Quests_Class_and_Job_Disciple_of_War } from "./disciple-of-war-quests";
import { Duty_Quests_Class_and_Job_Disciple_of_Magic } from "./disciple-of-magic-quests";
import { Duty_Quests_Class_and_Job_Disciple_of_the_Hand } from "./disciple-of-the-hand-quests";
import { Duty_Quests_Class_and_Job_Disciple_of_the_Land } from "./disciple-of-the-land-quests";
import { Duty_Quests_Class_and_Job_Crystalline_Mean } from "./crystalline-mean-quests";
import { Duty_Quests_Class_and_Job_Disciple_of_War_Job } from "./disciple-of-war-job-quests";
import { Duty_Quests_Class_and_Job_Disciple_of_Magic_Job } from "./disciple-of-magic-job-quests";
import { Duty_Quests_Class_and_Job_Role } from "./role-quests";

export const Duty_Quests_Class_and_Job = function(parent) {
    const group = DataGroup.fromJSON(parent, "./duty/quest/class-job-quests/index");

    group.subGroups = [
        Duty_Quests_Class_and_Job_Disciple_of_War(group),
        Duty_Quests_Class_and_Job_Disciple_of_Magic(group),
        Duty_Quests_Class_and_Job_Disciple_of_the_Hand(group),
        Duty_Quests_Class_and_Job_Disciple_of_the_Land(group),
        Duty_Quests_Class_and_Job_Crystalline_Mean(group),
        Duty_Quests_Class_and_Job_Disciple_of_War_Job(group),
        Duty_Quests_Class_and_Job_Disciple_of_Magic_Job(group),
        Duty_Quests_Class_and_Job_Role(group),
    ];

    return group;
};

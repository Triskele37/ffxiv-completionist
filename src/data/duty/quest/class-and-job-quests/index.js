import { DataGroup } from "../../../DataGroup";
import { QuestColumnConfig } from "../columnConfigs";

import { Duty_Quests_Class_and_Job_Disciple_of_War } from "./disciple-of-war-quests";
import { Duty_Quests_Class_and_Job_Disciple_of_Magic } from "./disciple-of-magic-quests";
import { Duty_Quests_Class_and_Job_Disciple_of_the_Hand } from "./disciple-of-the-hand-quests";
import { Duty_Quests_Class_and_Job_Disciple_of_the_Land } from "./disciple-of-the-land-quests";
import { Duty_Quests_Class_and_Job_Crystalline_Mean } from "./crystalline-mean-quests";
import { Duty_Quests_Class_and_Job_Disciple_of_War_Job } from "./disciple-of-war-job-quests";
import { Duty_Quests_Class_and_Job_Disciple_of_Magic_Job } from "./disciple-of-magic-job-quests";
import { Duty_Quests_Class_and_Job_Role } from "./role-quests";

export const Duty_Quests_Class_and_Job = function(parent) {
    const data = new DataGroup("Class & Job", parent);
    data.name_fr = "Classe & Job";

    data.columnConfig = QuestColumnConfig;

    data.initializeSubGroups([
        Duty_Quests_Class_and_Job_Disciple_of_War,
        Duty_Quests_Class_and_Job_Disciple_of_Magic,
        Duty_Quests_Class_and_Job_Disciple_of_the_Hand,
        Duty_Quests_Class_and_Job_Disciple_of_the_Land,
        Duty_Quests_Class_and_Job_Crystalline_Mean,
        Duty_Quests_Class_and_Job_Disciple_of_War_Job,
        Duty_Quests_Class_and_Job_Disciple_of_Magic_Job,
        Duty_Quests_Class_and_Job_Role,
    ]);

    return data;
};

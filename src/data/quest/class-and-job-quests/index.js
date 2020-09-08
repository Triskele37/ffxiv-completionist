import { DataGroup } from "../../DataGroup";
import { QuestColumnConfig } from "../columnConfigs";

import { Quests_Class_and_Job_Disciple_of_War } from "./disciple-of-war-quests";
import { Quests_Class_and_Job_Disciple_of_Magic } from "./disciple-of-magic-quests";
import { Quests_Class_and_Job_Disciple_of_the_Hand } from "./disciple-of-the-hand-quests";
import { Quests_Class_and_Job_Disciple_of_the_Land } from "./disciple-of-the-land-quests";
import { Quests_Class_and_Job_Crystalline_Mean } from "./crystalline-mean-quests";
import { Quests_Class_and_Job_Disciple_of_War_Job } from "./disciple-of-war-job-quests";
import { Quests_Class_and_Job_Disciple_of_Magic_Job } from "./disciple-of-magic-job-quests";
import { Quests_Class_and_Job_Role } from "./role-quests";

export const Quests_Class_and_Job = function(parent) {
    const data = new DataGroup("Class & Job", parent);
    data.name_fr = "Classe & Job";

    data.columnConfig = QuestColumnConfig;

    data.initializeSubGroups([
        Quests_Class_and_Job_Disciple_of_War,
        Quests_Class_and_Job_Disciple_of_Magic,
        Quests_Class_and_Job_Disciple_of_the_Hand,
        Quests_Class_and_Job_Disciple_of_the_Land,
        Quests_Class_and_Job_Crystalline_Mean,
        Quests_Class_and_Job_Disciple_of_War_Job,
        Quests_Class_and_Job_Disciple_of_Magic_Job,
        Quests_Class_and_Job_Role,
    ]);

    return data;
};

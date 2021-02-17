import { DataGroup } from "../../../../DataGroup";

import { Duty_Quests_Class_and_Job_Disciple_of_Magic_Conjurer } from "./conjurer-quests";
import { Duty_Quests_Class_and_Job_Disciple_of_Magic_Thaumaturge } from "./thaumaturge-quests";
import { Duty_Quests_Class_and_Job_Disciple_of_Magic_Arcanist } from "./arcanist-quests";

export const Duty_Quests_Class_and_Job_Disciple_of_Magic = function(parent) {
    return new DataGroup("Disciple of Magic", parent).initializeSubGroups([
        Duty_Quests_Class_and_Job_Disciple_of_Magic_Conjurer,
        Duty_Quests_Class_and_Job_Disciple_of_Magic_Thaumaturge,
        Duty_Quests_Class_and_Job_Disciple_of_Magic_Arcanist,
    ]);
};

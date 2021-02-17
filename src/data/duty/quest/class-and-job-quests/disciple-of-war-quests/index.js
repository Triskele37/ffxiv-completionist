import { DataGroup } from "../../../../DataGroup";

import { Duty_Quests_Class_and_Job_Disciple_of_War_Gladiator } from "./gladiator-quests";
import { Duty_Quests_Class_and_Job_Disciple_of_War_Pugilist } from "./pugilist-quests";
import { Duty_Quests_Class_and_Job_Disciple_of_War_Marauder } from "./marauder-quests";
import { Duty_Quests_Class_and_Job_Disciple_of_War_Lancer } from "./lancer-quests";
import { Duty_Quests_Class_and_Job_Disciple_of_War_Archer } from "./archer-quests";
import { Duty_Quests_Class_and_Job_Disciple_of_War_Rogue } from "./rogue-quests";

export const Duty_Quests_Class_and_Job_Disciple_of_War = function(parent) {
    return new DataGroup("Disciple of War", parent).initializeSubGroups([
        Duty_Quests_Class_and_Job_Disciple_of_War_Gladiator,
        Duty_Quests_Class_and_Job_Disciple_of_War_Pugilist,
        Duty_Quests_Class_and_Job_Disciple_of_War_Marauder,
        Duty_Quests_Class_and_Job_Disciple_of_War_Lancer,
        Duty_Quests_Class_and_Job_Disciple_of_War_Archer,
        Duty_Quests_Class_and_Job_Disciple_of_War_Rogue,
    ]);
};

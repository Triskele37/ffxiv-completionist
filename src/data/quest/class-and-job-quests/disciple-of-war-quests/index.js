import { DataGroup } from "../../../DataGroup";

import { Quests_Class_and_Job_Disciple_of_War_Gladiator } from "./gladiator-quests";
import { Quests_Class_and_Job_Disciple_of_War_Pugilist } from "./pugilist-quests";
import { Quests_Class_and_Job_Disciple_of_War_Marauder } from "./marauder-quests";
import { Quests_Class_and_Job_Disciple_of_War_Lancer } from "./lancer-quests";
import { Quests_Class_and_Job_Disciple_of_War_Archer } from "./archer-quests";
import { Quests_Class_and_Job_Disciple_of_War_Rogue } from "./rogue-quests";

export const Quests_Class_and_Job_Disciple_of_War = function(parent) {
    return new DataGroup("Disciple of War", parent).initializeSubGroups([
        Quests_Class_and_Job_Disciple_of_War_Gladiator,
        Quests_Class_and_Job_Disciple_of_War_Pugilist,
        Quests_Class_and_Job_Disciple_of_War_Marauder,
        Quests_Class_and_Job_Disciple_of_War_Lancer,
        Quests_Class_and_Job_Disciple_of_War_Archer,
        Quests_Class_and_Job_Disciple_of_War_Rogue,
    ]);
};

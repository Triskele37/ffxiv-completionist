import { DataGroup } from "../../../DataGroup";

import { Quests_Class_and_Job_Disciple_of_Magic_Conjurer } from "./conjurer-quests";
import { Quests_Class_and_Job_Disciple_of_Magic_Thaumaturge } from "./thaumaturge-quests";
import { Quests_Class_and_Job_Disciple_of_Magic_Arcanist } from "./arcanist-quests";

export const Quests_Class_and_Job_Disciple_of_Magic = function(name, parent) {
    return new DataGroup(name, parent).initializeSubGroups([
        Quests_Class_and_Job_Disciple_of_Magic_Conjurer,
        Quests_Class_and_Job_Disciple_of_Magic_Thaumaturge,
        Quests_Class_and_Job_Disciple_of_Magic_Arcanist,
    ]);
};

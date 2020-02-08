import { DataGroup } from "../../../DataGroup";

import { Quests_Class_and_Job_Disciple_of_the_Hand_Carpenter } from "./carpenter-quests";
import { Quests_Class_and_Job_Disciple_of_the_Hand_Blacksmith } from "./blacksmith-quests";
import { Quests_Class_and_Job_Disciple_of_the_Hand_Armorer } from "./armorer-quests";
import { Quests_Class_and_Job_Disciple_of_the_Hand_Goldsmith } from "./goldsmith-quests";
import { Quests_Class_and_Job_Disciple_of_the_Hand_Leatherworker } from "./leatherworker-quests";
import { Quests_Class_and_Job_Disciple_of_the_Hand_Weaver } from "./weaver-quests";
import { Quests_Class_and_Job_Disciple_of_the_Hand_Alchemist } from "./alchemist-quests";
import { Quests_Class_and_Job_Disciple_of_the_Hand_Culinarian } from "./culinarian-quests";

export const Quests_Class_and_Job_Disciple_of_the_Hand = function(parent) {
    return new DataGroup("Disciple of the Hand", parent).initializeSubGroups([
        Quests_Class_and_Job_Disciple_of_the_Hand_Carpenter,
        Quests_Class_and_Job_Disciple_of_the_Hand_Blacksmith,
        Quests_Class_and_Job_Disciple_of_the_Hand_Armorer,
        Quests_Class_and_Job_Disciple_of_the_Hand_Goldsmith,
        Quests_Class_and_Job_Disciple_of_the_Hand_Leatherworker,
        Quests_Class_and_Job_Disciple_of_the_Hand_Weaver,
        Quests_Class_and_Job_Disciple_of_the_Hand_Alchemist,
        Quests_Class_and_Job_Disciple_of_the_Hand_Culinarian,
    ]);
};

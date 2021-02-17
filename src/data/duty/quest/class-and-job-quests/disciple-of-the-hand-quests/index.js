import { DataGroup } from "../../../../DataGroup";

import { Duty_Quests_Class_and_Job_Disciple_of_the_Hand_Carpenter } from "./carpenter-quests";
import { Duty_Quests_Class_and_Job_Disciple_of_the_Hand_Blacksmith } from "./blacksmith-quests";
import { Duty_Quests_Class_and_Job_Disciple_of_the_Hand_Armorer } from "./armorer-quests";
import { Duty_Quests_Class_and_Job_Disciple_of_the_Hand_Goldsmith } from "./goldsmith-quests";
import { Duty_Quests_Class_and_Job_Disciple_of_the_Hand_Leatherworker } from "./leatherworker-quests";
import { Duty_Quests_Class_and_Job_Disciple_of_the_Hand_Weaver } from "./weaver-quests";
import { Duty_Quests_Class_and_Job_Disciple_of_the_Hand_Alchemist } from "./alchemist-quests";
import { Duty_Quests_Class_and_Job_Disciple_of_the_Hand_Culinarian } from "./culinarian-quests";

export const Duty_Quests_Class_and_Job_Disciple_of_the_Hand = function(parent) {
    return new DataGroup("Disciple of the Hand", parent).initializeSubGroups([
        Duty_Quests_Class_and_Job_Disciple_of_the_Hand_Carpenter,
        Duty_Quests_Class_and_Job_Disciple_of_the_Hand_Blacksmith,
        Duty_Quests_Class_and_Job_Disciple_of_the_Hand_Armorer,
        Duty_Quests_Class_and_Job_Disciple_of_the_Hand_Goldsmith,
        Duty_Quests_Class_and_Job_Disciple_of_the_Hand_Leatherworker,
        Duty_Quests_Class_and_Job_Disciple_of_the_Hand_Weaver,
        Duty_Quests_Class_and_Job_Disciple_of_the_Hand_Alchemist,
        Duty_Quests_Class_and_Job_Disciple_of_the_Hand_Culinarian,
    ]);
};

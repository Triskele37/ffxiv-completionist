import { DataGroup } from "../../../DataGroup";

import { Quests_Class_and_Job_Disciple_of_the_Land_Miner } from "./miner-quests";
import { Quests_Class_and_Job_Disciple_of_the_Land_Botanist } from "./botanist-quests";
import { Quests_Class_and_Job_Disciple_of_the_Land_Fisher } from "./fisher-quests";

export const Quests_Class_and_Job_Disciple_of_the_Land = function(name, parent) {
    return new DataGroup(name, parent).initializeSubGroups([
        Quests_Class_and_Job_Disciple_of_the_Land_Miner,
        Quests_Class_and_Job_Disciple_of_the_Land_Botanist,
        Quests_Class_and_Job_Disciple_of_the_Land_Fisher,
    ]);
};

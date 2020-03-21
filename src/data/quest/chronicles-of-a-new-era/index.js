import { DataGroup } from "../../DataGroup";
import { QuestColumnConfig } from "../columnConfigs";

import { Quests_Chronicles_of_a_New_Era_Primals } from "./primals";
import { Quests_Chronicles_of_a_New_Era_Bahamut } from "./bahamut";
import { Quests_Chronicles_of_a_New_Era_The_Crystal_Tower } from "./the-crystal-tower";
import { Quests_Chronicles_of_a_New_Era_Alexander } from "./alexander";
import { Quests_Chronicles_of_a_New_Era_The_Warring_Triad } from "./the-warring-triad";
import { Quests_Chronicles_of_a_New_Era_The_Shadow_of_Mhach } from "./the-shadow-of-mhach";
import { Quests_Chronicles_of_a_New_Era_Omega } from "./omega";
import { Quests_Chronicles_of_a_New_Era_Return_to_Ivalice } from "./return-to-ivalice";
import { Quests_Chronicles_of_a_New_Era_The_Four_Lords } from "./the-four-lords";
import { Quests_Chronicles_of_a_New_Era_Eden } from "./eden";
import { Quests_Chronicles_of_a_New_Era_YoRHa_Dark_Apocalypse } from "./yorha-dark-apocalypse";
import { Quests_Chronicles_of_a_New_Era_The_Sorrow_of_Werlyt } from "./the-sorrow-of-werlyt";

export const Quests_Chronicles_of_a_New_Era = function(parent) {
    const data = new DataGroup("Chronicles of a New Era", parent);
    data.columnConfig = QuestColumnConfig;

    data.initializeSubGroups([
        Quests_Chronicles_of_a_New_Era_Primals,
        Quests_Chronicles_of_a_New_Era_Bahamut,
        Quests_Chronicles_of_a_New_Era_The_Crystal_Tower,
        Quests_Chronicles_of_a_New_Era_Alexander,
        Quests_Chronicles_of_a_New_Era_The_Warring_Triad,
        Quests_Chronicles_of_a_New_Era_The_Shadow_of_Mhach,
        Quests_Chronicles_of_a_New_Era_Omega,
        Quests_Chronicles_of_a_New_Era_Return_to_Ivalice,
        Quests_Chronicles_of_a_New_Era_The_Four_Lords,
        Quests_Chronicles_of_a_New_Era_Eden,
        Quests_Chronicles_of_a_New_Era_YoRHa_Dark_Apocalypse,
        Quests_Chronicles_of_a_New_Era_The_Sorrow_of_Werlyt,
    ]);

    return data;
};

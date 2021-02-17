import { DataGroup } from "../../../DataGroup";
import { QuestColumnConfig } from "../columnConfigs";

import { Duty_Quests_Chronicles_of_a_New_Era_Primals } from "./primals";
import { Duty_Quests_Chronicles_of_a_New_Era_Bahamut } from "./bahamut";
import { Duty_Quests_Chronicles_of_a_New_Era_The_Crystal_Tower } from "./the-crystal-tower";
import { Duty_Quests_Chronicles_of_a_New_Era_Alexander } from "./alexander";
import { Duty_Quests_Chronicles_of_a_New_Era_The_Warring_Triad } from "./the-warring-triad";
import { Duty_Quests_Chronicles_of_a_New_Era_The_Shadow_of_Mhach } from "./the-shadow-of-mhach";
import { Duty_Quests_Chronicles_of_a_New_Era_Omega } from "./omega";
import { Duty_Quests_Chronicles_of_a_New_Era_Return_to_Ivalice } from "./return-to-ivalice";
import { Duty_Quests_Chronicles_of_a_New_Era_The_Four_Lords } from "./the-four-lords";
import { Duty_Quests_Chronicles_of_a_New_Era_Eden } from "./eden";
import { Duty_Quests_Chronicles_of_a_New_Era_YoRHa_Dark_Apocalypse } from "./yorha-dark-apocalypse";
import { Duty_Quests_Chronicles_of_a_New_Era_The_Sorrow_of_Werlyt } from "./the-sorrow-of-werlyt";

export const Duty_Quests_Chronicles_of_a_New_Era = function(parent) {
    const data = new DataGroup("Chronicles of a New Era", parent);
    data.name_fr = "Chroniques d'une Nouvelle Ère";

    data.columnConfig = QuestColumnConfig;

    data.initializeSubGroups([
        Duty_Quests_Chronicles_of_a_New_Era_Primals,
        Duty_Quests_Chronicles_of_a_New_Era_Bahamut,
        Duty_Quests_Chronicles_of_a_New_Era_The_Crystal_Tower,
        Duty_Quests_Chronicles_of_a_New_Era_Alexander,
        Duty_Quests_Chronicles_of_a_New_Era_The_Warring_Triad,
        Duty_Quests_Chronicles_of_a_New_Era_The_Shadow_of_Mhach,
        Duty_Quests_Chronicles_of_a_New_Era_Omega,
        Duty_Quests_Chronicles_of_a_New_Era_Return_to_Ivalice,
        Duty_Quests_Chronicles_of_a_New_Era_The_Four_Lords,
        Duty_Quests_Chronicles_of_a_New_Era_Eden,
        Duty_Quests_Chronicles_of_a_New_Era_YoRHa_Dark_Apocalypse,
        Duty_Quests_Chronicles_of_a_New_Era_The_Sorrow_of_Werlyt,
    ]);

    return data;
};

import { DataGroup } from "../../../../DataGroup";

import { Logs_Crafting_Log_Armorer_Level_Based_1_5 } from "./level-1-5";
import { Logs_Crafting_Log_Armorer_Level_Based_6_10 } from "./level-6-10";
import { Logs_Crafting_Log_Armorer_Level_Based_11_15 } from "./level-11-15";
import { Logs_Crafting_Log_Armorer_Level_Based_16_20 } from "./level-16-20";
import { Logs_Crafting_Log_Armorer_Level_Based_21_25 } from "./level-21-25";
import { Logs_Crafting_Log_Armorer_Level_Based_26_30 } from "./level-26-30";
import { Logs_Crafting_Log_Armorer_Level_Based_31_35 } from "./level-31-35";
import { Logs_Crafting_Log_Armorer_Level_Based_36_40 } from "./level-36-40";
import { Logs_Crafting_Log_Armorer_Level_Based_41_45 } from "./level-41-45";
import { Logs_Crafting_Log_Armorer_Level_Based_46_50 } from "./level-46-50";
import { Logs_Crafting_Log_Armorer_Level_Based_51_55 } from "./level-51-55";
import { Logs_Crafting_Log_Armorer_Level_Based_56_60 } from "./level-56-60";
import { Logs_Crafting_Log_Armorer_Level_Based_61_65 } from "./level-61-65";
import { Logs_Crafting_Log_Armorer_Level_Based_66_70 } from "./level-66-70";
import { Logs_Crafting_Log_Armorer_Level_Based_71_75 } from "./level-71-75";
import { Logs_Crafting_Log_Armorer_Level_Based_76_80 } from "./level-76-80";

export const Logs_Crafting_Log_Armorer_Level_Based = function(parent) {
    return new DataGroup("Level Based", parent).initializeSubGroups([
        Logs_Crafting_Log_Armorer_Level_Based_1_5,
        Logs_Crafting_Log_Armorer_Level_Based_6_10,
        Logs_Crafting_Log_Armorer_Level_Based_11_15,
        Logs_Crafting_Log_Armorer_Level_Based_16_20,
        Logs_Crafting_Log_Armorer_Level_Based_21_25,
        Logs_Crafting_Log_Armorer_Level_Based_26_30,
        Logs_Crafting_Log_Armorer_Level_Based_31_35,
        Logs_Crafting_Log_Armorer_Level_Based_36_40,
        Logs_Crafting_Log_Armorer_Level_Based_41_45,
        Logs_Crafting_Log_Armorer_Level_Based_46_50,
        Logs_Crafting_Log_Armorer_Level_Based_51_55,
        Logs_Crafting_Log_Armorer_Level_Based_56_60,
        Logs_Crafting_Log_Armorer_Level_Based_61_65,
        Logs_Crafting_Log_Armorer_Level_Based_66_70,
        Logs_Crafting_Log_Armorer_Level_Based_71_75,
        Logs_Crafting_Log_Armorer_Level_Based_76_80,
    ]);
};

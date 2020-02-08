import { DataGroup } from "../../../DataGroup";

import { Crafting_Log_Armorer_Level_Based_1_5 } from "./level-1-5";
import { Crafting_Log_Armorer_Level_Based_6_10 } from "./level-6-10";
import { Crafting_Log_Armorer_Level_Based_11_15 } from "./level-11-15";
import { Crafting_Log_Armorer_Level_Based_16_20 } from "./level-16-20";
import { Crafting_Log_Armorer_Level_Based_21_25 } from "./level-21-25";
import { Crafting_Log_Armorer_Level_Based_26_30 } from "./level-26-30";
import { Crafting_Log_Armorer_Level_Based_31_35 } from "./level-31-35";
import { Crafting_Log_Armorer_Level_Based_36_40 } from "./level-36-40";
import { Crafting_Log_Armorer_Level_Based_41_45 } from "./level-41-45";
import { Crafting_Log_Armorer_Level_Based_46_50 } from "./level-46-50";
import { Crafting_Log_Armorer_Level_Based_51_55 } from "./level-51-55";
import { Crafting_Log_Armorer_Level_Based_56_60 } from "./level-56-60";
import { Crafting_Log_Armorer_Level_Based_61_65 } from "./level-61-65";
import { Crafting_Log_Armorer_Level_Based_66_70 } from "./level-66-70";
import { Crafting_Log_Armorer_Level_Based_71_75 } from "./level-71-75";
import { Crafting_Log_Armorer_Level_Based_76_80 } from "./level-76-80";

export const Crafting_Log_Armorer_Level_Based = function(parent) {
    return new DataGroup("Level Based", parent).initializeSubGroups([
        Crafting_Log_Armorer_Level_Based_1_5,
        Crafting_Log_Armorer_Level_Based_6_10,
        Crafting_Log_Armorer_Level_Based_11_15,
        Crafting_Log_Armorer_Level_Based_16_20,
        Crafting_Log_Armorer_Level_Based_21_25,
        Crafting_Log_Armorer_Level_Based_26_30,
        Crafting_Log_Armorer_Level_Based_31_35,
        Crafting_Log_Armorer_Level_Based_36_40,
        Crafting_Log_Armorer_Level_Based_41_45,
        Crafting_Log_Armorer_Level_Based_46_50,
        Crafting_Log_Armorer_Level_Based_51_55,
        Crafting_Log_Armorer_Level_Based_56_60,
        Crafting_Log_Armorer_Level_Based_61_65,
        Crafting_Log_Armorer_Level_Based_66_70,
        Crafting_Log_Armorer_Level_Based_71_75,
        Crafting_Log_Armorer_Level_Based_76_80,
    ]);
};

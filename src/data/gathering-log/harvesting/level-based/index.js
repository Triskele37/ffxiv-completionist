import { DataGroup } from "../../../DataGroup";

import { Gathering_Log_Harvesting_Level_1_5 } from "./level-1-5";
import { Gathering_Log_Harvesting_Level_6_10 } from "./level-6-10";
import { Gathering_Log_Harvesting_Level_11_15 } from "./level-11-15";
import { Gathering_Log_Harvesting_Level_16_20 } from "./level-16-20";
import { Gathering_Log_Harvesting_Level_21_25 } from "./level-21-25";
import { Gathering_Log_Harvesting_Level_26_30 } from "./level-26-30";
import { Gathering_Log_Harvesting_Level_31_35 } from "./level-31-35";
import { Gathering_Log_Harvesting_Level_36_40 } from "./level-36-40";
import { Gathering_Log_Harvesting_Level_41_45 } from "./level-41-45";
import { Gathering_Log_Harvesting_Level_46_50 } from "./level-46-50";
import { Gathering_Log_Harvesting_Level_51_55 } from "./level-51-55";
import { Gathering_Log_Harvesting_Level_56_60 } from "./level-56-60";
import { Gathering_Log_Harvesting_Level_61_65 } from "./level-61-65";
import { Gathering_Log_Harvesting_Level_66_70 } from "./level-66-70";
import { Gathering_Log_Harvesting_Level_71_75 } from "./level-71-75";
import { Gathering_Log_Harvesting_Level_76_80 } from "./level-76-80";

export const Gathering_Log_Harvesting_Level = function(parent) {
    return new DataGroup("Level", parent).initializeSubGroups([
        Gathering_Log_Harvesting_Level_1_5,
        Gathering_Log_Harvesting_Level_6_10,
        Gathering_Log_Harvesting_Level_11_15,
        Gathering_Log_Harvesting_Level_16_20,
        Gathering_Log_Harvesting_Level_21_25,
        Gathering_Log_Harvesting_Level_26_30,
        Gathering_Log_Harvesting_Level_31_35,
        Gathering_Log_Harvesting_Level_36_40,
        Gathering_Log_Harvesting_Level_41_45,
        Gathering_Log_Harvesting_Level_46_50,
        Gathering_Log_Harvesting_Level_51_55,
        Gathering_Log_Harvesting_Level_56_60,
        Gathering_Log_Harvesting_Level_61_65,
        Gathering_Log_Harvesting_Level_66_70,
        Gathering_Log_Harvesting_Level_71_75,
        Gathering_Log_Harvesting_Level_76_80,
	]);
};

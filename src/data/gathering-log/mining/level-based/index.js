import { Mining_Log_Level_1_5 } from "./level-1-5";
import { Mining_Log_Level_6_10 } from "./level-6-10";
import { Mining_Log_Level_11_15 } from "./level-11-15";
import { Mining_Log_Level_16_20 } from "./level-16-20";
import { Mining_Log_Level_21_25 } from "./level-21-25";
import { Mining_Log_Level_26_30 } from "./level-26-30";
import { Mining_Log_Level_31_35 } from "./level-31-35";
import { Mining_Log_Level_36_40 } from "./level-36-40";
import { Mining_Log_Level_41_45 } from "./level-41-45";
import { Mining_Log_Level_46_50 } from "./level-46-50";
import { Mining_Log_Level_51_55 } from "./level-51-55";
import { Mining_Log_Level_56_60 } from "./level-56-60";
import { Mining_Log_Level_61_65 } from "./level-61-65";
import { Mining_Log_Level_66_70 } from "./level-66-70";
import { Mining_Log_Level_71_75 } from "./level-71-75";
import { Mining_Log_Level_76_80 } from "./level-76-80";

export const Mining_Log_Level = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.level-based`;

    return {
        name: "Mining",
        storageKey,
        groupKeys: [
            "Level_1_5",
            "Level_6_10",
            "Level_11_15",
            "Level_16_20",
            "Level_21_25",
            "Level_26_30",
            "Level_31_35",
            "Level_36_40",
            "Level_41_45",
            "Level_46_50",
            "Level_51_55",
            "Level_56_60",
            "Level_61_65",
            "Level_66_70",
            "Level_71_75",
            "Level_76_80",
        ],
        // Groups
        Level_1_5: Mining_Log_Level_1_5(storageKey),
        Level_6_10: Mining_Log_Level_6_10(storageKey),
        Level_11_15: Mining_Log_Level_11_15(storageKey),
        Level_16_20: Mining_Log_Level_16_20(storageKey),
        Level_21_25: Mining_Log_Level_21_25(storageKey),
        Level_26_30: Mining_Log_Level_26_30(storageKey),
        Level_31_35: Mining_Log_Level_31_35(storageKey),
        Level_36_40: Mining_Log_Level_36_40(storageKey),
        Level_41_45: Mining_Log_Level_41_45(storageKey),
        Level_46_50: Mining_Log_Level_46_50(storageKey),
        Level_51_55: Mining_Log_Level_51_55(storageKey),
        Level_56_60: Mining_Log_Level_56_60(storageKey),
        Level_61_65: Mining_Log_Level_61_65(storageKey),
        Level_66_70: Mining_Log_Level_66_70(storageKey),
        Level_71_75: Mining_Log_Level_71_75(storageKey),
        Level_76_80: Mining_Log_Level_76_80(storageKey),
    };
};

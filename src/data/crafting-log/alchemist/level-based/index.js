import { AlchemistLevels_1_5 } from "./level-1-5";
import { AlchemistLevels_6_10 } from "./level-6-10";
import { AlchemistLevels_11_15 } from "./level-11-15";
import { AlchemistLevels_16_20 } from "./level-16-20";
import { AlchemistLevels_21_25 } from "./level-21-25";
import { AlchemistLevels_26_30 } from "./level-26-30";
import { AlchemistLevels_31_35 } from "./level-31-35";
import { AlchemistLevels_36_40 } from "./level-36-40";
import { AlchemistLevels_41_45 } from "./level-41-45";
import { AlchemistLevels_46_50 } from "./level-46-50";
import { AlchemistLevels_51_55 } from "./level-51-55";
import { AlchemistLevels_56_60 } from "./level-56-60";
import { AlchemistLevels_61_65 } from "./level-61-65";
import { AlchemistLevels_66_70 } from "./level-66-70";
import { AlchemistLevels_71_75 } from "./level-71-75";
import { AlchemistLevels_76_80 } from "./level-76-80";

export const AlchemistLevelBased = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.level-based`;

    return {
        name: "Level Based",
        storageKey,
        groupKeys: [
            "Levels_1_5",
            "Levels_6_10",
            "Levels_11_15",
            "Levels_16_20",
            "Levels_21_25",
            "Levels_26_30",
            "Levels_31_35",
            "Levels_36_40",
            "Levels_41_45",
            "Levels_46_50",
            "Levels_51_55",
            "Levels_56_60",
            "Levels_61_65",
            "Levels_66_70",
            "Levels_71_75",
            "Levels_76_80",
        ],
        // Groups
        Levels_1_5: AlchemistLevels_1_5(storageKey),
        Levels_6_10: AlchemistLevels_6_10(storageKey),
        Levels_11_15: AlchemistLevels_11_15(storageKey),
        Levels_16_20: AlchemistLevels_16_20(storageKey),
        Levels_21_25: AlchemistLevels_21_25(storageKey),
        Levels_26_30: AlchemistLevels_26_30(storageKey),
        Levels_31_35: AlchemistLevels_31_35(storageKey),
        Levels_36_40: AlchemistLevels_36_40(storageKey),
        Levels_41_45: AlchemistLevels_41_45(storageKey),
        Levels_46_50: AlchemistLevels_46_50(storageKey),
        Levels_51_55: AlchemistLevels_51_55(storageKey),
        Levels_56_60: AlchemistLevels_56_60(storageKey),
        Levels_61_65: AlchemistLevels_61_65(storageKey),
        Levels_66_70: AlchemistLevels_66_70(storageKey),
        Levels_71_75: AlchemistLevels_71_75(storageKey),
        Levels_76_80: AlchemistLevels_76_80(storageKey),
    };
};

import { BlacksmithLevels_1_5 } from "./level-1-5";
import { BlacksmithLevels_6_10 } from "./level-6-10";
import { BlacksmithLevels_11_15 } from "./level-11-15";
import { BlacksmithLevels_16_20 } from "./level-16-20";
import { BlacksmithLevels_21_25 } from "./level-21-25";
import { BlacksmithLevels_26_30 } from "./level-26-30";
import { BlacksmithLevels_31_35 } from "./level-31-35";
import { BlacksmithLevels_36_40 } from "./level-36-40";
import { BlacksmithLevels_41_45 } from "./level-41-45";
import { BlacksmithLevels_46_50 } from "./level-46-50";
import { BlacksmithLevels_51_55 } from "./level-51-55";
import { BlacksmithLevels_56_60 } from "./level-56-60";
import { BlacksmithLevels_61_65 } from "./level-61-65";
import { BlacksmithLevels_66_70 } from "./level-66-70";
import { BlacksmithLevels_71_75 } from "./level-71-75";
import { BlacksmithLevels_76_80 } from "./level-76-80";

export const BlacksmithLevelBased = function(parentStorageKey) {
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
        Levels_1_5: BlacksmithLevels_1_5(storageKey),
        Levels_6_10: BlacksmithLevels_6_10(storageKey),
        Levels_11_15: BlacksmithLevels_11_15(storageKey),
        Levels_16_20: BlacksmithLevels_16_20(storageKey),
        Levels_21_25: BlacksmithLevels_21_25(storageKey),
        Levels_26_30: BlacksmithLevels_26_30(storageKey),
        Levels_31_35: BlacksmithLevels_31_35(storageKey),
        Levels_36_40: BlacksmithLevels_36_40(storageKey),
        Levels_41_45: BlacksmithLevels_41_45(storageKey),
        Levels_46_50: BlacksmithLevels_46_50(storageKey),
        Levels_51_55: BlacksmithLevels_51_55(storageKey),
        Levels_56_60: BlacksmithLevels_56_60(storageKey),
        Levels_61_65: BlacksmithLevels_61_65(storageKey),
        Levels_66_70: BlacksmithLevels_66_70(storageKey),
        Levels_71_75: BlacksmithLevels_71_75(storageKey),
        Levels_76_80: BlacksmithLevels_76_80(storageKey),
    };
};

import { GoldsmithLevels_1_5 } from "./level-1-5";
import { GoldsmithLevels_6_10 } from "./level-6-10";
import { GoldsmithLevels_11_15 } from "./level-11-15";
import { GoldsmithLevels_16_20 } from "./level-16-20";
import { GoldsmithLevels_21_25 } from "./level-21-25";
import { GoldsmithLevels_26_30 } from "./level-26-30";
import { GoldsmithLevels_31_35 } from "./level-31-35";
import { GoldsmithLevels_36_40 } from "./level-36-40";
import { GoldsmithLevels_41_45 } from "./level-41-45";
import { GoldsmithLevels_46_50 } from "./level-46-50";
import { GoldsmithLevels_51_55 } from "./level-51-55";
import { GoldsmithLevels_56_60 } from "./level-56-60";
import { GoldsmithLevels_61_65 } from "./level-61-65";
import { GoldsmithLevels_66_70 } from "./level-66-70";
import { GoldsmithLevels_71_75 } from "./level-71-75";
import { GoldsmithLevels_76_80 } from "./level-76-80";

export const GoldsmithLevelBased = function(parentStorageKey) {
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
        Levels_1_5: GoldsmithLevels_1_5(storageKey),
        Levels_6_10: GoldsmithLevels_6_10(storageKey),
        Levels_11_15: GoldsmithLevels_11_15(storageKey),
        Levels_16_20: GoldsmithLevels_16_20(storageKey),
        Levels_21_25: GoldsmithLevels_21_25(storageKey),
        Levels_26_30: GoldsmithLevels_26_30(storageKey),
        Levels_31_35: GoldsmithLevels_31_35(storageKey),
        Levels_36_40: GoldsmithLevels_36_40(storageKey),
        Levels_41_45: GoldsmithLevels_41_45(storageKey),
        Levels_46_50: GoldsmithLevels_46_50(storageKey),
        Levels_51_55: GoldsmithLevels_51_55(storageKey),
        Levels_56_60: GoldsmithLevels_56_60(storageKey),
        Levels_61_65: GoldsmithLevels_61_65(storageKey),
        Levels_66_70: GoldsmithLevels_66_70(storageKey),
        Levels_71_75: GoldsmithLevels_71_75(storageKey),
        Levels_76_80: GoldsmithLevels_76_80(storageKey),
    };
};

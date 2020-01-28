import { CulinarianLevels_1_5 } from "./level-1-5";
import { CulinarianLevels_6_10 } from "./level-6-10";
import { CulinarianLevels_11_15 } from "./level-11-15";
import { CulinarianLevels_16_20 } from "./level-16-20";
import { CulinarianLevels_21_25 } from "./level-21-25";
import { CulinarianLevels_26_30 } from "./level-26-30";
import { CulinarianLevels_31_35 } from "./level-31-35";
import { CulinarianLevels_36_40 } from "./level-36-40";
import { CulinarianLevels_41_45 } from "./level-41-45";
import { CulinarianLevels_46_50 } from "./level-46-50";
import { CulinarianLevels_51_55 } from "./level-51-55";
import { CulinarianLevels_56_60 } from "./level-56-60";
import { CulinarianLevels_61_65 } from "./level-61-65";
import { CulinarianLevels_66_70 } from "./level-66-70";
import { CulinarianLevels_71_75 } from "./level-71-75";
import { CulinarianLevels_76_80 } from "./level-76-80";

export const CulinarianLevelBased = function(parentStorageKey) {
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
        Levels_1_5: CulinarianLevels_1_5(storageKey),
        Levels_6_10: CulinarianLevels_6_10(storageKey),
        Levels_11_15: CulinarianLevels_11_15(storageKey),
        Levels_16_20: CulinarianLevels_16_20(storageKey),
        Levels_21_25: CulinarianLevels_21_25(storageKey),
        Levels_26_30: CulinarianLevels_26_30(storageKey),
        Levels_31_35: CulinarianLevels_31_35(storageKey),
        Levels_36_40: CulinarianLevels_36_40(storageKey),
        Levels_41_45: CulinarianLevels_41_45(storageKey),
        Levels_46_50: CulinarianLevels_46_50(storageKey),
        Levels_51_55: CulinarianLevels_51_55(storageKey),
        Levels_56_60: CulinarianLevels_56_60(storageKey),
        Levels_61_65: CulinarianLevels_61_65(storageKey),
        Levels_66_70: CulinarianLevels_66_70(storageKey),
        Levels_71_75: CulinarianLevels_71_75(storageKey),
        Levels_76_80: CulinarianLevels_76_80(storageKey),
    };
};

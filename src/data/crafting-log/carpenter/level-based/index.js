import { CarpenterLevels_1_5 } from "./level-1-5";
import { CarpenterLevels_6_10 } from "./level-6-10";
import { CarpenterLevels_11_15 } from "./level-11-15";
import { CarpenterLevels_16_20 } from "./level-16-20";
import { CarpenterLevels_21_25 } from "./level-21-25";
import { CarpenterLevels_26_30 } from "./level-26-30";
import { CarpenterLevels_31_35 } from "./level-31-35";
import { CarpenterLevels_36_40 } from "./level-36-40";
import { CarpenterLevels_41_45 } from "./level-41-45";
import { CarpenterLevels_46_50 } from "./level-46-50";
import { CarpenterLevels_51_55 } from "./level-51-55";
import { CarpenterLevels_56_60 } from "./level-56-60";
import { CarpenterLevels_61_65 } from "./level-61-65";
import { CarpenterLevels_66_70 } from "./level-66-70";
import { CarpenterLevels_71_75 } from "./level-71-75";
import { CarpenterLevels_76_80 } from "./level-76-80";

export const CarpenterLevelBased = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.level-based`;

    return {
        name: 'Level Based',
        storageKey,
        subGroups: [
            CarpenterLevels_1_5(storageKey),
            CarpenterLevels_6_10(storageKey),
            CarpenterLevels_11_15(storageKey),
            CarpenterLevels_16_20(storageKey),
            CarpenterLevels_21_25(storageKey),
            CarpenterLevels_26_30(storageKey),
            CarpenterLevels_31_35(storageKey),
            CarpenterLevels_36_40(storageKey),
            CarpenterLevels_41_45(storageKey),
            CarpenterLevels_46_50(storageKey),
            CarpenterLevels_51_55(storageKey),
            CarpenterLevels_56_60(storageKey),
            CarpenterLevels_61_65(storageKey),
            CarpenterLevels_66_70(storageKey),
            CarpenterLevels_71_75(storageKey),
            CarpenterLevels_76_80(storageKey),
        ]
    };
};

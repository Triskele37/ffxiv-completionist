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
        subGroups: [
            AlchemistLevels_1_5(storageKey),
            AlchemistLevels_6_10(storageKey),
            AlchemistLevels_11_15(storageKey),
            AlchemistLevels_16_20(storageKey),
            AlchemistLevels_21_25(storageKey),
            AlchemistLevels_26_30(storageKey),
            AlchemistLevels_31_35(storageKey),
            AlchemistLevels_36_40(storageKey),
            AlchemistLevels_41_45(storageKey),
            AlchemistLevels_46_50(storageKey),
            AlchemistLevels_51_55(storageKey),
            AlchemistLevels_56_60(storageKey),
            AlchemistLevels_61_65(storageKey),
            AlchemistLevels_66_70(storageKey),
            AlchemistLevels_71_75(storageKey),
            AlchemistLevels_76_80(storageKey),
        ]
    };
};

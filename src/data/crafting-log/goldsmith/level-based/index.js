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
        subGroups: [
            GoldsmithLevels_1_5(storageKey),
            GoldsmithLevels_6_10(storageKey),
            GoldsmithLevels_11_15(storageKey),
            GoldsmithLevels_16_20(storageKey),
            GoldsmithLevels_21_25(storageKey),
            GoldsmithLevels_26_30(storageKey),
            GoldsmithLevels_31_35(storageKey),
            GoldsmithLevels_36_40(storageKey),
            GoldsmithLevels_41_45(storageKey),
            GoldsmithLevels_46_50(storageKey),
            GoldsmithLevels_51_55(storageKey),
            GoldsmithLevels_56_60(storageKey),
            GoldsmithLevels_61_65(storageKey),
            GoldsmithLevels_66_70(storageKey),
            GoldsmithLevels_71_75(storageKey),
            GoldsmithLevels_76_80(storageKey),
        ]
    };
};

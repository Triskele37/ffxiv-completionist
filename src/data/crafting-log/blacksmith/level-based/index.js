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
        subGroups: [
            BlacksmithLevels_1_5(storageKey),
            BlacksmithLevels_6_10(storageKey),
            BlacksmithLevels_11_15(storageKey),
            BlacksmithLevels_16_20(storageKey),
            BlacksmithLevels_21_25(storageKey),
            BlacksmithLevels_26_30(storageKey),
            BlacksmithLevels_31_35(storageKey),
            BlacksmithLevels_36_40(storageKey),
            BlacksmithLevels_41_45(storageKey),
            BlacksmithLevels_46_50(storageKey),
            BlacksmithLevels_51_55(storageKey),
            BlacksmithLevels_56_60(storageKey),
            BlacksmithLevels_61_65(storageKey),
            BlacksmithLevels_66_70(storageKey),
            BlacksmithLevels_71_75(storageKey),
            BlacksmithLevels_76_80(storageKey),
        ]
    };
};

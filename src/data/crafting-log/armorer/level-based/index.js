import { ArmorerLevels_1_5 } from "./level-1-5";
import { ArmorerLevels_6_10 } from "./level-6-10";
import { ArmorerLevels_11_15 } from "./level-11-15";
import { ArmorerLevels_16_20 } from "./level-16-20";
import { ArmorerLevels_21_25 } from "./level-21-25";
import { ArmorerLevels_26_30 } from "./level-26-30";
import { ArmorerLevels_31_35 } from "./level-31-35";
import { ArmorerLevels_36_40 } from "./level-36-40";
import { ArmorerLevels_41_45 } from "./level-41-45";
import { ArmorerLevels_46_50 } from "./level-46-50";
import { ArmorerLevels_51_55 } from "./level-51-55";
import { ArmorerLevels_56_60 } from "./level-56-60";
import { ArmorerLevels_61_65 } from "./level-61-65";
import { ArmorerLevels_66_70 } from "./level-66-70";
import { ArmorerLevels_71_75 } from "./level-71-75";
import { ArmorerLevels_76_80 } from "./level-76-80";

export const ArmorerLevelBased = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.level-based`;

    return {
        name: "Level Based",
        storageKey,
        subGroups: [
            ArmorerLevels_1_5(storageKey),
            ArmorerLevels_6_10(storageKey),
            ArmorerLevels_11_15(storageKey),
            ArmorerLevels_16_20(storageKey),
            ArmorerLevels_21_25(storageKey),
            ArmorerLevels_26_30(storageKey),
            ArmorerLevels_31_35(storageKey),
            ArmorerLevels_36_40(storageKey),
            ArmorerLevels_41_45(storageKey),
            ArmorerLevels_46_50(storageKey),
            ArmorerLevels_51_55(storageKey),
            ArmorerLevels_56_60(storageKey),
            ArmorerLevels_61_65(storageKey),
            ArmorerLevels_66_70(storageKey),
            ArmorerLevels_71_75(storageKey),
            ArmorerLevels_76_80(storageKey),
        ]
    };
};

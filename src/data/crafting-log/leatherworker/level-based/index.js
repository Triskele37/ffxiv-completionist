import { LeatherworkerLevels_1_5 } from "./level-1-5";
import { LeatherworkerLevels_6_10 } from "./level-6-10";
import { LeatherworkerLevels_11_15 } from "./level-11-15";
import { LeatherworkerLevels_16_20 } from "./level-16-20";
import { LeatherworkerLevels_21_25 } from "./level-21-25";
import { LeatherworkerLevels_26_30 } from "./level-26-30";
import { LeatherworkerLevels_31_35 } from "./level-31-35";
import { LeatherworkerLevels_36_40 } from "./level-36-40";
import { LeatherworkerLevels_41_45 } from "./level-41-45";
import { LeatherworkerLevels_46_50 } from "./level-46-50";
import { LeatherworkerLevels_51_55 } from "./level-51-55";
import { LeatherworkerLevels_56_60 } from "./level-56-60";
import { LeatherworkerLevels_61_65 } from "./level-61-65";
import { LeatherworkerLevels_66_70 } from "./level-66-70";
import { LeatherworkerLevels_71_75 } from "./level-71-75";
import { LeatherworkerLevels_76_80 } from "./level-76-80";

export const LeatherworkerLevelBased = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.level-based`;

    return {
        name: "Level Based",
        storageKey,
        subGroups: [
            LeatherworkerLevels_1_5(storageKey),
            LeatherworkerLevels_6_10(storageKey),
            LeatherworkerLevels_11_15(storageKey),
            LeatherworkerLevels_16_20(storageKey),
            LeatherworkerLevels_21_25(storageKey),
            LeatherworkerLevels_26_30(storageKey),
            LeatherworkerLevels_31_35(storageKey),
            LeatherworkerLevels_36_40(storageKey),
            LeatherworkerLevels_41_45(storageKey),
            LeatherworkerLevels_46_50(storageKey),
            LeatherworkerLevels_51_55(storageKey),
            LeatherworkerLevels_56_60(storageKey),
            LeatherworkerLevels_61_65(storageKey),
            LeatherworkerLevels_66_70(storageKey),
            LeatherworkerLevels_71_75(storageKey),
            LeatherworkerLevels_76_80(storageKey),
        ]
    };
};

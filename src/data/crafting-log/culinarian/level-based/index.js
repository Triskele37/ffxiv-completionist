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

export const CulinarianLevelBased = function (parentStorageKey) {
    const storageKey = `${parentStorageKey}.level-based`;

    return {
        name: 'Level Based',
        storageKey,
        subGroups: [
            CulinarianLevels_1_5(storageKey),
            CulinarianLevels_6_10(storageKey),
            CulinarianLevels_11_15(storageKey),
            CulinarianLevels_16_20(storageKey),
            CulinarianLevels_21_25(storageKey),
            CulinarianLevels_26_30(storageKey),
            CulinarianLevels_31_35(storageKey),
            CulinarianLevels_36_40(storageKey),
            CulinarianLevels_41_45(storageKey),
            CulinarianLevels_46_50(storageKey),
            CulinarianLevels_51_55(storageKey),
            CulinarianLevels_56_60(storageKey),
            CulinarianLevels_61_65(storageKey),
            CulinarianLevels_66_70(storageKey),
            CulinarianLevels_71_75(storageKey),
            CulinarianLevels_76_80(storageKey),
        ]
    };
};
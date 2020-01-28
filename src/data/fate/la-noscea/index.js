import { EasternLaNosceaFATEs } from "./eastern-la-noscea";
import { LowerLaNosceaFATEs } from "./lower-la-noscea";
import { MiddleLaNosceaFATEs } from "./middle-la-noscea";
import { OuterLaNosceaFATEs } from "./outer-la-noscea";
import { UpperLaNosceaFATEs } from "./upper-la-noscea";
import { WesternLaNosceaFATEs } from "./western-la-noscea";

export const LaNosceaFATEs = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.la-noscea`;

    return {
        name: "La Noscea",
        storageKey,
        groupKeys: [
            "EasternLaNoscea",
            "LowerLaNoscea",
            "MiddleLaNoscea",
            "OuterLaNoscea",
            "UpperLaNoscea",
            "WesternLaNoscea",
        ],
        // Groups
        EasternLaNoscea: EasternLaNosceaFATEs(storageKey),
        LowerLaNoscea: LowerLaNosceaFATEs(storageKey),
        MiddleLaNoscea: MiddleLaNosceaFATEs(storageKey),
        OuterLaNoscea: OuterLaNosceaFATEs(storageKey),
        UpperLaNoscea: UpperLaNosceaFATEs(storageKey),
        WesternLaNoscea: WesternLaNosceaFATEs(storageKey),
    };
};

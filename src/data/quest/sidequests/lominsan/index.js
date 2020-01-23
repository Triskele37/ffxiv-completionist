import { LimsaLominsa } from "./limsa-lominsa";
import { WolvesDenPier } from "./wolves-den-pier";
import { MiddleLaNoscea } from "./middle-la-noscea";
import { LowerLaNoscea } from "./lower-la-noscea";
import { EasternLaNoscea } from "./eastern-la-noscea";
import { WesternLaNoscea } from "./western-la-noscea";
import { UpperLaNoscea } from "./upper-la-noscea";
import { OuterLaNoscea } from "./outer-la-noscea";

export const Lominsan = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.lominsan`;

    return {
        name: "Lominsan",
        storageKey,
        subGroups: [
            LimsaLominsa(storageKey),
            WolvesDenPier(storageKey),
            MiddleLaNoscea(storageKey),
            LowerLaNoscea(storageKey),
            EasternLaNoscea(storageKey),
            WesternLaNoscea(storageKey),
            UpperLaNoscea(storageKey),
            OuterLaNoscea(storageKey),
        ]
    };
};

import { TheRubySea } from "./the-ruby-sea";
import { Yanxia } from "./yanxia";
import { TheAzimSteppe } from "./the-azim-steppe";

export const Othardian = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.othardian`;

    return {
        name: "Othardian",
        storageKey,
        subGroups: [
            TheRubySea(storageKey),
            Yanxia(storageKey),
            TheAzimSteppe(storageKey),
        ]
    };
};

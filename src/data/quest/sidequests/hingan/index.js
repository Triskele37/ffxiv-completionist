import { Quest_Sidequests_Hingan_Kugane } from "./kugane";

export const Quest_Sidequests_Hingan = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.hingan`;

    return {
        name: "Hingan",
        storageKey,
        groupKeys: [
            "Kugane",
        ],
        // Groups
        Kugane: Quest_Sidequests_Hingan_Kugane(storageKey),
    };
};

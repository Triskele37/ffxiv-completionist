import { Quest_Sidequests_Il_Mheg_Il_Mheg } from "./il-mheg";

export const Quest_Sidequests_Il_Mheg = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.il-mheg`;

    return {
        name: "Il Mheg",
        storageKey,
        groupKeys: [
            "Il_Mheg",
        ],
        // Groups
        Il_Mheg: Quest_Sidequests_Il_Mheg_Il_Mheg(storageKey),
    };
};

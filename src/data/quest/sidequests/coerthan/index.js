import { Quest_Sidequests_Coerthan_Coerthas_Central_Highlands } from "./coerthas-central-highlands";
import { Quest_Sidequests_Coerthan_Coerthas_Western_Highlands } from "./coerthas-western-highlands";

export const Quest_Sidequests_Coerthan = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.coerthan`;

    return {
        name: "Coerthan",
        storageKey,
        groupKeys: [
            "Coerthas_Central_Highlands",
            "Coerthas_Western_Highlands",
        ],
        // Groups
        Coerthas_Central_Highlands: Quest_Sidequests_Coerthan_Coerthas_Central_Highlands(storageKey),
        Coerthas_Western_Highlands: Quest_Sidequests_Coerthan_Coerthas_Western_Highlands(storageKey),
    };
};

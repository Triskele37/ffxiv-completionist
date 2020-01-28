import { Quest_Sidequests_Ishgardian_Ishgard } from "./ishgard";

export const Quest_Sidequests_Ishgardian = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.ishgardian`;

    return {
        name: "Ishgardian",
        storageKey,
        groupKeys: [
            "Ishgard"
        ],
        // Groups
        Ishgard: Quest_Sidequests_Ishgardian_Ishgard(storageKey)
    };
};

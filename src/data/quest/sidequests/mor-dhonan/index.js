import { Quest_Sidequests_Mor_Dhonan_Mor_Dhona } from "./mor-dhona";

export const Quest_Sidequests_Mor_Dhonan = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.mor-dhonan`;

    return {
        name: "Mor Dhonan",
        storageKey,
        groupKeys: [
            "Mor_Dhona",
        ],
        // Groups
        Mor_Dhona: Quest_Sidequests_Mor_Dhonan_Mor_Dhona(storageKey)
    };
};

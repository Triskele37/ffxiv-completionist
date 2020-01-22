import { MorDhona } from "./mor-dhona";

export const MorDhonan = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.mor-dhonan`;

    return {
        name: "Mor Dhonan",
        storageKey,
        subGroups: [
            MorDhona(storageKey)
        ]
    };
};

import { Quest_Sidequests_Kholusia_Kholusia } from "./kholusia";
import { Quest_Sidequests_Kholusia_Eulmore } from "./eulmore";

export const Quest_Sidequests_Kholusia = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.kholusia`;

    return {
        name: "Kholusia",
        storageKey,
        groupKeys: [
            "Kholusia",
            "Eulmore",
        ],
        // Groups
        Kholusia: Quest_Sidequests_Kholusia_Kholusia(storageKey),
        Eulmore: Quest_Sidequests_Kholusia_Eulmore(storageKey),
    };
};

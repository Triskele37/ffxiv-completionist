import { Kholusia as KholusiaQuests } from "./kholusia";
import { Eulmore } from "./eulmore";

export const Kholusia = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.kholusia`;

    return {
        name: "Kholusia",
        storageKey,
        subGroups: [
            KholusiaQuests(storageKey),
            Eulmore(storageKey),
        ]
    };
};

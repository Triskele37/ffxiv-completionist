import { Kugane } from "./kugane";

export const Hingan = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.hingan`;

    return {
        name: "Hingan",
        storageKey,
        subGroups: [
            Kugane(storageKey),
        ]
    };
};

import { Ishgard } from "./ishgard";

export const Ishgardian = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.ishgardian`;

    return {
        name: "Ishgardian",
        storageKey,
        subGroups: [
            Ishgard(storageKey)
        ]
    };
};

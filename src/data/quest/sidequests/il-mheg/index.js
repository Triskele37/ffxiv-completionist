import { IlMheg as IlMhegQuests } from "./il-mheg";

export const IlMheg = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.il-mheg`;

    return {
        name: "Il Mheg",
        storageKey,
        subGroups: [
            IlMhegQuests(storageKey),
        ]
    };
};

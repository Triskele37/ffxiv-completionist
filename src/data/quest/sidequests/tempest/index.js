import { TheTempest } from "./the-tempest";

export const Tempest = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.tempest`;

    return {
        name: "Tempest",
        storageKey,
        subGroups: [
            TheTempest(storageKey),
        ]
    };
};

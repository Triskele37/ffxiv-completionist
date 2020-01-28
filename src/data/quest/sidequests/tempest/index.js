import { Quest_Sidequests_Tempest_The_Tempest } from "./the-tempest";

export const Quest_Sidequests_Tempest = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.tempest`;

    return {
        name: "Tempest",
        storageKey,
        groupKeys: [
            "The_Tempest",
        ],
        // Groups
        The_Tempest: Quest_Sidequests_Tempest_The_Tempest(storageKey),
    };
};

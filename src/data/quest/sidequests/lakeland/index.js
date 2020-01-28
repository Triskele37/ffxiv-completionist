import { Quest_Sidequests_Lakeland_Lakeland } from "./lakeland";
import { Quest_Sidequests_Lakeland_The_Crystarium } from "./the-crystarium";

export const Quest_Sidequests_Lakeland = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.lakeland`;

    return {
        name: "Lakeland",
        storageKey,
        groupKeys: [
            "Lakeland",
            "The_Crystarium",
        ],
        // Groups
        Lakeland: Quest_Sidequests_Lakeland_Lakeland(storageKey),
        The_Crystarium: Quest_Sidequests_Lakeland_The_Crystarium(storageKey),
    };
};

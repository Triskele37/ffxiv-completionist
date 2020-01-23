import { Lakeland as LakelandQuests } from "./lakeland";
import { TheCrystarium } from "./the-crystarium";

export const Lakeland = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.lakeland`;

    return {
        name: "Lakeland",
        storageKey,
        subGroups: [
            LakelandQuests(storageKey),
            TheCrystarium(storageKey),
        ]
    };
};

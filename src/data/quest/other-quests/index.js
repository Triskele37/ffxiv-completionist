import { Quest_Other_Grand_Company } from "./grand-company-quests";
import { Quest_Other_Seasonal } from "./seasonal-quests";
import { Quest_Other_Special } from "./special-quests";

export const Quest_Other = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.other`;

    return {
        name: "Other",
        storageKey,
        groupKeys: [
            "Grand_Company",
            "Seasonal",
            "Special",
        ],
        // Groups
        Grand_Company: Quest_Other_Grand_Company(storageKey),
        Seasonal: Quest_Other_Seasonal(storageKey),
        Special: Quest_Other_Special(storageKey),
    };
};

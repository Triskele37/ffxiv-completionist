import { GrandCompanyQuests } from "./grand-company-quests";
import { SeasonalQuests } from "./seasonal-quests";
import { SpecialQuests } from "./special-quests";

export const OtherQuests = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.other`;

    return {
        name: "Other",
        storageKey,
        subGroups: [
            GrandCompanyQuests(storageKey),
            SeasonalQuests(storageKey),
            SpecialQuests(storageKey),
        ]
    };
};

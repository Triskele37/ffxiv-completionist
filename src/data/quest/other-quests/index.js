import { GrandCompanyQuests } from "./grand-company-quests";
import { SeasonalQuests } from "./seasonal-quests";
import { SpecialQuests } from "./special-quests";

export const OtherQuests = {
    name: "Other",
    subGroups: [
        GrandCompanyQuests,
        SeasonalQuests,
        SpecialQuests,
    ]
};

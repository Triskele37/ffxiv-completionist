import { FacetOfForgingQuests } from "./facet-of-forging-quests";
import { FacetOfCraftingQuests } from "./facet-of-crafting-quests";
import { FacetOfNourishingQuests } from "./facet-of-nourishing-quests";
import { FacetOfGatheringQuests } from "./facet-of-gathering-quests";
import { FacetOfFishingQuests } from "./facet-of-fishing-quests";

export const CrystallineMeanQuests = {
    name: "Crystalline Mean",
    subGroups: [
        FacetOfForgingQuests,
        FacetOfCraftingQuests,
        FacetOfNourishingQuests,
        FacetOfGatheringQuests,
        FacetOfFishingQuests,
    ],
    tasks: [
        {
            level: "70",
            name: "The Crystalline Mean"
        }, {
            level: "80",
            name: "For Every Child a Star"
        }
    ]
};

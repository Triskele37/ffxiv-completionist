import { Quest_Sidequests_Dravanian_Matoyas_Cave } from "./matoyas-cave";
import { Quest_Sidequests_Dravanian_Idyllshire } from "./idyllshire";
import { Quest_Sidequests_Dravanian_The_Dravanian_Forelands } from "./the-dravanian-forelands";
import { Quest_Sidequests_Dravanian_The_Dravanian_Hinterlands } from "./the-dravanian-hinterlands";
import { Quest_Sidequests_Dravanian_The_Churning_Mists } from "./the-churning-mists";

export const Quest_Sidequests_Dravanian = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.dravanian`;

    return {
        name: "Dravanian",
        storageKey,
        groupKeys: [
            "Matoyas_Cave",
            "Idyllshire",
            "The_Dravanian_Forelands",
            "The_Dravanian_Hinterlands",
            "The_Churning_Mists",
        ],
        // Groups
        Matoyas_Cave: Quest_Sidequests_Dravanian_Matoyas_Cave(storageKey),
        Idyllshire: Quest_Sidequests_Dravanian_Idyllshire(storageKey),
        The_Dravanian_Forelands: Quest_Sidequests_Dravanian_The_Dravanian_Forelands(storageKey),
        The_Dravanian_Hinterlands: Quest_Sidequests_Dravanian_The_Dravanian_Hinterlands(storageKey),
        The_Churning_Mists: Quest_Sidequests_Dravanian_The_Churning_Mists(storageKey),
    };
};

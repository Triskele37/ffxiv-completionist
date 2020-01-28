import { Quest_Other_Seasonal_Heavensturn } from "./heavensturn-events";
import { Quest_Other_Seasonal_Valentiones_Day } from "./valentiones-day-events";
import { Quest_Other_Seasonal_Little_Ladies_Day } from "./little-ladies-day-events";
import { Quest_Other_Seasonal_Egg_Hunts } from "./egg-hunts";
import { Quest_Other_Seasonal_Gold_Saucer_Festivities } from "./gold-saucer-festivities";
import { Quest_Other_Seasonal_Moonfire_Faire } from "./moonfire-faire-events";
import { Quest_Other_Seasonal_Rising } from "./rising-events";
import { Quest_Other_Seasonal_All_Saints_Wake } from "./all-saints-wake-events";
import { Quest_Other_Seasonal_Starlight_Celebration } from "./starlight-celebration-events";

export const Quest_Other_Seasonal = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.seasonal`;

    return {
        name: "Seasonal",
        storageKey,
        groupKeys: [
            "Heavensturn",
            "Valentiones_Day",
            "Little_Ladies_Day",
            "Egg_Hunts",
            "Gold_Saucer_Festivities",
            "Moonfire_Faire",
            "Rising",
            "All_Saints_Wake",
            "Starlight_Celebration",
        ],
        // Groups
        Heavensturn: Quest_Other_Seasonal_Heavensturn(storageKey),
        Valentiones_Day: Quest_Other_Seasonal_Valentiones_Day(storageKey),
        Little_Ladies_Day: Quest_Other_Seasonal_Little_Ladies_Day(storageKey),
        Egg_Hunts: Quest_Other_Seasonal_Egg_Hunts(storageKey),
        Gold_Saucer_Festivities: Quest_Other_Seasonal_Gold_Saucer_Festivities(storageKey),
        Moonfire_Faire: Quest_Other_Seasonal_Moonfire_Faire(storageKey),
        Rising: Quest_Other_Seasonal_Rising(storageKey),
        All_Saints_Wake: Quest_Other_Seasonal_All_Saints_Wake(storageKey),
        Starlight_Celebration: Quest_Other_Seasonal_Starlight_Celebration(storageKey),
    };
};

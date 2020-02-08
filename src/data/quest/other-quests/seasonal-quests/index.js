import { DataGroup } from "../../../DataGroup";

import { Quests_Other_Seasonal_Heavensturn } from "./heavensturn-events";
import { Quests_Other_Seasonal_Valentiones_Day } from "./valentiones-day-events";
import { Quests_Other_Seasonal_Little_Ladies_Day } from "./little-ladies-day-events";
import { Quests_Other_Seasonal_Egg_Hunts } from "./egg-hunts";
import { Quests_Other_Seasonal_Gold_Saucer_Festivities } from "./gold-saucer-festivities";
import { Quests_Other_Seasonal_Moonfire_Faire } from "./moonfire-faire-events";
import { Quests_Other_Seasonal_Rising } from "./rising-events";
import { Quests_Other_Seasonal_All_Saints_Wake } from "./all-saints-wake-events";
import { Quests_Other_Seasonal_Starlight_Celebration } from "./starlight-celebration-events";

export const Quests_Other_Seasonal = function(parent) {
    const data = new DataGroup("Seasonal", parent);
    data.defaultCompletion = "X";

    data.initializeSubGroups([
        Quests_Other_Seasonal_Heavensturn,
        Quests_Other_Seasonal_Valentiones_Day,
        Quests_Other_Seasonal_Little_Ladies_Day,
        Quests_Other_Seasonal_Egg_Hunts,
        Quests_Other_Seasonal_Gold_Saucer_Festivities,
        Quests_Other_Seasonal_Moonfire_Faire,
        Quests_Other_Seasonal_Rising,
        Quests_Other_Seasonal_All_Saints_Wake,
        Quests_Other_Seasonal_Starlight_Celebration,
    ]);

    return data;
};

import { DataGroup } from "../../../../DataGroup";

import { Duty_Quests_Other_Seasonal_Heavensturn } from "./heavensturn-events";
import { Duty_Quests_Other_Seasonal_Valentiones_Day } from "./valentiones-day-events";
import { Duty_Quests_Other_Seasonal_Little_Ladies_Day } from "./little-ladies-day-events";
import { Duty_Quests_Other_Seasonal_Egg_Hunts } from "./egg-hunts";
import { Duty_Quests_Other_Seasonal_Gold_Saucer_Festivities } from "./gold-saucer-festivities";
import { Duty_Quests_Other_Seasonal_Moonfire_Faire } from "./moonfire-faire-events";
import { Duty_Quests_Other_Seasonal_Rising } from "./rising-events";
import { Duty_Quests_Other_Seasonal_All_Saints_Wake } from "./all-saints-wake-events";
import { Duty_Quests_Other_Seasonal_Starlight_Celebration } from "./starlight-celebration-events";

export const Duty_Quests_Other_Seasonal = function(parent) {
    const data = new DataGroup("Seasonal", parent);
    data.defaultCompletion = "X";

    data.columnConfig = [
        { header: "Level", key: "Level", centered: true },
        { header: "Name", key: "Name" },
        { header: "Year", key: "Year", centered: true, filterable: true }
    ];

    data.initializeSubGroups([
        Duty_Quests_Other_Seasonal_Heavensturn,
        Duty_Quests_Other_Seasonal_Valentiones_Day,
        Duty_Quests_Other_Seasonal_Little_Ladies_Day,
        Duty_Quests_Other_Seasonal_Egg_Hunts,
        Duty_Quests_Other_Seasonal_Gold_Saucer_Festivities,
        Duty_Quests_Other_Seasonal_Moonfire_Faire,
        Duty_Quests_Other_Seasonal_Rising,
        Duty_Quests_Other_Seasonal_All_Saints_Wake,
        Duty_Quests_Other_Seasonal_Starlight_Celebration,
    ]);

    return data;
};

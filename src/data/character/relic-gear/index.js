import { DataGroup } from "../../DataGroup";

import { Character_Relic_Gear_Zodiac } from "./zodiac";
import { Character_Relic_Gear_Anima } from "./anima";
import { Character_Relic_Gear_Eureka } from "./eureka";
import { Character_Relic_Gear_Resistance } from "./resistance";
import { Character_Relic_Gear_Skysteel_Tools } from "./skysteel-tool";

export const Character_Relic_Gear = function(parent) {
    const data = new DataGroup("Relic Gear", parent);

    data.columnConfig = [
        { header: "Job", key: "job", filterable: true },
        { header: "iLvl", key: "iLevel", filterable: true, filterType: "number", centered: true },
        { header: "Name", key: "name" },
        { header: "Requirements", key: "requirements" }
    ];

    data.initializeSubGroups([
        Character_Relic_Gear_Zodiac,
        Character_Relic_Gear_Anima,
        Character_Relic_Gear_Eureka,
        Character_Relic_Gear_Resistance,
        Character_Relic_Gear_Skysteel_Tools,
    ]);

    return data;
};

import { DataGroup } from "../../DataGroup";
import { loadJson } from "../../loader";

import { Character_Relic_Gear_Zodiac } from "./zodiac";
import { Character_Relic_Gear_Anima } from "./anima";
import { Character_Relic_Gear_Eureka } from "./eureka";
import { Character_Relic_Gear_Resistance } from "./resistance";
import { Character_Relic_Gear_Skysteel_Tools } from "./skysteel-tool";

export const Character_Relic_Gear = function(parent) {
    const json = loadJson('./character/relic-gear/index', parent.lang);
    const data = new DataGroup(json.groupName, parent);

    data.initializeColumnConfig([
        { key: "job", filterable: true },
        { key: "iLevel", filterable: true, filterType: "number", centered: true },
        { key: "name" },
        { key: "requirements" }
    ], json.headers);

    data.initializeSubGroups([
        Character_Relic_Gear_Zodiac,
        Character_Relic_Gear_Anima,
        Character_Relic_Gear_Eureka,
        Character_Relic_Gear_Resistance,
        Character_Relic_Gear_Skysteel_Tools,
    ]);

    return data;
};

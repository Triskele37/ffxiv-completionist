import { DataGroup } from "../../DataGroup";

import { Collectables_Relic_Gear_Zodiac } from "./zodiac";
import { Collectables_Relic_Gear_Anima } from "./anima";
import { Collectables_Relic_Gear_Eureka } from "./eureka";

export const Collectables_Relic_Gear = function(name, parent) {
    const data = new DataGroup(name, parent);

    data.columnConfig = [
        { header: "iLvl", key: "iLvl", filterable: true, filterType: "number", centered: true },
        { header: "Name", key: "name" },
        { header: "Job", key: "job", filterable: true },
        { header: "Slot", key: "slot", filterable: true },
    ];

    data.initializeSubGroups([
        Collectables_Relic_Gear_Zodiac,
        Collectables_Relic_Gear_Anima,
        Collectables_Relic_Gear_Eureka,
    ]);

    return data;
};

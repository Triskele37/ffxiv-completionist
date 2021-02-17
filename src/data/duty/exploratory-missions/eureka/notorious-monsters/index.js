import { DataGroup } from "../../../../DataGroup";

import { Duty_Exploratory_Missions_Eureka_Notorious_Monsters_Anemos } from "./anemos";
import { Duty_Exploratory_Missions_Eureka_Notorious_Monsters_Pagos } from "./pagos";
import { Duty_Exploratory_Missions_Eureka_Notorious_Monsters_Pyros } from "./pyros";
import { Duty_Exploratory_Missions_Eureka_Notorious_Monsters_Hydatos } from "./hydatos";

export const Duty_Exploratory_Missions_Eureka_Notorious_Monsters = function(parent) {
    const data = new DataGroup("Notorious Monsters", parent);
    data.name_en = "Notorious Monsters";

    data.columnConfig = [
        { header: "Level", key: "level", centered: true },
        { header: "FATE", key: "name" },
        { header: "Notorious Monster", key: "notoriousMonster" },
        { header: "Location", key: "location" },
        { header: "Light", key: "light", centered: true, filterable: true },
        { header: "Reward", key: "reward" }
    ];

    data.initializeSubGroups([
        Duty_Exploratory_Missions_Eureka_Notorious_Monsters_Anemos,
        Duty_Exploratory_Missions_Eureka_Notorious_Monsters_Pagos,
        Duty_Exploratory_Missions_Eureka_Notorious_Monsters_Pyros,
        Duty_Exploratory_Missions_Eureka_Notorious_Monsters_Hydatos,
	]);

    return data;
};

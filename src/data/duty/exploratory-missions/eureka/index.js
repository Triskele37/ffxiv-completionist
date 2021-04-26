import { DataGroup } from "../../../DataGroup";

import { Duty_Exploratory_Missions_Eureka_Notorious_Monsters } from "./notorious-monsters";

const basePath = "./duty/exploratory-missions/eureka";
export const Duty_Exploratory_Missions_Eureka = function(parent) {
    const group = DataGroup.fromJSON(parent, `${basePath}/index`);

    group.subGroups = [
        DataGroup.fromJSON(group, `${basePath}/elemental-level`, {
            name: { centered: true },
            zone: { filterable: true }
        }),
        DataGroup.fromJSON(group, `${basePath}/aetherytes`, {
            zone: { filterable: true },
            eLvlReq: { centered: true }
        }),
        Duty_Exploratory_Missions_Eureka_Notorious_Monsters(group),
        DataGroup.fromJSON(group, `${basePath}/logos-actions`, {
            equippableBy: { filterable: true }
        }),
        DataGroup.fromJSON(group, `${basePath}/duties`),
    ];

    return group;
};

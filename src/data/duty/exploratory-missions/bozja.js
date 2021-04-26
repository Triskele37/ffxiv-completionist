import { DataGroup } from "../../DataGroup";

const basePath = "./duty/exploratory-missions/bozja";
export const Duty_Exploratory_Missions_Bozja = function(parent) {
    const group = DataGroup.fromJSON(parent, `${basePath}/index`);

    group.initializeSubGroups([
        DataGroup.fromJSON(parent, `${basePath}/resistance-rank`, {
            name: { centered: true },
            zone: { filterable: true },
        }),
        DataGroup.fromJSON(parent, `${basePath}/aetherytes`, {
            rankReq: { centered: true }
        }),
        DataGroup.fromJSON(parent, `${basePath}/duties`, {
            category: { filterable: true },
            type: { filterable: true },
        }),
        DataGroup.fromJSON(parent, `${basePath}/lost-actions`, {
            category: { filterable: true },
            fragment: { filterable: true },
        }),
        DataGroup.fromJSON(parent, `${basePath}/duties`, {
            rankReq: { centered: true }
        }),
    ]);

    return group;
};

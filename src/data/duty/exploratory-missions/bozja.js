import { DataGroup } from "../../DataGroup";

const basePath = "./duty/exploratory-missions/bozja";
export const Duty_Exploratory_Missions_Bozja = function(parent) {
    const group = DataGroup.fromJSON(parent, `${basePath}/index`);

    const resistanceHonors = DataGroup.fromJSON(group, `${basePath}/resistance-honors`);
    resistanceHonors.isNumericCompletion = true;
    resistanceHonors.defaultCompletion = "0";

    group.subGroups = [
        DataGroup.fromJSON(group, `${basePath}/resistance-rank`, {
            name: { centered: true },
            zone: { filterable: true },
        }),
        resistanceHonors,
        DataGroup.fromJSON(group, `${basePath}/aetherytes`, {
            rankReq: { centered: true }
        }),
        DataGroup.fromJSON(group, `${basePath}/events`, {
            category: { filterable: true },
            type: { filterable: true },
        }),
        DataGroup.fromJSON(group, `${basePath}/lost-actions`, {
            category: { filterable: true },
            fragment: { filterable: true },
        }),
        DataGroup.fromJSON(group, `${basePath}/duties`, {
            rankReq: { centered: true }
        }),
    ];

    return group;
};

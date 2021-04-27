import { DataGroup } from "../DataGroup";

export const Travel_Aetherytes = function(parent) {
    return DataGroup.fromJSON(parent, "./travel/aetherytes", {
        type: { filterable: true },
        region: { filterable: true },
        zone: { filterable: true },
    });
};

import { DataGroup } from "../DataGroup";

export const Travel_Porters = function(parent) {
    return DataGroup.fromJSON(parent, "./travel/porters", {
        type: { filterable: true },
        region: { filterable: true },
        zone: { filterable: true },
    });
};

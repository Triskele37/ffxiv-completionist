import { DataGroup } from "../DataGroup";

export const Character_Fashion_Accessories = function(parent) {
    return DataGroup.fromJSON(parent, "./character/fashion-accessories", {
        category: { filterable: true },
        patch: { filterable: true },
    });
};

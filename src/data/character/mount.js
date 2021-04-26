import { DataGroup } from "../DataGroup";

export const Character_Mount_Guide = function(parent) {
    return DataGroup.fromJSON(parent, "./character/mount-guide", {
        category: { filterable: true },
        patch: { filterable: true }
    });
};

import { DataGroup } from "../DataGroup";

export const Character_Minion_Guide = function(parent) {
    return DataGroup.fromJSON(parent, "./character/minion-guide", {
        category: { filterable: true},
        patch: { filterable: true},
    })
};

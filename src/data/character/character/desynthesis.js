import { DataGroup } from "../../DataGroup";

export const Character_Character_Desynthesis = function(parent) {
    const group = DataGroup.fromJSON(parent, "./character/character/desynthesis", {
        patch: { filterable: true }
    });

    group.isNumericCompletion = true;
    group.numericDecimal = 2;

    return group;
};

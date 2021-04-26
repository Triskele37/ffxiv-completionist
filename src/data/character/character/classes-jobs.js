import { DataGroup } from "../../DataGroup";

export const Character_Character_Classes_Job = function(parent) {
    const group = DataGroup.fromJSON(parent, "./character/character/classes-jobs", {
        role: { filterable: true },
        patch: { filterable: true }
    });

    group.isNumericCompletion = true;
    group.defaultCompletion = "0";

    return group;
};

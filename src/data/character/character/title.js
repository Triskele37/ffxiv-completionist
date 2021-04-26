import { DataGroup } from "../../DataGroup";

export const Character_Character_Title = function(parent) {
    const group = DataGroup.fromJSON(parent, "./character/character/title", {
        category: { filterable: true },
        patch: { filterable: true },
    });

    group.tasks.forEach((task) => {
        if(task.category === 'Legacy') task.changeCompletionFlag("X");
    });

    return group;
};

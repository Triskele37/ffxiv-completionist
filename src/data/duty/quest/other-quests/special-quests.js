import { DataGroup } from "../../../DataGroup";

const basePath = "./duty/quest/other-quests/special-quests";
export const Duty_Quests_Other_Special = function(parent) {
    const group = DataGroup.fromJSON(parent, `${basePath}/special-quests`);

    group.defaultCompletion = "X";

    group.subGroups = [
        DataGroup.fromJSON(group, `${basePath}/collaboration-quests`, {
            Level: { centered: true },
            Collaboration: { filterable: true },
            Year: { centered: true }
        }),
    ];

    return group;
};

import { DataGroup } from "../../../DataGroup";

import { Duty_Quests_Other_Grand_Company } from "./grand-company-quests";
import { Duty_Quests_Other_Seasonal } from "./seasonal-quests";
import { Duty_Quests_Other_Special } from "./special-quests";

const basePath = "./duty/quest/other-quests";
export const Duty_Quests_Other = function(parent) {
    const group = DataGroup.fromJSON(parent, `${basePath}/index`);

    group.subGroups = [
        Duty_Quests_Other_Grand_Company(group),
        Duty_Quests_Other_Seasonal(group),
        Duty_Quests_Other_Special(group),
        DataGroup.fromJSON(group, `${basePath}/quasi-quests`, {
            level: { centered: true }
        }),
    ];

    return group;
};

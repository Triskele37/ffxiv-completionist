import { DataGroup } from "../../../DataGroup";

import { Duty_FATEs_Dravania_The_Churning_Mists } from "./the-churning-mists";
import { Duty_FATEs_Dravania_The_Dravanian_Forelands } from "./the-dravanian-forelands";
import { Duty_FATEs_Dravania_The_Dravanian_Hinterlands } from "./the-dravanian-hinterlands";

export const Duty_FATEs_Dravania = function(parent) {
    const data = new DataGroup("Dravania", parent);
    data.name_en = "Dravania";
    data.name_fr = "Dravania";

    data.initializeSubGroups([
        Duty_FATEs_Dravania_The_Churning_Mists,
        Duty_FATEs_Dravania_The_Dravanian_Forelands,
        Duty_FATEs_Dravania_The_Dravanian_Hinterlands,
	]);

    return data;
};

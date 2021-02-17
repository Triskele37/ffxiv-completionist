import { DataGroup } from "../../../DataGroup";

import { Duty_FATEs_Othard_The_Azim_Steppe } from "./the-azim-steppe";
import { Duty_FATEs_Othard_The_Ruby_Sea } from "./the-ruby-sea";
import { Duty_FATEs_Othard_Yanxia } from "./yanxia";

export const Duty_FATEs_Othard = function(parent) {
    const data = new DataGroup("Othard", parent);
    data.name_en = "Othard";
    data.name_fr = "Othard";

    data.initializeSubGroups([
        Duty_FATEs_Othard_The_Azim_Steppe,
        Duty_FATEs_Othard_The_Ruby_Sea,
        Duty_FATEs_Othard_Yanxia,
	]);

    return data;
};

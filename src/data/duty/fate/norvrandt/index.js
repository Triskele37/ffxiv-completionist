import { DataGroup } from "../../../DataGroup";

import { Duty_FATEs_Norvrandt_Amh_Araeng } from "./amh-araeng";
import { Duty_FATEs_Norvrandt_Il_Mheg } from "./il-mheg";
import { Duty_FATEs_Norvrandt_Kholusia } from "./kholusia";
import { Duty_FATEs_Norvrandt_Lakeland } from "./lakeland";
import { Duty_FATEs_Norvrandt_The_Rak_Tika_Greatwood } from "./the-rak-tika-greatwood";
import { Duty_FATEs_Norvrandt_The_Tempest } from "./the-tempest";

export const Duty_FATEs_Norvrandt = function(parent) {
    const data = new DataGroup("Norvrandt", parent);
    data.name_en = "Norvrandt";
    data.name_fr = "Norvrandt";

    data.initializeSubGroups([
        Duty_FATEs_Norvrandt_Amh_Araeng,
        Duty_FATEs_Norvrandt_Il_Mheg,
        Duty_FATEs_Norvrandt_Kholusia,
        Duty_FATEs_Norvrandt_Lakeland,
        Duty_FATEs_Norvrandt_The_Rak_Tika_Greatwood,
        Duty_FATEs_Norvrandt_The_Tempest,
	]);

    return data;
};

import { DataGroup } from "../../DataGroup";

import { FATEs_Norvrandt_Amh_Araeng } from "./amh-araeng";
import { FATEs_Norvrandt_Il_Mheg } from "./il-mheg";
import { FATEs_Norvrandt_Kholusia } from "./kholusia";
import { FATEs_Norvrandt_Lakeland } from "./lakeland";
import { FATEs_Norvrandt_The_Rak_Tika_Greatwood } from "./the-rak-tika-greatwood";
import { FATEs_Norvrandt_The_Tempest } from "./the-tempest";

export const FATEs_Norvrandt = function(parent) {
    const data = new DataGroup("Norvrandt", parent);
    data.name_en = "Norvrandt";
    data.name_fr = "Norvrandt";

    data.initializeSubGroups([
        FATEs_Norvrandt_Amh_Araeng,
        FATEs_Norvrandt_Il_Mheg,
        FATEs_Norvrandt_Kholusia,
        FATEs_Norvrandt_Lakeland,
        FATEs_Norvrandt_The_Rak_Tika_Greatwood,
        FATEs_Norvrandt_The_Tempest,
	]);

    return data;
};

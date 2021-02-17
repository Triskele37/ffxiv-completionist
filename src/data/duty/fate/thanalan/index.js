import { DataGroup } from "../../../DataGroup";

import { Duty_FATEs_Thanalan_Central } from "./central-thanalan";
import { Duty_FATEs_Thanalan_Eastern } from "./eastern-thanalan";
import { Duty_FATEs_Thanalan_Northern } from "./northern-thanalan";
import { Duty_FATEs_Thanalan_Southern } from "./southern-thanalan";
import { Duty_FATEs_Thanalan_Western } from "./western-thanalan";

export const Duty_FATEs_Thanalan = function(parent) {
    const data = new DataGroup("Thanalan", parent);
    data.name_en = "Thanalan";
    data.name_fr = "Thanalan";

    data.initializeSubGroups([
        Duty_FATEs_Thanalan_Central,
        Duty_FATEs_Thanalan_Eastern,
        Duty_FATEs_Thanalan_Northern,
        Duty_FATEs_Thanalan_Southern,
        Duty_FATEs_Thanalan_Western,
	]);

    return data;
};

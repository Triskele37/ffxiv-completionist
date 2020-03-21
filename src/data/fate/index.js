import { DataGroup } from "../DataGroup";
import { FATEColumnConfig } from "./columnConfigs";

import { FATEs_La_Noscea } from "./la-noscea";
import { FATEs_The_Black_Shroud } from "./black-shroud";
import { FATEs_Thanalan } from "./thanalan";
import { FATEs_Coerthas } from "./coerthas";
import { FATEs_Mor_Dhona } from "./mor-dhona";
import { FATEs_Abalathias_Spine } from "./abalathias-spine";
import { FATEs_Dravania } from "./dravania";
import { FATEs_The_Diadem } from "./diadem";
import { FATEs_Gyr_Abania } from "./gyr-abania";
import { FATEs_Othard } from "./othard";
import { FATEs_Eureka } from "./eureka";
import { FATEs_Norvrandt } from "./norvrandt";

/* https://xivapi.com/Fate */

export const FATEs = function(parent) {
    const data = new DataGroup("FATEs", parent);
    data.name_en = "FATEs";
    data.name_fr = "ALÉAs";

    data.columnConfig = FATEColumnConfig;

	data.initializeSubGroups([
        FATEs_La_Noscea,
        FATEs_The_Black_Shroud,
        FATEs_Thanalan,
        FATEs_Coerthas,
        FATEs_Mor_Dhona,
        FATEs_Abalathias_Spine,
        FATEs_Dravania,
        FATEs_The_Diadem,
        FATEs_Gyr_Abania,
        FATEs_Othard,
        FATEs_Eureka,
        FATEs_Norvrandt,
	]);

    return data;
};

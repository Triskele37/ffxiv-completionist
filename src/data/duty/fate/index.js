import { DataGroup } from "../../DataGroup";
import { FATEColumnConfig } from "./columnConfigs";

import { Duty_FATEs_La_Noscea } from "./la-noscea";
import { Duty_FATEs_The_Black_Shroud } from "./black-shroud";
import { Duty_FATEs_Thanalan } from "./thanalan";
import { Duty_FATEs_Coerthas } from "./coerthas";
import { Duty_FATEs_Mor_Dhona } from "./mor-dhona";
import { Duty_FATEs_Abalathias_Spine } from "./abalathias-spine";
import { Duty_FATEs_Dravania } from "./dravania";
import { Duty_FATEs_Gyr_Abania } from "./gyr-abania";
import { Duty_FATEs_Othard } from "./othard";
import { Duty_FATEs_Norvrandt } from "./norvrandt";

/* https://xivapi.com/Fate */

export const Duty_FATEs = function(parent) {
    const data = new DataGroup("FATEs", parent);
    data.name_en = "FATEs";
    data.name_fr = "Aléas";

    data.columnConfig = FATEColumnConfig;

	data.initializeSubGroups([
        Duty_FATEs_La_Noscea,
        Duty_FATEs_The_Black_Shroud,
        Duty_FATEs_Thanalan,
        Duty_FATEs_Coerthas,
        Duty_FATEs_Mor_Dhona,
        Duty_FATEs_Abalathias_Spine,
        Duty_FATEs_Dravania,
        Duty_FATEs_Gyr_Abania,
        Duty_FATEs_Othard,
        Duty_FATEs_Norvrandt,
	]);

    return data;
};

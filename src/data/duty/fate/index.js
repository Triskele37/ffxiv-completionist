import { DataGroup } from "../../DataGroup";

import { Duty_FATEs_La_Noscea } from "./la-noscea";
import { Duty_FATEs_The_Black_Shroud } from "./the-black-shroud";
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
    const group = DataGroup.fromJSON(parent, "./duty/fate/index", {
        level: { centered: true },
        type: { filterable: true }
    });

	group.subGroups = [
        Duty_FATEs_La_Noscea(group),
        Duty_FATEs_The_Black_Shroud(group),
        Duty_FATEs_Thanalan(group),
        Duty_FATEs_Coerthas(group),
        Duty_FATEs_Mor_Dhona(group),
        Duty_FATEs_Abalathias_Spine(group),
        Duty_FATEs_Dravania(group),
        Duty_FATEs_Gyr_Abania(group),
        Duty_FATEs_Othard(group),
        Duty_FATEs_Norvrandt(group),
	];

    return group;
};

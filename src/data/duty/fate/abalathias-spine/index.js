import { DataGroup } from "../../../DataGroup";

import { Duty_FATEs_Abalathias_Spine_The_Sea_of_Clouds } from "./the-sea-of-clouds";
import { Duty_FATEs_Abalathias_Spine_Azys_Lla } from "./azys-lla";

export const Duty_FATEs_Abalathias_Spine = function(parent) {
    const data = new DataGroup("Abalathia's Spine", parent);
    data.name_en = "Abalathia's Spine";
    data.name_fr = "Ablathia";

    data.initializeSubGroups([
        Duty_FATEs_Abalathias_Spine_The_Sea_of_Clouds,
        Duty_FATEs_Abalathias_Spine_Azys_Lla,
	]);

    return data;
};

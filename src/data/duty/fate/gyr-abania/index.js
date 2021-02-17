import { DataGroup } from "../../../DataGroup";

import { Duty_FATEs_Gyr_Abania_The_Fringes } from "./the-fringes";
import { Duty_FATEs_Gyr_Abania_The_Lochs } from "./the-lochs";
import { Duty_FATEs_Gyr_Abania_The_Peaks } from "./the-peaks";

export const Duty_FATEs_Gyr_Abania = function(parent) {
    const data = new DataGroup("Gyr Abania", parent);
    data.name_en = "Gyr Abania";
    data.name_fr = "Gyr Abania";

    data.initializeSubGroups([
        Duty_FATEs_Gyr_Abania_The_Fringes,
        Duty_FATEs_Gyr_Abania_The_Lochs,
        Duty_FATEs_Gyr_Abania_The_Peaks,
	]);

    return data;
};

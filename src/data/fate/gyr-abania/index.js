import { DataGroup } from "../../DataGroup";

import { FATEs_Gyr_Abania_The_Fringes } from "./the-fringes";
import { FATEs_Gyr_Abania_The_Lochs } from "./the-lochs";
import { FATEs_Gyr_Abania_The_Peaks } from "./the-peaks";

export const FATEs_Gyr_Abania = function(parent) {
    const data = new DataGroup("Gyr Abania", parent);
    data.name_en = "Gyr Abania";
    data.name_fr = "Gyr Abania";

    data.initializeSubGroups([
        FATEs_Gyr_Abania_The_Fringes,
        FATEs_Gyr_Abania_The_Lochs,
        FATEs_Gyr_Abania_The_Peaks,
	]);

    return data;
};

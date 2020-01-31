import { DataGroup } from "../../DataGroup";

import { FATEs_Gyr_Abania_The_Fringes } from "./the-fringes";
import { FATEs_Gyr_Abania_The_Lochs } from "./the-lochs";
import { FATEs_Gyr_Abania_The_Peaks } from "./the-peaks";

export const FATEs_Gyr_Abania = function(name, parent) {
    return new DataGroup(name, parent).initializeSubGroups([
        FATEs_Gyr_Abania_The_Fringes,
        FATEs_Gyr_Abania_The_Lochs,
        FATEs_Gyr_Abania_The_Peaks,
	]);
};

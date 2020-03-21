import { DataGroup } from "../../DataGroup";

import { FATEs_La_Noscea_Eastern } from "./eastern-la-noscea";
import { FATEs_La_Noscea_Lower } from "./lower-la-noscea";
import { FATEs_La_Noscea_Middle } from "./middle-la-noscea";
import { FATEs_La_Noscea_Outer } from "./outer-la-noscea";
import { FATEs_La_Noscea_Upper } from "./upper-la-noscea";
import { FATEs_La_Noscea_Western } from "./western-la-noscea";

export const FATEs_La_Noscea = function(parent) {
    const data = new DataGroup("La Noscea", parent);
    data.name_en = "La Noscea";
    data.name_fr = "Noscea";

    data.initializeSubGroups([
        FATEs_La_Noscea_Eastern,
        FATEs_La_Noscea_Lower,
        FATEs_La_Noscea_Middle,
        FATEs_La_Noscea_Outer,
        FATEs_La_Noscea_Upper,
        FATEs_La_Noscea_Western,
	]);

    return data;
};

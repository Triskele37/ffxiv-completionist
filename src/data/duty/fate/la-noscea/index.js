import { DataGroup } from "../../../DataGroup";

import { Duty_FATEs_La_Noscea_Eastern } from "./eastern-la-noscea";
import { Duty_FATEs_La_Noscea_Lower } from "./lower-la-noscea";
import { Duty_FATEs_La_Noscea_Middle } from "./middle-la-noscea";
import { Duty_FATEs_La_Noscea_Outer } from "./outer-la-noscea";
import { Duty_FATEs_La_Noscea_Upper } from "./upper-la-noscea";
import { Duty_FATEs_La_Noscea_Western } from "./western-la-noscea";

export const Duty_FATEs_La_Noscea = function(parent) {
    const data = new DataGroup("La Noscea", parent);
    data.name_en = "La Noscea";
    data.name_fr = "Noscea";

    data.initializeSubGroups([
        Duty_FATEs_La_Noscea_Eastern,
        Duty_FATEs_La_Noscea_Lower,
        Duty_FATEs_La_Noscea_Middle,
        Duty_FATEs_La_Noscea_Outer,
        Duty_FATEs_La_Noscea_Upper,
        Duty_FATEs_La_Noscea_Western,
	]);

    return data;
};

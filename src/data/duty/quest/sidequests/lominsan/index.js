import { DataGroup } from "../../../../DataGroup";

import { Duty_Quests_Sidequests_Lominsan_Limsa_Lominsa } from "./limsa-lominsa";
import { Duty_Quests_Sidequests_Lominsan_Wolves_Den_Pier } from "./wolves-den-pier";
import { Duty_Quests_Sidequests_Lominsan_Middle_La_Noscea } from "./middle-la-noscea";
import { Duty_Quests_Sidequests_Lominsan_Lower_La_Noscea } from "./lower-la-noscea";
import { Duty_Quests_Sidequests_Lominsan_Eastern_La_Noscea } from "./eastern-la-noscea";
import { Duty_Quests_Sidequests_Lominsan_Western_La_Noscea } from "./western-la-noscea";
import { Duty_Quests_Sidequests_Lominsan_Upper_La_Noscea } from "./upper-la-noscea";
import { Duty_Quests_Sidequests_Lominsan_Outer_La_Noscea } from "./outer-la-noscea";

export const Duty_Quests_Sidequests_Lominsan = function(parent) {
    const data = new DataGroup("Lominsan", parent);
    data.name_fr = "Noscea";

    data.initializeSubGroups([
        Duty_Quests_Sidequests_Lominsan_Limsa_Lominsa,
        Duty_Quests_Sidequests_Lominsan_Wolves_Den_Pier,
        Duty_Quests_Sidequests_Lominsan_Middle_La_Noscea,
        Duty_Quests_Sidequests_Lominsan_Lower_La_Noscea,
        Duty_Quests_Sidequests_Lominsan_Eastern_La_Noscea,
        Duty_Quests_Sidequests_Lominsan_Western_La_Noscea,
        Duty_Quests_Sidequests_Lominsan_Upper_La_Noscea,
        Duty_Quests_Sidequests_Lominsan_Outer_La_Noscea,
    ]);

    return data;
};

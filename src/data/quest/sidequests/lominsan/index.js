import { DataGroup } from "../../../DataGroup";

import { Quests_Sidequests_Lominsan_Limsa_Lominsa } from "./limsa-lominsa";
import { Quests_Sidequests_Lominsan_Wolves_Den_Pier } from "./wolves-den-pier";
import { Quests_Sidequests_Lominsan_Middle_La_Noscea } from "./middle-la-noscea";
import { Quests_Sidequests_Lominsan_Lower_La_Noscea } from "./lower-la-noscea";
import { Quests_Sidequests_Lominsan_Eastern_La_Noscea } from "./eastern-la-noscea";
import { Quests_Sidequests_Lominsan_Western_La_Noscea } from "./western-la-noscea";
import { Quests_Sidequests_Lominsan_Upper_La_Noscea } from "./upper-la-noscea";
import { Quests_Sidequests_Lominsan_Outer_La_Noscea } from "./outer-la-noscea";

export const Quests_Sidequests_Lominsan = function(parent) {
    const data = new DataGroup("Lominsan", parent);
    data.name_fr = "Noscea";

    data.initializeSubGroups([
        Quests_Sidequests_Lominsan_Limsa_Lominsa,
        Quests_Sidequests_Lominsan_Wolves_Den_Pier,
        Quests_Sidequests_Lominsan_Middle_La_Noscea,
        Quests_Sidequests_Lominsan_Lower_La_Noscea,
        Quests_Sidequests_Lominsan_Eastern_La_Noscea,
        Quests_Sidequests_Lominsan_Western_La_Noscea,
        Quests_Sidequests_Lominsan_Upper_La_Noscea,
        Quests_Sidequests_Lominsan_Outer_La_Noscea,
    ]);

    return data;
};

import { DataGroup } from "../../../DataGroup";
import { FishingLogColumnConfig } from "../../columnConfigs";

import { Gathering_Log_Fishing_Log_La_Noscea } from "./la-noscea";
import { Gathering_Log_Fishing_Log_The_Black_Shroud } from "./the-black-shroud";
import { Gathering_Log_Fishing_Log_Thanalan } from "./thanalan";
import { Gathering_Log_Fishing_Log_Coerthas } from "./coerthas";
import { Gathering_Log_Fishing_Log_Mor_Dhona } from "./mor-dhona";
import { Gathering_Log_Fishing_Log_Abalathias_Spine } from "./abalathias-spine";
import { Gathering_Log_Fishing_Log_Dravania } from "./dravania";
import { Gathering_Log_Fishing_Log_Gyr_Abania } from "./gry-abania";
import { Gathering_Log_Fishing_Log_Othard } from "./othard";
import { Gathering_Log_Fishing_Log_Hingashi } from "./hingashi";
import { Gathering_Log_Fishing_Log_Norvrandt } from "./norvrandt";

export const Gathering_Log_Fishing_Log = function(parent) {
    const data = new DataGroup("Log", parent);
    data.columnConfig = FishingLogColumnConfig;

    data.initializeSubGroups([
        Gathering_Log_Fishing_Log_La_Noscea,
        Gathering_Log_Fishing_Log_The_Black_Shroud,
        Gathering_Log_Fishing_Log_Thanalan,
        Gathering_Log_Fishing_Log_Coerthas,
        Gathering_Log_Fishing_Log_Mor_Dhona,
        Gathering_Log_Fishing_Log_Abalathias_Spine,
        Gathering_Log_Fishing_Log_Dravania,
        Gathering_Log_Fishing_Log_Gyr_Abania,
        Gathering_Log_Fishing_Log_Othard,
        Gathering_Log_Fishing_Log_Hingashi,
        Gathering_Log_Fishing_Log_Norvrandt,
    ]);

    return data;
};

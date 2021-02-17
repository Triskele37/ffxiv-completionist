import { DataGroup } from "../../../../DataGroup";
import { FishingLogColumnConfig } from "../../columnConfigs";

import { Logs_Gathering_Log_Fishing_Log_La_Noscea } from "./la-noscea";
import { Logs_Gathering_Log_Fishing_Log_The_Black_Shroud } from "./the-black-shroud";
import { Logs_Gathering_Log_Fishing_Log_Thanalan } from "./thanalan";
import { Logs_Gathering_Log_Fishing_Log_Coerthas } from "./coerthas";
import { Logs_Gathering_Log_Fishing_Log_Mor_Dhona } from "./mor-dhona";
import { Logs_Gathering_Log_Fishing_Log_Abalathias_Spine } from "./abalathias-spine";
import { Logs_Gathering_Log_Fishing_Log_Dravania } from "./dravania";
import { Logs_Gathering_Log_Fishing_Log_Gyr_Abania } from "./gry-abania";
import { Logs_Gathering_Log_Fishing_Log_Othard } from "./othard";
import { Logs_Gathering_Log_Fishing_Log_Hingashi } from "./hingashi";
import { Logs_Gathering_Log_Fishing_Log_Norvrandt } from "./norvrandt";
import { Logs_Gathering_Log_Fishing_Log_The_High_Seas } from "./the-high-seas";

export const Logs_Gathering_Log_Fishing_Log = function(parent) {
    const data = new DataGroup("Log", parent);
    data.columnConfig = FishingLogColumnConfig;

    data.initializeSubGroups([
        Logs_Gathering_Log_Fishing_Log_La_Noscea,
        Logs_Gathering_Log_Fishing_Log_The_Black_Shroud,
        Logs_Gathering_Log_Fishing_Log_Thanalan,
        Logs_Gathering_Log_Fishing_Log_Coerthas,
        Logs_Gathering_Log_Fishing_Log_Mor_Dhona,
        Logs_Gathering_Log_Fishing_Log_Abalathias_Spine,
        Logs_Gathering_Log_Fishing_Log_Dravania,
        Logs_Gathering_Log_Fishing_Log_Gyr_Abania,
        Logs_Gathering_Log_Fishing_Log_Othard,
        Logs_Gathering_Log_Fishing_Log_Hingashi,
        Logs_Gathering_Log_Fishing_Log_Norvrandt,
        Logs_Gathering_Log_Fishing_Log_The_High_Seas,
    ]);

    return data;
};

import { DataGroup } from "../../DataGroup";
import { HuntingLogColumnConfig } from "../columnConfigs";

import { General_Logs_Hunting_Log_Arcanist } from "./arcanist";
import { General_Logs_Hunting_Log_Archer } from "./archer";
import { General_Logs_Hunting_Log_Conjurer } from "./conjurer";
import { General_Logs_Hunting_Log_Gladiator } from "./gladiator";
import { General_Logs_Hunting_Log_Lancer } from "./lancer";
import { General_Logs_Hunting_Log_Marauder } from "./marauder";
import { General_Logs_Hunting_Log_Pugilist } from "./pugilist";
import { General_Logs_Hunting_Log_Rogue } from "./rogue";
import { General_Logs_Hunting_Log_Thaumaturge } from "./thaumaturge";
import { General_Logs_Hunting_Log_Maelstrom } from "./maelstrom";
import { General_Logs_Hunting_Log_Order_of_the_Twin_Adder } from "./twin-adder";
import { General_Logs_Hunting_Log_Immortal_Flames } from "./immortal-flames";

export const General_Logs_Hunting_Log = function(parent) {
    const data = new DataGroup("Hunting Log", parent);
    data.columnConfig = HuntingLogColumnConfig;

    data.initializeSubGroups([
        General_Logs_Hunting_Log_Arcanist,
        General_Logs_Hunting_Log_Archer,
        General_Logs_Hunting_Log_Conjurer,
        General_Logs_Hunting_Log_Gladiator,
        General_Logs_Hunting_Log_Lancer,
        General_Logs_Hunting_Log_Marauder,
        General_Logs_Hunting_Log_Pugilist,
        General_Logs_Hunting_Log_Rogue,
        General_Logs_Hunting_Log_Thaumaturge,
        General_Logs_Hunting_Log_Maelstrom,
        General_Logs_Hunting_Log_Order_of_the_Twin_Adder,
        General_Logs_Hunting_Log_Immortal_Flames,
    ]);

    return data;
};

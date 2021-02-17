import { DataGroup } from "../../DataGroup";
import { HuntingLogColumnConfig } from "../columnConfigs";

import { Logs_Hunting_Log_Arcanist } from "./arcanist";
import { Logs_Hunting_Log_Archer } from "./archer";
import { Logs_Hunting_Log_Conjurer } from "./conjurer";
import { Logs_Hunting_Log_Gladiator } from "./gladiator";
import { Logs_Hunting_Log_Lancer } from "./lancer";
import { Logs_Hunting_Log_Marauder } from "./marauder";
import { Logs_Hunting_Log_Pugilist } from "./pugilist";
import { Logs_Hunting_Log_Rogue } from "./rogue";
import { Logs_Hunting_Log_Thaumaturge } from "./thaumaturge";
import { Logs_Hunting_Log_Maelstrom } from "./maelstrom";
import { Logs_Hunting_Log_Order_of_the_Twin_Adder } from "./twin-adder";
import { Logs_Hunting_Log_Immortal_Flames } from "./immortal-flames";

export const Logs_Hunting_Log = function(parent) {
    const data = new DataGroup("Hunting Log", parent);
    data.name_fr = "Bestiaire";

    data.columnConfig = HuntingLogColumnConfig;

    data.initializeSubGroups([
        Logs_Hunting_Log_Arcanist,
        Logs_Hunting_Log_Archer,
        Logs_Hunting_Log_Conjurer,
        Logs_Hunting_Log_Gladiator,
        Logs_Hunting_Log_Lancer,
        Logs_Hunting_Log_Marauder,
        Logs_Hunting_Log_Pugilist,
        Logs_Hunting_Log_Rogue,
        Logs_Hunting_Log_Thaumaturge,
        Logs_Hunting_Log_Maelstrom,
        Logs_Hunting_Log_Order_of_the_Twin_Adder,
        Logs_Hunting_Log_Immortal_Flames,
    ]);

    return data;
};

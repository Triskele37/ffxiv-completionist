import { DataGroup } from "../../DataGroup";

import { Logs_Gathering_Log_Folklore_Gathering_Books } from "./folklore-gathering-books";

import { Logs_Gathering_Log_Mining } from "./mining";
import { Logs_Gathering_Log_Quarrying } from "./quarrying";
import { Logs_Gathering_Log_Logging } from "./logging";
import { Logs_Gathering_Log_Harvesting } from "./harvesting";

import { Logs_Gathering_Log_Fishing } from "./fishing";
import { Logs_Gathering_Log_Spearfishing } from "./spearfishing";

export const Logs_Gathering_Log = function(parent) {
    const group = DataGroup.fromJSON(parent, "./logs/gathering/index");

    group.subGroups = [
        Logs_Gathering_Log_Folklore_Gathering_Books(group),
        Logs_Gathering_Log_Mining(group),
        Logs_Gathering_Log_Quarrying(group),
        Logs_Gathering_Log_Logging(group),
        Logs_Gathering_Log_Harvesting(group),
        Logs_Gathering_Log_Fishing(group),
        Logs_Gathering_Log_Spearfishing(group),
	];

    return group;
};

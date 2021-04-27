import { DataGroup } from "../../../DataGroup";

import { Logs_Gathering_Log_Fishing_Log } from "./log";
import { Logs_Gathering_Log_Fishing_Guide } from "./guide";

const basePath = "./logs/gathering/fishing";
export const Logs_Gathering_Log_Fishing = function(parent) {
    const group = DataGroup.fromJSON(parent, `${basePath}/index`);

    group.subGroups = [
        Logs_Gathering_Log_Fishing_Log(group),
        Logs_Gathering_Log_Fishing_Guide(group),
    ];

    return group;
};

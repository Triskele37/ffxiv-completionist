import { DataGroup } from "../../../DataGroup";

import { Logs_Gathering_Log_Spearfishing_Log } from "./log";
import { Logs_Gathering_Log_Spearfishing_Guide } from "./guide";

const basePath = "./logs/gathering/spearfishing";
export const Logs_Gathering_Log_Spearfishing = function(parent) {
    const group = DataGroup.fromJSON(parent, `${basePath}/index`);

    group.subGroups = [
        Logs_Gathering_Log_Spearfishing_Log(group),
        Logs_Gathering_Log_Spearfishing_Guide(group),
    ];

    return group;
};

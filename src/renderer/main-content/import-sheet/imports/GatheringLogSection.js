import { data } from '../../../../data';
import { importCallback } from './utils';

export const GatheringLogSection = {
    name: "Gathering Logs",
    tabs: [
        {
            title: "Miner Logs",
            importCallback: importCallback(3, [
                data.Gathering_Logs.Mining_Log,
                data.Gathering_Logs.Quarrying_Log
            ]),
        },
        {
            title: "Botanist Logs",
            importCallback: importCallback(3, [
                data.Gathering_Logs.Harvesting_Log,
                data.Gathering_Logs.Logging_Log
            ]),
        },
        {
            title: "Fishing Logs",
            importCallback: importCallback(1, [data.Gathering_Logs.Fishing_Log]),
        },
        {
            title: "Fishing Guide",
            importCallback: importCallback(1, [
                data.Gathering_Logs.Fishing_Guide_Fishing,
                data.Gathering_Logs.Fishing_Guide_Spearfishing
            ]),
        },
    ]
};

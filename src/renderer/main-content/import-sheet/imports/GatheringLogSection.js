import { data } from '../../../../data';
import { importCallback } from './utils';

export const GatheringLogSection = {
    name: "Gathering Logs",
    tabs: [
        {
            title: "Miner Logs",
            importCallback: importCallback(3, [
                data.Gathering_Logs.Mining,
                data.Gathering_Logs.Quarrying
            ]),
        },
        {
            title: "Botanist Logs",
            importCallback: importCallback(3, [
                data.Gathering_Logs.Harvesting,
                data.Gathering_Logs.Logging
            ]),
        },
        {
            title: "Fishing Logs",
            importCallback: importCallback(1, [
                data.Gathering_Logs.Fishing_Log,
                data.Gathering_Logs.Spearfishing_Log
            ]),
        },
        {
            title: "Fishing Guide",
            importCallback: importCallback(1, [
                data.Gathering_Logs.Fishing_Guide,
                data.Gathering_Logs.Spearfishing_Guide
            ]),
        },
    ]
};

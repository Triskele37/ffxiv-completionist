import { data } from '../../../../data';
import { importCallback } from './utils';

export const GatheringLogSection = {
    name: "Gathering Logs",
    tabs: [
        {
            title: "Miner Logs",
            importCallback: importCallback(3, [
                data.Gathering_Log.Mining,
                data.Gathering_Log.Quarrying
            ]),
        },
        {
            title: "Botanist Logs",
            importCallback: importCallback(3, [
                data.Gathering_Log.Harvesting,
                data.Gathering_Log.Logging
            ]),
        },
        {
            title: "Fishing Logs",
            importCallback: importCallback(1, [
                data.Gathering_Log.Fishing_Log,
                data.Gathering_Log.Spearfishing_Log
            ]),
        },
        {
            title: "Fishing Guide",
            importCallback: importCallback(1, [
                data.Gathering_Log.Fishing_Guide,
                data.Gathering_Log.Spearfishing_Guide
            ]),
        },
    ]
};

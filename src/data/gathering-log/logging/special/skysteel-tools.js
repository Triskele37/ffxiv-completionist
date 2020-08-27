import { DataGroup } from "../../../DataGroup";

export const Gathering_Log_Logging_Special_Skysteel_Tools = function(parent) {
    return new DataGroup("Skysteel Tools", parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "80★",
        name: "Oddly Specific Latex",
        zone: "The Dravanian Forelands",
        closestTeleport: "Tailfeather",
        coordinates: "(x29, y17)",
        usage: "DOH/DOL Relic",
        special: ""
    },
    {
        level: "80★",
        name: "Oddly Specific Fossil Dust",
        zone: "The Dravanian Forelands",
        closestTeleport: "Tailfeather",
        coordinates: "(x29, y17)",
        usage: "DOH/DOL Relic",
        special: "Hidden"
    },
    {
        level: "80★★",
        name: "Oddly Specific Amber",
        zone: "The Churning Mists",
        closestTeleport: "Zenith",
        coordinates: "(x25, y28)",
        usage: "DOH/DOL Relic",
        special: ""
    },
    {
        level: "80★★",
        name: "Oddly Specific Bauble",
        zone: "The Churning Mists",
        closestTeleport: "Zenith",
        coordinates: "(x25, y28)",
        usage: "DOH/DOL Relic",
        special: "Hidden"
    },
];

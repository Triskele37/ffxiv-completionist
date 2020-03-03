import { DataGroup } from "../../../DataGroup";

export const Gathering_Log_Quarrying_Level_71_75 = function(parent) {
    return new DataGroup("71-75", parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "71",
        name: "Hard Mudstone",
        zone: "Kholusia",
        closestAetheryte: "Wright",
        coordinates: "Slowroad",
        usage: "GSM, Provisioning",
        special: ""
    }, {
        level: "71",
        name: "Truegold Sand",
        zone: "Kholusia",
        closestAetheryte: "Wright",
        coordinates: "Slowroad",
        usage: "ALC, ARM, BSM, GSM, Provisioning",
        special: ""
    }, {
        level: "75",
        name: "Manasilver Sand",
        zone: "The Rak'tika Greatwood",
        closestAetheryte: "Slitherbough",
        coordinates: "Lozatl's Conquest",
        usage: "ALC, GSM, Provisioning",
        special: ""
    },
];

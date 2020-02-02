import { DataGroup } from "../../../DataGroup";

export const Gathering_Log_Quarrying_Level_71_75 = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "71",
        name: "Hard Mudstone",
        zone: "Kholusia",
        location: "Slowroad"
    }, {
        level: "71",
        name: "Truegold Sand",
        zone: "Kholusia",
        location: "Slowroad"
    }, {
        level: "75",
        name: "Manasilver Sand",
        zone: "The Rak'tika Greatwood",
        location: "Lozatl's Conquest"
    },
];

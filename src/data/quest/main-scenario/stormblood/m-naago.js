import { DataGroup } from "../../../DataGroup";

export const Quests_Main_Scenario_Stormblood_M_Naago = function(parent) {
    return new DataGroup("M'Naago", parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "60",
        name: "A Friend of a Friend in Need",
        npc: "M'naago Rahz",
        unlock: ""
    }, {
        level: "60",
        name: "Signed, Sealed, to Be Delivered",
        npc: "M'naago Rahz",
        unlock: ""
    }, {
        level: "60",
        name: "Best Served with Cold Steel",
        npc: "Raubahn",
        unlock: ""
    }, {
        level: "60",
        name: "Let Fill Your Hearts with Pride",
        npc: "M'naago Rahz",
        unlock: ""
    }
];

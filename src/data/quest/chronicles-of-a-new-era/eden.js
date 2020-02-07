// https://xivapi.com/search?indexes=Quest&filters=JournalGenreTargetID=19&columns=ID,Name
import { DataGroup } from "../../DataGroup";

export const Quests_Chronicles_of_a_New_Era_Eden = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "80",
        name: "In the Middle of Nowhere",
        npc: "Anxious Crystarium Guard",
        unlock: ""
    }, {
        level: "80",
        name: "Deploy the Core",
        npc: "Ryne",
        unlock: "Eden's Gate: Resurrection"
    }, {
        level: "80",
        name: "One Fell Swoop",
        npc: "Ryne",
        unlock: "Eden's Gate: Descent"
    }, {
        level: "80",
        name: "Nor Any Drop to Drink",
        npc: "Ryne",
        unlock: "Eden's Gate: Inundation"
    }, {
        level: "80",
        name: "Super Seismic",
        npc: "Ryne",
        unlock: "Eden's Gate: Sepulcher"
    }, {
        level: "80",
        name: "The Next Piece of the Puzzle",
        npc: "Ryne",
        unlock: ""
    }
];

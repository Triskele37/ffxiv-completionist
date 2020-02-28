// https://xivapi.com/search?indexes=Quest&filters=JournalGenreTargetID=15&columns=ID,Name&limit=7
import { DataGroup } from "../../DataGroup";

export const Quests_Chronicles_of_a_New_Era_The_Sorrow_of_Werlyt = function(parent) {
    return new DataGroup("The Sorrow of Werlyt", parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "80",
        name: "Ruby Doomsday",
        npc: "Resistance Officer",
        unlock: "Cinder Drift"
    },
];

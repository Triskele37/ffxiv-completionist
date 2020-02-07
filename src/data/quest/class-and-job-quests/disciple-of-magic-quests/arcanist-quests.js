import { DataGroup } from "../../../DataGroup";

export const Quests_Class_and_Job_Disciple_of_Magic_Arcanist = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "1",
        name: "Way of the Arcanist"
    }, {
        level: "1",
        name: "My First Grimoire"
    }, {
        level: "5",
        name: "What's in the Box"
    }, {
        level: "10",
        name: "Tactical Planning"
    }, {
        level: "15",
        name: "Topaz Teachings"
    }, {
        level: "15",
        name: "Over the Rails"
    }, {
        level: "20",
        name: "Pincer Maneuver"
    }, {
        level: "25",
        name: "Grimoire Fandango"
    }, {
        level: "30",
        name: "Sinking Doesmaga"
    }
];

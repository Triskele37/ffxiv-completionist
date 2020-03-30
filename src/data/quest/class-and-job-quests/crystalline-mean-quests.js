import { DataGroup } from "../../DataGroup";
import forging from "../../../../static/quests/class-job-quests/crystalline-mean-quests/facet-of-forging-quests";
import crafting from "../../../../static/quests/class-job-quests/crystalline-mean-quests/facet-of-crafting-quests";
import nourishing from "../../../../static/quests/class-job-quests/crystalline-mean-quests/facet-of-nourishing-quests";
import gathering from "../../../../static/quests/class-job-quests/crystalline-mean-quests/facet-of-gathering-quests";
import fishing from "../../../../static/quests/class-job-quests/crystalline-mean-quests/facet-of-fishing-quests";
import mainTasks from "../../../../static/quests/class-job-quests/crystalline-mean-quests/crystalline-mean-quests";

const tasks = [
    ...forging.map((task) => { task.facet = 'Forging'; return task; }),
    ...crafting.map((task) => { task.facet = 'Crafting'; return task; }),
    ...nourishing.map((task) => { task.facet = 'Nourishing'; return task; }),
    ...gathering.map((task) => { task.facet = 'Gathering'; return task; }),
    ...fishing.map((task) => { task.facet = 'Fishing'; return task; }),
    ...mainTasks,
];

export const Quests_Class_and_Job_Crystalline_Mean = function(parent) {
    const data = new DataGroup("Crystalline Mean", parent).initializeTasks(tasks);
    data.columnConfig = [
        { header: "Facet", key: "facet", filterable: true },
        { header: "Level", key: "Level" },
        { header: "Name", key: "Name" },
        { header: "NPC", key: "Npc" },
    ];

    return data;
};

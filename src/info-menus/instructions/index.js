import navigation from "./navigation";
import completion from "./completion";
import task_table from "./task-table";
import saving from "./saving";
import other from "./other";

export const instructions = {
    name: "Instructions",
    noContent: true,
    subGroups: [
        { name: 'Navigation', component: navigation },
        { name: 'Completion', component: completion },
        { name: 'Task Table', component: task_table },
        { name: 'Saving', component: saving },
        { name: 'Other', component: other },
    ],
};

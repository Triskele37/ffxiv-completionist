import { DataGroup } from "./DataGroup";
import { getPlayerStore } from "../store/electronStore";

export const Custom = function(parent) {
    const data = DataGroup.fromJSON(parent, "./custom", {
        name: { editable: true },
        notes: { editable: true }
    });
    data.isCustomGroup = true;
    data.draggable = true;

    const customTasks = getPlayerStore().get('custom') || {};

    // Have to temporarily keep this in until everyone is off 0.5.55
    if(!Array.isArray(customTasks)) {
        Object.keys(customTasks).forEach((key) => {
            customTasks[key].id = parseInt(key.substr(1));
        });
        data.initializeTasks(customTasks);
    }
    else {
        let highestId = customTasks.length - 1;
        customTasks.forEach((meta) => {
            if(meta.id === undefined) meta.id = highestId++;
        });
        const fixedTasks = customTasks.reduce((acc, t) => {
            acc[`x${t.id}`] = t;
            return acc;
        }, {});
        console.log(fixedTasks);
        data.initializeTasks(fixedTasks);
    }

    return data;
};

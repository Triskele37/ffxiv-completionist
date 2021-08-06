import { DataGroup } from "./DataGroup";
import { getPlayerStore } from "../store/electronStore";

export const Custom = function(parent) {
    const data = DataGroup.fromJSON(parent, "./custom");
    data.isCustomGroup = true;

    const customTasks = getPlayerStore().get('custom') || {};
    data.initializeTasks(customTasks);

    return data;
};

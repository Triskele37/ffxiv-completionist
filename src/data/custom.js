import { DataGroup } from "./DataGroup";
import { getPlayerStore } from "../store/electronStore";

export const Custom = function(parent) {
    const data = new DataGroup("Custom", parent);
    data.isCustomGroup = true;

    data.initializeTasks(getPlayerStore().get('custom') || [], [
        { key: 'name', header: 'Name' },
        { key: 'notes', header: 'Notes' }
    ]);

    return data;
};

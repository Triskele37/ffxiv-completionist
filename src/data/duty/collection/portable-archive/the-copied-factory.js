import { DataGroup } from "../../../DataGroup";

export const Duty_Collection_Portable_Archive_The_Copied_Factory = function(parent) {
    return new DataGroup("The Copied Factory", parent).initializeTasks(tasks, [
        { header: 'Entry', key: 'name', },
        { header: 'Location', key: 'location' },
        { header: 'Coordinates', key: 'coordinates' },
        { header: 'Patch', key: 'patch', filterable: true },
    ]);
};

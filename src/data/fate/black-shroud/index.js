import { DataGroup } from "../../DataGroup";

import { FATEs_The_Black_Shroud_Central_Shroud } from "./central-shroud";
import { FATEs_The_Black_Shroud_East_Shroud } from "./east-shroud";
import { FATEs_The_Black_Shroud_North_Shroud } from "./north-shroud";
import { FATEs_The_Black_Shroud_South_Shroud } from "./south-shroud";

export const FATEs_The_Black_Shroud = function(name, parent) {
    return new DataGroup(name, parent).initializeSubGroups([
        FATEs_The_Black_Shroud_Central_Shroud,
        FATEs_The_Black_Shroud_East_Shroud,
        FATEs_The_Black_Shroud_North_Shroud,
        FATEs_The_Black_Shroud_South_Shroud,
	]).initializeTasks(tasks);
};

const tasks = [
    {
        level: 50,
        name: "Steel Reign",
        location: "Sorrel Haven (14,18), Sorrel Haven (14,21), Hopeseed Pond (25,24), Proud Creek (16,27), Gelmorra Ruins (22,22), Alder Springs (26,21), Proud Creek (23,30), Larkscall (16,33), Nine Ivies (20,23), Lower Paths (33,23)",
        type: "Notorious Monster"
    }
];

import { DataGroup } from "../../DataGroup";

import { FATEs_Abalathias_Spine_The_Sea_of_Clouds } from "./the-sea-of-clouds";
import { FATEs_Abalathias_Spine_Azys_Lla } from "./azys-lla";

export const FATEs_Abalathias_Spine = function(name, parent) {
    return new DataGroup(name, parent).initializeSubGroups([
        FATEs_Abalathias_Spine_The_Sea_of_Clouds,
        FATEs_Abalathias_Spine_Azys_Lla,
	]);
};

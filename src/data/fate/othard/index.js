import { DataGroup } from "../../DataGroup";

import { FATEs_Othard_The_Azim_Steppe } from "./the-azim-steppe";
import { FATEs_Othard_The_Ruby_Sea } from "./the-ruby-sea";
import { FATEs_Othard_Yanxia } from "./yanxia";

export const FATEs_Othard = function(parent) {
    return new DataGroup("Othard", parent).initializeSubGroups([
        FATEs_Othard_The_Azim_Steppe,
        FATEs_Othard_The_Ruby_Sea,
        FATEs_Othard_Yanxia,
	]);
};

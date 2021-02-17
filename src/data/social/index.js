import { DataGroup } from "../DataGroup";

import { Social_Emotes } from "./emote";

export const Social = function(parent) {
    const data = new DataGroup("Social", parent);
    data.name_fr = "Collection";

    data.initializeSubGroups([
        Social_Emotes,
    ]);

    return data;
};

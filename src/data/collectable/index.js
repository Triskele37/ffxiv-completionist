import { DataGroup } from "../DataGroup";

import { Collectables_Aesthetician } from "./aesthetician";
import { Collectables_Barding } from "./barding";
import { Collectables_Emotes } from "./emote";
import { Collectables_Minion_Guide } from "./minion";
import { Collectables_Mount_Guide } from "./mount";
import { Collectables_Orchestrion_List } from "./orchestrion";
import { Collectables_Triple_Triad_Card_List } from "./tripletriad-card";
import { Collectables_Triple_Triad_Opponents } from "./tripletriad-opponent";

export const Collectables = function(name, parent) {
	return new DataGroup(name, parent).initializeSubGroups([
        Collectables_Aesthetician,
        Collectables_Barding,
        Collectables_Emotes,
        Collectables_Minion_Guide,
        Collectables_Mount_Guide,
        Collectables_Orchestrion_List,
        Collectables_Triple_Triad_Card_List,
        Collectables_Triple_Triad_Opponents,
	]);
};

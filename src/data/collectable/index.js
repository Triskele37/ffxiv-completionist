import { DataGroup } from "../DataGroup";

import { Collectables_Aesthetician } from "./aesthetician";
import { Collectables_Barding } from "./barding";
import { Collectables_Emotes } from "./emote";
import { Collectables_Minions } from "./minion";
import { Collectables_Mounts } from "./mount";
import { Collectables_Orchestrion } from "./orchestrion";
import { Collectables_Triple_Triad_Cards } from "./tripletriad-card";
import { Collectables_Triple_Triad_Opponents } from "./tripletriad-opponent";

export const Collectables = function(name, parent) {
	return new DataGroup(name, parent).initializeSubGroups([
        Collectables_Aesthetician,
        Collectables_Barding,
        Collectables_Emotes,
        Collectables_Minions,
        Collectables_Mounts,
        Collectables_Orchestrion,
        Collectables_Triple_Triad_Cards,
        Collectables_Triple_Triad_Opponents,
	]);
};

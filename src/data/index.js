import { eStore } from "../store/electronStore";
import { DataGroup } from "./DataGroup";

import { Character } from "./character";
import { Duty } from "./duty";
import { Logs } from "./logs";
import { Travel } from "./travel";
import { Social } from "./social";
import { Custom } from "./custom";

const data = new DataGroup("Overall", null);
data.name_fr = "Global";

data.initializeSubGroups([
    Character,
    Duty,
    Logs,
    Travel,
    Social,
    Custom,
]);

// Must be set after data initializes
data.lang = eStore.get('lang');

export { data };

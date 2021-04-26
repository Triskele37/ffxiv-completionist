import { eStore } from "../store/electronStore";
import { DataGroup } from "./DataGroup";
import { loadJson } from "./loader";

import { Character } from "./character";
import { Duty } from "./duty";
import { Logs } from "./logs";
import { Travel } from "./travel";
import { Social } from "./social";
import { Custom } from "./custom";

const language = eStore.get('lang');
const json = loadJson('./index', language);

const data = new DataGroup(json.groupName, null);
data.lang = language;

data.initializeSubGroups([
    Character,
    Duty,
    Logs,
    Travel,
    Social,
    Custom,
]);

export { data };

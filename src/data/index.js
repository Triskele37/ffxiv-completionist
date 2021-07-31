import { DataGroup } from "./DataGroup";

import { Character } from "./character";
import { Duty } from "./duty";
import { Logs } from "./logs";
import { Travel } from "./travel";
import { Social } from "./social";
import { Custom } from "./custom";

const data = DataGroup.fromJSON(null, "./index");

data.subGroups = [
    Character(data),
    Duty(data),
    Logs(data),
    Travel(data),
    Social(data),
    Custom(data),
];

export { data };

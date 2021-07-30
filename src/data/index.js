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

// logSubs(data, 0);
// function logSubs(group, degree) {
//     if(group.subGroups) {
//         const spaces = new Array(degree).fill('    ').join('');
//         group.subGroups.forEach((sg) => {
//             console.log(spaces + sg.name);
//             logSubs(sg, degree + 1);
//         });
//     }
// }

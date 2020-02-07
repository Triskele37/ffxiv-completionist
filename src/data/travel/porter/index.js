import { DataGroup } from "../../DataGroup";

import { Travel_Porter_La_Noscea } from "./la-noscea";
import { Travel_Porter_The_Black_Shroud } from "./the-black-shroud";
import { Travel_Porter_Thanalan } from "./thanalan";
import { Travel_Porter_Ishgard_and_Coerthas } from "./ishgard-and-coerthas";
import { Travel_Porter_Gyr_Abania } from "./gyr-abania";
import { Travel_Porter_The_Far_East } from "./the-far-east";
import { Travel_Porter_Norvrandt } from "./norvrandt";

export const Travel_Porter = function(name, parent) {
    const data = new DataGroup(name, parent);

    data.columnConfig = [
        { header: "Type", key: "type", filterable: true },
        { header: "Region", key: "region", filterable: true },
        { header: "Location", key: "name" },
    ];

    data.initializeSubGroups([
        Travel_Porter_La_Noscea,
        Travel_Porter_The_Black_Shroud,
        Travel_Porter_Thanalan,
        Travel_Porter_Ishgard_and_Coerthas,
        Travel_Porter_Gyr_Abania,
        Travel_Porter_The_Far_East,
        Travel_Porter_Norvrandt,
    ]);

    return data;
};

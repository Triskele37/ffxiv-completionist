import { DataGroup } from "../../DataGroup";

import { Travel_Mount_Speed_La_Noscea } from "./la-noscea";
import { Travel_Mount_Speed_The_Black_Shroud } from "./the-black-shroud";
import { Travel_Mount_Speed_Thanalan } from "./thanalan";
import { Travel_Mount_Speed_Ishgard_and_Coerthas } from "./ishgard-and-coerthas";
import { Travel_Mount_Speed_Gyr_Abania } from "./gyr-abania";
import { Travel_Mount_Speed_The_Far_East } from "./the-far-east";
import { Travel_Mount_Speed_Norvrandt } from "./norvrandt";
import { Travel_Mount_Speed_Others } from "./others";

export const Travel_Mount_Speed = function(parent) {
    const data = new DataGroup("Mount Speed", parent);

    data.columnConfig = [
        { header: "Area Name", key: "name" },
        { header: "1st Increase (Quest Name)", key: "increase1" },
        { header: "2nd Increase (Currency and Cost)", key: "increase2" },
    ];

    data.initializeSubGroups([
        Travel_Mount_Speed_La_Noscea,
        Travel_Mount_Speed_The_Black_Shroud,
        Travel_Mount_Speed_Thanalan,
        Travel_Mount_Speed_Ishgard_and_Coerthas,
        Travel_Mount_Speed_Gyr_Abania,
        Travel_Mount_Speed_The_Far_East,
        Travel_Mount_Speed_Norvrandt,
        Travel_Mount_Speed_Others,
    ]);

    return data;
};

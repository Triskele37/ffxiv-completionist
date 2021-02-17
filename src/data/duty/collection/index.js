import { DataGroup } from "../../DataGroup";

import { Duty_Collection_Yo_Kai_Medallium } from "./yo-kai-medallium";
import { Duty_Collection_Portable_Archive } from "./portable-archive";
import { Duty_Collection_Field_Record } from "./field-record";

export const Duty_Collection = function(parent) {
    const data = new DataGroup("Collection", parent);
    data.name_fr = "Objet précieux";

    data.initializeSubGroups([
        Duty_Collection_Yo_Kai_Medallium,
        Duty_Collection_Portable_Archive,
        Duty_Collection_Field_Record
    ]);

    return data;
};

import { DataGroup } from "../../DataGroup";

import { Duty_Collection_Portable_Archive } from "./portable-archive";

const basePath = "./duty/collection";
export const Duty_Collection = function(parent) {
    const group = DataGroup.fromJSON(parent, `${basePath}/index`);

    group.subGroups = [
        DataGroup.fromJSON(group, `${basePath}/yo-kai-medallium`, {
            patch: { filterable: true }
        }),
        Duty_Collection_Portable_Archive(group),
        DataGroup.fromJSON(group, `${basePath}/field-record`, {
            number: { centered: true },
            patch: { filterable: true }
        }),
    ];

    return group;
};

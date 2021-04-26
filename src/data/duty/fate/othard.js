import { DataGroup } from "../../DataGroup";

const basePath = "./duty/fate/othard";
export const Duty_FATEs_Othard = function(parent) {
    const group = DataGroup.fromJSON(parent, `${basePath}/index`);

    group.subGroups = [
        DataGroup.fromJSON(parent, `${basePath}/the-azim-steppe`),
        DataGroup.fromJSON(parent, `${basePath}/the-ruby-sea`),
        DataGroup.fromJSON(parent, `${basePath}/yanxia`),
    ];

    return group;
};

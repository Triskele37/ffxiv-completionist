import { DataGroup } from "../../DataGroup";

const basePath = "./duty/fate/othard";
export const Duty_FATEs_Othard = function(parent) {
    const group = DataGroup.fromJSON(parent, `${basePath}/index`);

    group.subGroups = [
        DataGroup.fromJSON(group, `${basePath}/the-azim-steppe`),
        DataGroup.fromJSON(group, `${basePath}/the-ruby-sea`),
        DataGroup.fromJSON(group, `${basePath}/yanxia`),
    ];

    return group;
};

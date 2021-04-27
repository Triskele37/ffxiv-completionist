import { DataGroup } from "../DataGroup";

const basePath = "./travel/mount-speed";
export const Travel_Mount_Speed = function(parent) {
    const group = DataGroup.fromJSON(parent, `${basePath}/index`);

    group.subGroups = [
        DataGroup.fromJSON(group, `${basePath}/la-noscea`),
        DataGroup.fromJSON(group, `${basePath}/the-black-shroud`),
        DataGroup.fromJSON(group, `${basePath}/thanalan`),
        DataGroup.fromJSON(group, `${basePath}/ishgard-and-coerthas`),
        DataGroup.fromJSON(group, `${basePath}/gyr-abania`),
        DataGroup.fromJSON(group, `${basePath}/the-far-east`),
        DataGroup.fromJSON(group, `${basePath}/norvrandt`),
        DataGroup.fromJSON(group, `${basePath}/others`),
    ];

    return group;
};

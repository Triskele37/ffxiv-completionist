import { DataGroup } from "../DataGroup";

const basePath = "./travel/shared-fate";
export const Travel_Shared_FATE = function(parent) {
    const group = DataGroup.fromJSON(parent, `${basePath}/index`);

    group.subGroups = [
        DataGroup.fromJSON(group, `${basePath}/lakeland`),
        DataGroup.fromJSON(group, `${basePath}/amh-araeng`),
        DataGroup.fromJSON(group, `${basePath}/il-mheg`),
        DataGroup.fromJSON(group, `${basePath}/kholusia`),
        DataGroup.fromJSON(group, `${basePath}/the-rak-tika-greatwood`),
        DataGroup.fromJSON(group, `${basePath}/the-tempest`),
    ];

    return group;
};

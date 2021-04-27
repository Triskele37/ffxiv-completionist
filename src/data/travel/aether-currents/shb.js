import { DataGroup } from "../../DataGroup";

const basePath = "./travel/aether-currents/shb";
export const Travel_Aether_Currents_ShB = function(parent) {
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

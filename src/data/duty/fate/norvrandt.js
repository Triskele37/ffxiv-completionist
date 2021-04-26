import { DataGroup } from "../../DataGroup";

const basePath = "./duty/fate/norvrandt";
export const Duty_FATEs_Norvrandt = function(parent) {
    const group = DataGroup.fromJSON(parent, `${basePath}/index`);

    group.subGroups = [
        DataGroup.fromJSON(parent, `${basePath}/amh-araeng`),
        DataGroup.fromJSON(parent, `${basePath}/il-mheg`),
        DataGroup.fromJSON(parent, `${basePath}/kholusia`),
        DataGroup.fromJSON(parent, `${basePath}/lakeland`),
        DataGroup.fromJSON(parent, `${basePath}/the-rak-tika-greatwood`),
        DataGroup.fromJSON(parent, `${basePath}/the-tempest`),
    ];

    return group;
};

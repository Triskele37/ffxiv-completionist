import { DataGroup } from "../../DataGroup";

const basePath = "./duty/duty-raid-finder/guildhests";
export const Duty_Guildhests = function(parent) {
    const group = DataGroup.fromJSON(parent, `${basePath}/index`, {
        level: { filterable: true, filterType: "number", centered: true },
        iLvlReq: { filterable: true, filterType: "number", centered: true },
    });

    group.subGroups = [
        DataGroup.fromJSON(group, `${basePath}/guildhests`).forceName("Arcanist"),
        DataGroup.fromJSON(group, `${basePath}/guildhests`).forceName("Archer"),
        DataGroup.fromJSON(group, `${basePath}/guildhests`).forceName("Astrologian"),
        DataGroup.fromJSON(group, `${basePath}/guildhests`).forceName("Conjurer"),
        DataGroup.fromJSON(group, `${basePath}/guildhests`).forceName("Dark Knight"),
        DataGroup.fromJSON(group, `${basePath}/guildhests`).forceName("Gladiator"),
        DataGroup.fromJSON(group, `${basePath}/guildhests`).forceName("Lancer"),
        DataGroup.fromJSON(group, `${basePath}/guildhests`).forceName("Machinist"),
        DataGroup.fromJSON(group, `${basePath}/guildhests`).forceName("Marauder"),
        DataGroup.fromJSON(group, `${basePath}/guildhests`).forceName("Pugilist"),
        DataGroup.fromJSON(group, `${basePath}/guildhests`).forceName("Red Mage"),
        DataGroup.fromJSON(group, `${basePath}/guildhests`).forceName("Rogue"),
        DataGroup.fromJSON(group, `${basePath}/guildhests`).forceName("Samurai"),
        DataGroup.fromJSON(group, `${basePath}/guildhests`).forceName("Thaumaturge"),
    ];

    return group;
};

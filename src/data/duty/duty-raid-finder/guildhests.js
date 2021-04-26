import { DataGroup } from "../../DataGroup";

const basePath = "./duty/duty-raid-finder/guildhests";
export const Duty_Guildhests = function(parent) {
    const group = DataGroup.fromJSON(parent, `${basePath}/index`, {
        level: { filterable: true, filterType: "number", centered: true },
        iLvlReq: { filterable: true, filterType: "number", centered: true },
    });

    group.subGroups = [
        DataGroup.fromJSON(parent, `${basePath}/guildhests`).forceName("Arcanist"),
        DataGroup.fromJSON(parent, `${basePath}/guildhests`).forceName("Archer"),
        DataGroup.fromJSON(parent, `${basePath}/guildhests`).forceName("Astrologian"),
        DataGroup.fromJSON(parent, `${basePath}/guildhests`).forceName("Conjurer"),
        DataGroup.fromJSON(parent, `${basePath}/guildhests`).forceName("Dark Knight"),
        DataGroup.fromJSON(parent, `${basePath}/guildhests`).forceName("Gladiator"),
        DataGroup.fromJSON(parent, `${basePath}/guildhests`).forceName("Lancer"),
        DataGroup.fromJSON(parent, `${basePath}/guildhests`).forceName("Machinist"),
        DataGroup.fromJSON(parent, `${basePath}/guildhests`).forceName("Marauder"),
        DataGroup.fromJSON(parent, `${basePath}/guildhests`).forceName("Pugilist"),
        DataGroup.fromJSON(parent, `${basePath}/guildhests`).forceName("Red Mage"),
        DataGroup.fromJSON(parent, `${basePath}/guildhests`).forceName("Rogue"),
        DataGroup.fromJSON(parent, `${basePath}/guildhests`).forceName("Samurai"),
        DataGroup.fromJSON(parent, `${basePath}/guildhests`).forceName("Thaumaturge"),
    ];

    return group;
};

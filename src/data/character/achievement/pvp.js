import { DataGroup } from "../../DataGroup";

//https://xivapi.com/search?indexes=Achievement&string_column=AchievementCategory.AchievementKind.Name_en&string=Battle&columns=Name,Description,Points,Item.Name,Title.Name&page=2&limit=250

const basePath = "./character/achievement/pvp";
export const Character_Achievements_PvP = function(parent) {
    const group = DataGroup.fromJSON(parent, `${basePath}/index`);

    group.subGroups = [
        DataGroup.fromJSON(group, `${basePath}/general`),
        DataGroup.fromJSON(group, `${basePath}/ranking`),
        DataGroup.fromJSON(group, `${basePath}/the-wolves-den`),
        DataGroup.fromJSON(group, `${basePath}/frontline`),
        DataGroup.fromJSON(group, `${basePath}/rival-wings`),
    ];

    return group;
};

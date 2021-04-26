import { DataGroup } from "../../DataGroup";

//https://xivapi.com/search?indexes=Achievement&string_column=AchievementCategory.Name_en&string=Item&columns=Name,Description,Points,Item.Name,Title.Name&page=1&limit=380

const basePath = "./character/achievement/items";
export const Character_Achievements_Items = function(parent) {
    const group = DataGroup.fromJSON(parent, `${basePath}/index`);

    group.subGroups = [
        DataGroup.fromJSON(group, `${basePath}/items`),
        DataGroup.fromJSON(group, `${basePath}/currency`),
        DataGroup.fromJSON(group, `${basePath}/desynthesis`),
        DataGroup.fromJSON(group, `${basePath}/collectables`),
        DataGroup.fromJSON(group, `${basePath}/materia`),
        DataGroup.fromJSON(group, `${basePath}/relic-weapons`),
        DataGroup.fromJSON(group, `${basePath}/zodiac-weapons`),
        DataGroup.fromJSON(group, `${basePath}/anima-weapons`),
        DataGroup.fromJSON(group, `${basePath}/deep-dungeon-weapons`),
        DataGroup.fromJSON(group, `${basePath}/eureka-weapons`),
        DataGroup.fromJSON(group, `${basePath}/resistance-weapons`),
        DataGroup.fromJSON(group, `${basePath}/skysteel-tools`),
    ];

    return group;
};

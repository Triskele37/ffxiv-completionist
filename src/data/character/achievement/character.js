import { DataGroup } from "../../DataGroup";

//https://xivapi.com/search?indexes=Achievement&filters=AchievementCategory.ID=12&columns=Name,Description,Points,Item.Name,Title.Name&page=1&limit=380

const basePath = "./character/achievement/character"
export const Character_Achievements_Character = function(parent) {
    const group = DataGroup.fromJSON(parent, `${basePath}/index`);

    group.subGroups = [
        DataGroup.fromJSON(group, `${basePath}/general`),
        DataGroup.fromJSON(group, `${basePath}/disciples-of-war`),
        DataGroup.fromJSON(group, `${basePath}/disciples-of-magic`),
        DataGroup.fromJSON(group, `${basePath}/disciples-of-the-hand`),
        DataGroup.fromJSON(group, `${basePath}/disciples-of-the-land`),
        DataGroup.fromJSON(group, `${basePath}/commendation`),
        DataGroup.fromJSON(group, `${basePath}/gold-saucer`),
    ];

    return group;
};

import { DataGroup } from "../../DataGroup";

//https://xivapi.com/search?indexes=Achievement&string_column=AchievementCategory.Name_en&string=Exploration&columns=Name,Description,Points,Item.Name,Title.Name&page=1&limit=380

const basePath = "./character/achievement/exploration";
export const Character_Achievements_Exploration = function(parent) {
    const group = DataGroup.fromJSON(parent, `${basePath}/index`);

    group.subGroups = [
        DataGroup.fromJSON(group, `${basePath}/sightseeing-log`),
        DataGroup.fromJSON(group, `${basePath}/la-noscea`),
        DataGroup.fromJSON(group, `${basePath}/the-black-shroud`),
        DataGroup.fromJSON(group, `${basePath}/thanalan`),
        DataGroup.fromJSON(group, `${basePath}/coerthas`),
        DataGroup.fromJSON(group, `${basePath}/mor-dhona`),
        DataGroup.fromJSON(group, `${basePath}/abalathias-spine`),
        DataGroup.fromJSON(group, `${basePath}/dravania`),
        DataGroup.fromJSON(group, `${basePath}/gyr-abania`),
        DataGroup.fromJSON(group, `${basePath}/othard`),
        DataGroup.fromJSON(group, `${basePath}/norvrandt`),
        DataGroup.fromJSON(group, `${basePath}/duty`),
    ];

    return group;
};

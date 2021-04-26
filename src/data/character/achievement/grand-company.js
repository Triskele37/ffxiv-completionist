import { DataGroup } from "../../DataGroup";

//https://xivapi.com/search?indexes=Achievement&string_column=AchievementCategory.Name_en&string=Grand%20Company&columns=Name,Description,Points,Item.Name,Title.Name&page=1&limit=380

const basePath = "./character/achievement/grand-company";
export const Character_Achievements_Grand_Company = function(parent) {
    const group = DataGroup.fromJSON(parent, `${basePath}/index`);

    group.subGroups = [
        DataGroup.fromJSON(group, `${basePath}/grand-company`),
        DataGroup.fromJSON(group, `${basePath}/maelstrom`),
        DataGroup.fromJSON(group, `${basePath}/order-of-the-twin-adder`),
        DataGroup.fromJSON(group, `${basePath}/immortal-flames`),
    ];

    return group;
};

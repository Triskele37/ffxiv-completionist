import { DataGroup } from "../../DataGroup";

//https://xivapi.com/search?indexes=Achievement&filters=AchievementCategory.ID=12&columns=Name,Description,Points,Item.Name,Title.Name&page=1&limit=380

const basePath = "./character/achievement/crafting-and-gathering";
export const Character_Achievements_Crafting_and_Gathering = function(parent) {
    const group = DataGroup.fromJSON(parent, `${basePath}/index`);

    group.subGroups = [
        DataGroup.fromJSON(group, `${basePath}/all-disciplines`),
        DataGroup.fromJSON(group, `${basePath}/carpenter`),
        DataGroup.fromJSON(group, `${basePath}/blacksmith`),
        DataGroup.fromJSON(group, `${basePath}/armorer`),
        DataGroup.fromJSON(group, `${basePath}/goldsmith`),
        DataGroup.fromJSON(group, `${basePath}/leatherworker`),
        DataGroup.fromJSON(group, `${basePath}/weaver`),
        DataGroup.fromJSON(group, `${basePath}/alchemist`),
        DataGroup.fromJSON(group, `${basePath}/culinarian`),
        DataGroup.fromJSON(group, `${basePath}/miner`),
        DataGroup.fromJSON(group, `${basePath}/botanist`),
        DataGroup.fromJSON(group, `${basePath}/fisher`),
    ];

    return group;
};

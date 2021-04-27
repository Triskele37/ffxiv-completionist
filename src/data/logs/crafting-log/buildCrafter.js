import { DataGroup } from "../../DataGroup";

export function buildCrafter(parent, basePath) {
    const group = DataGroup.fromJSON(parent, `${basePath}/index`);

    // Level Based
    const levelBased = DataGroup.fromJSON(group, `${basePath}/level-based/index`);
    levelBased.subGroups = [
        DataGroup.fromJSON(levelBased, `${basePath}/level-based/level-1-5`),
        DataGroup.fromJSON(levelBased, `${basePath}/level-based/level-6-10`),
        DataGroup.fromJSON(levelBased, `${basePath}/level-based/level-11-15`),
        DataGroup.fromJSON(levelBased, `${basePath}/level-based/level-16-20`),
        DataGroup.fromJSON(levelBased, `${basePath}/level-based/level-21-25`),
        DataGroup.fromJSON(levelBased, `${basePath}/level-based/level-26-30`),
        DataGroup.fromJSON(levelBased, `${basePath}/level-based/level-31-35`),
        DataGroup.fromJSON(levelBased, `${basePath}/level-based/level-36-40`),
        DataGroup.fromJSON(levelBased, `${basePath}/level-based/level-41-45`),
        DataGroup.fromJSON(levelBased, `${basePath}/level-based/level-46-50`),
        DataGroup.fromJSON(levelBased, `${basePath}/level-based/level-51-55`),
        DataGroup.fromJSON(levelBased, `${basePath}/level-based/level-56-60`),
        DataGroup.fromJSON(levelBased, `${basePath}/level-based/level-61-65`),
        DataGroup.fromJSON(levelBased, `${basePath}/level-based/level-66-70`),
        DataGroup.fromJSON(levelBased, `${basePath}/level-based/level-71-75`),
        DataGroup.fromJSON(levelBased, `${basePath}/level-based/level-76-80`),
    ];

    // Master Recipes
    const masterRecipes = DataGroup.fromJSON(group, `${basePath}/master-recipes/index`);
    masterRecipes.subGroups = [
        DataGroup.fromJSON(masterRecipes, `${basePath}/master-recipes/mr-1`),
        DataGroup.fromJSON(masterRecipes, `${basePath}/master-recipes/mr-2`),
        DataGroup.fromJSON(masterRecipes, `${basePath}/master-recipes/mr-3`),
        DataGroup.fromJSON(masterRecipes, `${basePath}/master-recipes/mr-4`),
        DataGroup.fromJSON(masterRecipes, `${basePath}/master-recipes/mr-5`),
        DataGroup.fromJSON(masterRecipes, `${basePath}/master-recipes/mr-6`),
        DataGroup.fromJSON(masterRecipes, `${basePath}/master-recipes/mr-7`),
        DataGroup.fromJSON(masterRecipes, `${basePath}/master-recipes/mr-8`),
        DataGroup.fromJSON(masterRecipes, `${basePath}/master-recipes/other`),
    ];

    // Housing
    const housing = DataGroup.fromJSON(group, `${basePath}/housing/index`);
    housing.subGroups = [
        DataGroup.fromJSON(housing, `${basePath}/housing/housing-1`),
        DataGroup.fromJSON(housing, `${basePath}/housing/housing-2`),
    ];

    // Story
    const story = DataGroup.fromJSON(group, `${basePath}/story/index`);
    story.subGroups = [
        DataGroup.fromJSON(story, `${basePath}/story/class-quests`),
        DataGroup.fromJSON(story, `${basePath}/story/crystarium-deliveries`),
    ];

    // Ishgard Restoration
    const ishgardRestoration = DataGroup.fromJSON(group, `${basePath}/ishgard-restoration/index`);
    ishgardRestoration.subGroups = [
        DataGroup.fromJSON(ishgardRestoration, `${basePath}/ishgard-restoration/restoration-1`),
        DataGroup.fromJSON(ishgardRestoration, `${basePath}/ishgard-restoration/restoration-2`),
        DataGroup.fromJSON(ishgardRestoration, `${basePath}/ishgard-restoration/restoration-3`),
        DataGroup.fromJSON(ishgardRestoration, `${basePath}/ishgard-restoration/restoration-4`),
        DataGroup.fromJSON(ishgardRestoration, `${basePath}/ishgard-restoration/skysteel-tools`),
        DataGroup.fromJSON(ishgardRestoration, `${basePath}/ishgard-restoration/other`),
    ];

    // Collectables
    const collectables = DataGroup.fromJSON(group, `${basePath}/collectables/index`);
    collectables.subGroups = [
        DataGroup.fromJSON(collectables, `${basePath}/collectables/50-60`),
        DataGroup.fromJSON(collectables, `${basePath}/collectables/61-70`),
        DataGroup.fromJSON(collectables, `${basePath}/collectables/71-80`),
    ];

    // Final
    group.subGroups = [
        levelBased,
        masterRecipes,
        housing,
        story,
        ishgardRestoration,
        collectables,
    ];

    return group;
}
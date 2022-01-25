import { Lang } from '../../../../constants';
import { spreadLangs } from '../../../../util/spreadLangs';
import { Content } from '../../../Content';

import { NotebookMap } from './notebookMap';

type Recipes_API = any;

type Recipe_API = any;
type Recipe_Cache = any;
type Recipe_App = any;

// Helps identify which lists are which
// https://xivapi.com/RecipeNotebookList/1306?columns=Recipe0.ItemResult.Name

export class Recipes extends Content {
    API_ENDPOINT = 'RecipeNotebookList';
    APP_PATH = 'logs/crafting';
    MERGE_KEYS = ['name', 'level'];
    COMMON_KEYS = ['level'];

    constructor() {
        super('logs/crafting/RecipeNotebookList');
    }

    excludeAppPathMerge(appPath: string): boolean {
        const isCarpenter = appPath.includes('/shared/');
        const isShared = appPath.includes('/beast-tribe-quests/') ||
            appPath.includes('/custom-deliveries/') ||
            appPath.includes('/dyes');

        return isShared && !isCarpenter;
    }

    getAppPath(cachePath: string): string {
        cachePath = cachePath.replace('/woodworking/', '/carpenter/');
        cachePath = cachePath.replace('/smithing/', '/blacksmith/');
        cachePath = cachePath.replace('/armorcraft/', '/armorer/');
        cachePath = cachePath.replace('/goldsmithing/', '/goldsmith/');
        cachePath = cachePath.replace('/leatherworking/', '/leatherworker/');
        cachePath = cachePath.replace('/clothcraft/', '/weaver/');
        cachePath = cachePath.replace('/alchemy/', '/alchemist/');
        cachePath = cachePath.replace('/cooking/', '/culinarian/');

        if(cachePath.includes('/carpenter/')) {
            cachePath = cachePath.replace('/carpenter/beast-tribe-quests', '/shared/beast-tribe-quests');
            cachePath = cachePath.replace('/carpenter/custom-deliveries', '/shared/custom-deliveries');
            cachePath = cachePath.replace('/carpenter/dyes', '/shared/dyes');
        }

        cachePath = cachePath.replace('restoration-other.json', 'other.json');

        return cachePath;
    }

    mapAppTask(cacheTask: Recipe_Cache, lang: Lang): Recipe_App {
        return {
            level: cacheTask.Level,
            name: cacheTask[`Name_${lang}`]
        };
    }

    getCacheKey(appKey: string, lang: Lang): string {
        switch(appKey) {
            case 'id': return 'ID';
            case 'level': return 'Level';
            case 'name': return `Name_${lang}`;
        }
    }

    getCachePath(response: Recipes_API): string[] {
        const job = response.Recipe0.CraftType.Name;
        const ID = response.ID;
        const subdirs = NotebookMap.find(
            (notebook) => notebook.ids.includes(ID)
        )?.path || ['_error'];

        return [job, ...subdirs];
    }

    mapCacheTask(response: Recipes_API): Recipe_Cache[] {
        const recipes = [];

        let hasRecipe = true;
        for(let i = 0; hasRecipe; i++) {
            const Recipe = response[`Recipe${i}`];
            hasRecipe = !!Recipe;

            if(hasRecipe) {
                const stars = new Array(Recipe.RecipeLevelTable.Stars).fill('★').join('');

                recipes.push({
                    ID: Recipe.ItemResult.ID,
                    Level: `${Recipe.RecipeLevelTable.ClassJobLevel}${stars ? ' ' + stars : ''}`,
                    ...spreadLangs(Recipe.ItemResult, 'Name')
                });
            }
        }

        return recipes;
    }

}

import * as fs from 'fs';

import { CACHE_DIR, Lang } from '../../../../constants';
import { spreadLangs } from '../../../../util/spreadLangs';
import { Content } from '../../../Content';

type Title_API = any;
type Title_Cache = any;
type Title_App = any;

type AchievementPathMap = {
    [id: string]: string;
};

type Chains = {
    cSiblings?: string[];
};

const chainKeys = ['cSiblings'];

export class Title extends Content {
    private static achievementPaths: AchievementPathMap;

    API_ENDPOINT = 'Title';
    APP_PATH = 'character/character/title';
    MERGE_KEYS = ['name', 'category', 'achievement', ...chainKeys];
    COMMON_KEYS = ['patch', ...chainKeys];

    constructor() {
        super('character/character/Title');
    }

    mapAppTask(cacheTask: Title_Cache, lang: Lang): Title_App {
        const appTask: Title_App = {
            name: cacheTask[`Name_${lang}`],
            category: cacheTask[`Category_${lang}`],
            achievement: cacheTask[`Achievement_${lang}`],
            patch: cacheTask.Version
        };

        if(cacheTask.cSiblings) appTask.cSiblings = cacheTask.cSiblings;

        return appTask;
    }

    getCacheKey(appKey: string, lang: Lang): string {
        switch(appKey) {
            case 'id': return 'ID';
            case 'name': return `Name_${lang}`;
            case 'nameFemale': return `NameFemale_${lang}`;
            case 'category': return `Category_${lang}`;
            case 'achievement': return `Achievement_${lang}`;
            case 'patch': return `Patch`;
        }

        return appKey;
    }

    mapCacheTask(response: Title_API): Title_Cache {
        return {
            ID: response.ID,
            Order: response.Order,
            Patch: response.GamePatch?.Version || '',
            ...Title.buildAppNameFields(response),
            ...Title.buildAppAchievementFields(response),
            ...Title.buildChainProps(response)
        };
    }

    // Append or prepend dots to the title
    private static buildAppNameFields(response: Title_API) {
        return {
            ...spreadLangs(response, Title.constructName, 'Name')
        };
    }

    private static constructName(response: Title_API, lang: Lang) {
        let name = response[`Name_${lang}`];
        let fName = response[`NameFemale_${lang}`];

        if(response.IsPrefix === 1) {
            name += '…';
            fName += '…';
        }
        else {
            name = `…${name}`;
            fName = `…${fName}`;
        }

        const genderless = name === fName;
        return genderless ? name : `${name} / ${fName}`;
    }

    // Grab data from cached Achievements related to the title
    private static buildAppAchievementFields(response: Title_API) {
        if(!Title.achievementPaths) Title.buildAchievementPaths();

        const Achievement = Title.getAchievement(response);
        const Category = Achievement?.AchievementCategory?.AchievementKind;

        return {
            ...spreadLangs(Achievement, 'Name', 'Achievement'),
            ...spreadLangs(Category, 'Name', 'Category'),
        };
    }

    private static buildChainProps(response: Title_API): Chains {
        const chains: Chains = {};

        // Sibling Chains
        if(response?.GameContentLinks?.Achievement?.Title) {
            const cSiblings = response.GameContentLinks.Achievement.Title.map((t) => `a.${t}`);
            if(cSiblings.length) chains.cSiblings = cSiblings;
        }

        return chains;
    }

    // Builds a map of each achievement key to its cahed path
    private static buildAchievementPaths(): void {
        Title.achievementPaths = {};
        dive(`${CACHE_DIR}/achievement`);

        function dive(path: string): void {
            fs.readdirSync(path).forEach((stat) => {
                const fullDir = `${path}/${stat}`;

                if(fs.lstatSync(fullDir).isDirectory()) {
                    dive(fullDir);
                }
                else {
                    Title.achievementPaths[stat.replace('.json', '')] = fullDir;
                }
            });
        }
    }

    // Get the achievement related to the title
    private static getAchievement(response: Title_API) {
        const id = response.GameContentLinks?.Achievement?.Title?.[0];
        if(!id) return null;

        if(!Title.achievementPaths[id]) {
            console.error(`Achievement ${id} referenced by Title but not in Achievement cache`);
            return null;
        }

        return JSON.parse(fs.readFileSync(Title.achievementPaths[id], 'utf8'));
    }
}

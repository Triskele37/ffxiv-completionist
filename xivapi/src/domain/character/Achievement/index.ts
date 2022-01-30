import { Lang } from '../../../constants';
import { spreadLangs } from '../../../util/spreadLangs';
import { Content } from '../../Content.js';

type Achievement_API = any;
type Achievement_Cache = any;
type Achievement_App = any;

type Chained = {
    ChainedSiblings: string[];
};

export class Achievement extends Content {
    API_ENDPOINT = 'Achievement';
    APP_PATH = 'character/achievement';
    MERGE_KEYS = ['name', 'description', 'reward'];
    COMMON_KEYS = ['points', 'patch', ...Content.CHAIN_KEYS];

    constructor() {
        super('character/Achievement');
    }

    getAppPath(appPath: string): string {
        return appPath.replace(
            'crafting-gathering',
            'crafting-and-gathering'
        );
    }

    mapAppTask(cacheTask: Achievement_Cache, lang: Lang): Achievement_App {
        const appTask: Achievement_App = {
            name: cacheTask[`Name_${lang}`],
            description: cacheTask[`Description_${lang}`],
            reward: cacheTask[`Reward_${lang}`],
            points: cacheTask.Points,
            patch: cacheTask.Patch,
        };

        // Only attach chain lists if they have something
        if(cacheTask.ChainedSiblings.length) {
            appTask.cSiblings = cacheTask.ChainSiblings;
        }

        return appTask;
    }

    getCacheKey(appKey: string, lang: Lang): string {
        switch(appKey) {
            case 'id': return 'ID';
            case 'name': return `Name_${lang}`;
            case 'description': return `Description_${lang}`;
            case 'reward': return `Reward_${lang}`;
            case 'points': return 'Points';
            case 'patch': return 'Patch';
            case 'cSiblings': return 'ChainSiblings';
        }
    }

    getCachePath(response: Achievement_API): string[] {
        return [
            response.AchievementCategory.AchievementKind.Name,
            response.AchievementCategory.Name
        ];
    }

    mapCacheTask(response: Achievement_API): Achievement_Cache {
        const reward = (!response.Item && !response.Title) ? {} : {
            Reward_de: Achievement.buildRewardProperties(response, Lang.DE),
            Reward_en: Achievement.buildRewardProperties(response, Lang.EN),
            Reward_fr: Achievement.buildRewardProperties(response, Lang.FR),
            Reward_ja: Achievement.buildRewardProperties(response, Lang.JA),
        };

        return {
            ID: response.ID,
            ...spreadLangs(response, 'Name'),
            ...spreadLangs(response, 'Description'),
            Order: response.Order,
            Points: response.Points,
            ...reward,
            ...Achievement.buildChainedTasks(response),
            Patch: Achievement.patchHotfix(response),
        };
    }

    private static buildRewardProperties(response: Achievement_API, lang: Lang): string {
        // Item Reward
        if(response.Item) return response.Item[`Name_${lang}`];

        // Title Reward
        const title = response.Title[`Name_${lang}`];
        const femaleTitle = response.Title[`NameFemale_${lang}`];
        return (title === femaleTitle) ? title : `${title} / ${femaleTitle}`;
    }

    private static buildChainedTasks(response: Achievement_API): Chained {
        return {
            ChainedSiblings: response.Title ? [`title.${response.Title.ID}`] : []
        };
    }

    private static patchHotfix(response: Achievement_API): string {
        if(!response.GamePatch) return response.Patch === 72 ? '5.4' : '';
        else return response.GamePatch.Version;
    }
}

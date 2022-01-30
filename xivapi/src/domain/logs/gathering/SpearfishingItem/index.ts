import * as fs from 'fs';

import { CACHE_DIR, Lang } from '../../../../constants';
import { spreadLangs } from '../../../../util/spreadLangs';
import { Content } from '../../../Content';

type SpearfishingItem_API = any;
type SpearfishingItem_Cache = any;
type SpearfishingItem_App = any;

export class SpearfishingItem extends Content {
    API_ENDPOINT = 'SpearfishingItem';
    APP_PATH = 'logs/gathering/spearfishing/guide';
    MERGE_KEYS = ['name', 'location', 'fishingHole', 'type'];
    COMMON_KEYS = ['iLvl'];

    constructor() {
        super('logs/gathering/SpearfishingItem');
    }

    mapAppTask(cacheTask: SpearfishingItem_Cache, lang: Lang): SpearfishingItem_App {
        return {
            iLvl: cacheTask.ILvl,
            name: cacheTask[`Name_${lang}`],
            location: cacheTask[`Location_${lang}`],
            fishingHole: cacheTask[`FishingHole_${lang}`],
            type: cacheTask[`Type_${lang}`],
        };
    }

    getCacheKey(appKey: string, lang: Lang): string {
        switch(appKey) {
            case 'id': return 'ID';
            case 'iLvl': return 'ILvl';
            case 'name': return `Name_${lang}`;
            case 'location': return `Location_${lang}`;
            case 'fishingHole': return `FishingHole_${lang}`;
            case 'type': return `Type_${lang}`;
        }
    }

    //TODO: wrong
    // getAppPath(response: SpearfishingItem_API): string {
    //     if(!response?.ID) return '_error';
    //     return `page-${Math.floor(response.ID / 25) + 1}`;
    // }

    mapCacheTask(response: SpearfishingItem_API): SpearfishingItem_Cache {
        const stars = new Array(response.GatheringItemLevel.Stars).fill('★').join('');

        return {
            ID: response.ItemTargetID,
            ILvl: `${response.GatheringItemLevel.GatheringItemLevel}${stars ? ' ' + stars : ''}`,
            // IsHidden: response.IsHidden,
            IsInLog: response.IsInLog,

            // Name
            ...spreadLangs(response.Item, 'Name'),

            // Location & Fishing Hole
            ...SpearfishingItem.getFishingHole(response),

            // Type
            ...SpearfishingItem.getType(response),
        };
    }

    private static getType(response: SpearfishingItem_API) {
        return {
            Text_de: response.FishingRecordType?.Addon?.Text_de || '',
            Text_en: response.FishingRecordType?.Addon?.Text_en || '',
            Text_fr: response.FishingRecordType?.Addon?.Text_fr || '',
            Text_ja: response.FishingRecordType?.Addon?.Text_ja || '',
        };
    }

    private static getFishingHole(response: SpearfishingItem_API) {
        const basePath = `${CACHE_DIR}/fishingspot`;

        fs.readdirSync(basePath).forEach((fishingSpot) => {
            const spotPath = `${basePath}/${fishingSpot}`;
            const spot = JSON.parse(fs.readFileSync(spotPath, 'utf8'));

            for(let j = 0; j < 10; j++) {
                if(spot[`Item${j}TargetID`] === response.ItemTargetID) {
                    return {
                        ...spreadLangs(spot.TerritoryType.PlaceName, 'Name', 'Location'),
                        ...spreadLangs(spot.PlaceName, 'Name', 'FishingHole')
                    };
                }
            }
        });

        return {};
    }
}

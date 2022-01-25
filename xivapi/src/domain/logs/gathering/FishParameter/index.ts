import * as fs from 'fs';

import { CACHE_DIR, Lang } from '../../../../constants';
import { spreadLangs } from '../../../../util/spreadLangs';
import { Content } from '../../../Content';

type FishGuide_API = any;
type FishGuide_Cache = any;
type FishGuide_App = any;

export class FishParameter extends Content {
    API_ENDPOINT = 'FishParameter';
    APP_PATH = 'logs/gathering/fishing/guide';
    MERGE_KEYS = ['name', 'location', 'fishingHole', 'type'];
    COMMON_KEYS = ['iLvl'];

    constructor() {
        super('logs/gathering/FishParameter');
    }

    mapAppTask(cacheTask: FishGuide_Cache, lang: Lang): FishGuide_App {
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

    getAppPath(response: FishGuide_API): string {
        if(!response?.ID) return '_error';
        return `page-${Math.floor(response.ID / 25) + 1}`;
    }

    mapCacheTask(response: FishGuide_API): FishGuide_Cache {
        const stars = new Array(response.GatheringItemLevel.Stars).fill('★').join('');

        return {
            ID: response.ItemTargetID,
            ILvl: `${response.GatheringItemLevel.GatheringItemLevel}${stars ? ' ' + stars : ''}`,
            // IsHidden: response.IsHidden,
            IsInLog: response.IsInLog,

            // Name
            ...spreadLangs(response.Item, 'Name'),

            // Location & Fishing Hole
            ...FishParameter.getFishingHole(response),

            // Type
            ...FishParameter.getType(response),
        };
    }

    private static getType(response: FishGuide_API) {
        return {
            Text_de: response.FishingRecordType?.Addon?.Text_de || '',
            Text_en: response.FishingRecordType?.Addon?.Text_en || '',
            Text_fr: response.FishingRecordType?.Addon?.Text_fr || '',
            Text_ja: response.FishingRecordType?.Addon?.Text_ja || '',
        };
    }

    private static getFishingHole(response: FishGuide_API) {
        const spotsPath = `${CACHE_DIR}/fishingspot`;

        fs.readdirSync(spotsPath).forEach((fishingSpot) => {
            const spotPath = `${spotsPath}/${fishingSpot}`;
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

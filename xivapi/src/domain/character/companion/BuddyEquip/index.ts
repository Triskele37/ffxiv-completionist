import { Lang } from '../../../../constants';
import { spreadLangs } from '../../../../util/spreadLangs';

import { Content } from '../../../Content';

type Barding_API = any;
type Barding_Cache = any;
type Barding_App = any;

export class BuddyEquip extends Content {
    NAME = 'Barding';
    API_ENDPOINT = 'BuddyEquip';
    APP_PATH = 'character/companion/barding';
    MERGE_KEYS = ['name'];

    constructor() {
        super('character/companion/BuddyEquip');
    }

    mapAppTask(cacheTask: Barding_Cache, lang: Lang): Barding_App {
        return {
            name: cacheTask[`Name_${lang}`],
            category: '',
            source: '',
            patch: '',
        };
    }

    getCacheKey(appKey: string, lang: Lang): string {
        switch(appKey) {
            case 'id': return 'ID';
            case 'name': return `Name_${lang}`;
        }
    }

    mapCacheTask(response: Barding_API): Barding_Cache {
        return {
            ID: response.ID,
            Order: response.Order,
            ...spreadLangs(response, 'Name'),
        };
    }
}

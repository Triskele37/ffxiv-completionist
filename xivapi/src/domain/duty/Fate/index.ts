import { Lang } from '../../../constants';
import { spreadLangs } from '../../../util/spreadLangs';
import { Content } from '../../Content';

type Fate_API = any;
type Fate_Cache = any;
type Fate_App = any;

export class Fate extends Content {
    API_ENDPOINT = 'Fate';
    APP_PATH = 'duty/fate';
    MERGE_KEYS = ['level', 'name', 'location', 'type', 'patch'];
    COMMON_KEYS = ['level', 'patch'];

    constructor() {
        super('duty/Fate');
    }

    mapAppTask(cacheTask: Fate_Cache, lang: Lang): Fate_App {
        return {
            level: '',
            name: cacheTask[`Name_${lang}`],
            location: cacheTask[`Category_${lang}`],
            type: cacheTask[`Achievement_${lang}`],
            patch: cacheTask.Version
        };
    }

    getCacheKey(appKey: string, lang: Lang): string {
        switch(appKey) {
            case 'id': return 'ID';
            case 'level': return '';
            case 'name': return `Name_${lang}`;
            case 'location': return `_${lang}`;
            case 'type': return `_${lang}`;
            case 'patch': return `Patch`;
        }

        return appKey;
    }

    mapCacheTask(response: Fate_API): Fate_Cache {
        return {
            ID: response.ID,
            ...spreadLangs(response, 'Name'),
            Location: response.Location,
            Type: response.Type,
            Patch: response.GamePatch?.Version || ''
        };
    }

}

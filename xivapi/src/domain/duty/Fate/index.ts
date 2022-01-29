import { Lang } from '../../../constants';
import { spreadLangs } from '../../../util/spreadLangs';
import { Content } from '../../Content';

import { FateMap } from './FateMap';

type Fate_API = any;
type Fate_Cache = any;
type Fate_App = any;

//TODO: unsure how to connect to proper Zones
export class Fate extends Content {
    API_ENDPOINT = 'Fate';
    APP_PATH = 'duty/fate';
    MERGE_KEYS = ['level', 'name', 'type', 'patch'];
    COMMON_KEYS = ['level', 'patch'];

    constructor() {
        super('duty/Fate');
    }

    // getAppPath(cachePath: string): string {
    //     return '';
    // }

    mapAppTask(cacheTask: Fate_Cache, lang: Lang): Fate_App {
        return {
            level: cacheTask.Level,
            name: cacheTask[`Name_${lang}`],
            type: cacheTask[`Type_${lang}`],
            patch: cacheTask.Version
        };
    }

    getCachePath(response: Fate_API): string[] {
        return FateMap[0].path;
        const fatePath = FateMap.find((map) => map.ids.includes(response.ID))?.path;
        return fatePath || ['_error'];
    }

    getCacheKey(appKey: string, lang: Lang): string {
        switch(appKey) {
            case 'id': return 'ID';
            case 'level': return 'Level';
            case 'name': return `Name_${lang}`;
            case 'type': return `Type_${lang}`;
            case 'patch': return `Patch`;
        }

        return appKey;
    }

    mapCacheTask(response: Fate_API): Fate_Cache {
        return {
            ID: response.ID,
            Level: response.ClassJobLevel,
            ...spreadLangs(response, 'Name'),
            ...Fate.getTypes(response),
            Patch: response.GamePatch?.Version || ''
        };
    }

    private static getTypes(response: Fate_API) {
        switch(response.IconMapID) {
            case 60501: return {
                Type_en: 'Slay Enemies',
                Type_fr: 'Ennemies à abattre'
            };
            case 60502: return {
                Type_en: 'Notorious Monster',
                Type_fr: 'Défi'
            };
            case 60503: return {
                Type_en: 'Gather Items',
                Type_fr: 'Ramassage d\'objets'
            };
            case 60504: return {
                Type_en: 'Defense',
                Type_fr: 'Défense'
            };
            case 60505: return {
                Type_en: 'Escort',
                Type_fr: 'Escorte'
            };
            case 60506: return {
                Type_en: 'Chase',
                Type_fr: 'Pourchasse'
            };
            default: return {};
        }
    }

}

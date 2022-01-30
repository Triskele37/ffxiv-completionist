import { Lang } from '../../../constants';
import { spreadLangs } from '../../../util/spreadLangs';

import { Content } from '../../Content';
import { FateMap } from './FateMap';

type Fate_API = any;
type Fate_Cache = any;
type Fate_App = any;

export class Fate extends Content {
    API_ENDPOINT = 'Fate';
    APP_PATH = 'duty/fate';
    MERGE_KEYS = ['level', 'name', 'type', 'patch'];
    COMMON_KEYS = ['level', 'patch'];

    constructor() {
        super('duty/Fate');
    }

    getAppPath(appPath: string, cacheTask: Fate_Cache): string {
        const fatePath = FateMap.find((map) => map.ids.includes(cacheTask.ID))?.path;
        if(fatePath) {
            appPath = appPath.replace('.json', '/');
            appPath += fatePath.join('/') + '.json';
        }

        return appPath;
    }

    mapAppTask(cacheTask: Fate_Cache, lang: Lang): Fate_App {
        return {
            level: cacheTask.Level,
            name: cacheTask[`Name_${lang}`],
            type: cacheTask[`Type_${lang}`],
            patch: cacheTask.Version
        };
    }

    getCachePath(response: Fate_API): string[] {
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
            case 60501:
            case 60801:
                return {
                    Type_en: 'Slay Enemies',
                    Type_fr: 'Ennemis à abattre'
                };
            case 60502:
            case 60802:
                return {
                    Type_en: 'Notorious Monster',
                    Type_fr: 'Défi'
                };
            case 60503:
            case 60803:
                return {
                    Type_en: 'Gather Items',
                    Type_fr: 'Ramassage d\'objets'
                };
            case 60504:
            case 60804:
                return {
                    Type_en: 'Defense',
                    Type_fr: 'Défense'
                };
            case 60505:
                return {
                    Type_en: 'Escort',
                    Type_fr: 'Escorte'
                };
            case 60506:
                return {
                    Type_en: 'Chase',
                    Type_fr: 'Pourchasse'
                };
            default: return {};
        }
    }

}

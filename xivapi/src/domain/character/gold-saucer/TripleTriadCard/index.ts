import { Lang } from '../../../../constants';
import { spreadLangs } from '../../../../util/spreadLangs';

import { Content } from '../../../Content';

type Card_API = any;
type Card_Cache = any;
type Card_App = any;

export class TripleTriadCard extends Content {
    NAME = 'TripleTriadCard';
    API_ENDPOINT = 'Item';
    APP_PATH = 'character/gold-saucer/triple-triad-card-list';
    MERGE_KEYS = ['name'];
    COMMON_KEYS = ['number', 'rarity', 'patch'];
    filterParams = 'AdditionalDataTarget=TripleTriadCard';

    constructor() {
        super('character/gold-saucer/TripleTriadCard');
    }

    mapAppTask(cacheTask: Card_Cache, lang: Lang): Card_App {
        //TODO: check if GameContentLinks can be useful for opponent & acquiredBy fields
        return {
            name: cacheTask[`Name_${lang}`],
            number: cacheTask.Number,
            rarity: cacheTask.Rarity,
            patch: cacheTask.Patch,
            type: '',
            opponent: '',
            acquiredBy: ''
        };
    }

    getCacheKey(appKey: string, lang: Lang): string {
        switch(appKey) {
            case 'id': return 'ID';
            case 'name': return `Name_${lang}`;
            case 'number': return 'Number';
            case 'rarity': return 'Rarity';
            case 'patch': return 'Patch';
        }
    }

    mapCacheTask(response: Card_API): Card_Cache {
        const RealID = response.AdditionalData.ID;
        return {
            ID: RealID,
            Number: `000${RealID}`.slice(-3),
            ...spreadLangs(response.AdditionalData, 'Name'),
            Rarity: response.Description.replace(/[^★]/g, ''),
            Patch: response.GamePatch.Version,
        };
    }

}

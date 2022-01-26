import { Lang } from '../../../../constants';
import { spreadLangs } from '../../../../util/spreadLangs';

import { Content } from '../../../Content';
import { ExCards } from './ExCards';

type Card_API = any;
type Card_Cache = any;
type Card_App = any;

// Missing card ID between Amon & Magus Sisters

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

    getCachePath(response: Card_API): string[] {
        const cardId = TripleTriadCard.getCardId(response);

        // Ex cards
        if(cardId.includes('Ex')) return ['last-page'];

        // Normal Cards
        const page = Math.floor(parseInt(cardId, 10) / 30) + 1;
        return [`page-${page}`];
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
        return {
            ID: response.AdditionalData.ID,
            Number: TripleTriadCard.getCardId(response),
            ...spreadLangs(response.AdditionalData, 'Name'),
            Rarity: response.Description.replace(/[^★]/g, ''),
            Patch: response.GamePatch.Version,
        };
    }

    private static getCardId(response: Card_API) {
        // Get the initial raw card ID
        let cardId = response.AdditionalData.ID;

        // Ex Cards have their own subset of ids
        if(ExCards.includes(cardId)) return `Ex. ${ExCards.indexOf(cardId) + 1}`;

        // Subtract from cardId by 1 for each Ex card the raw ID is higher than
        ExCards.forEach((id) => {
            if(id < cardId) cardId--;
        });

        return `000${cardId}`.slice(-3);
    }

}

import { COMPANIES, Lang } from '../../../../constants';
import { spreadLangs } from '../../../../util/spreadLangs';

import { Content } from '../../../Content';

type Leve_API = any;
type Leve_Cache = any;
type Leve_App = any;

export class Leve extends Content {
    API_ENDPOINT = 'Leve';
    APP_PATH = 'duty/quest/levequests';
    MERGE_KEYS = ['name', 'issueLocation', 'leveZone'];
    COMMON_KEYS = ['level'];

    constructor() {
        super('duty/quest/Leve');
    }

    mapAppTask(cacheTask: Leve_Cache, lang: Lang): Leve_App {
        const company = !!cacheTask.Company_en ? { company: cacheTask[`Company_${lang}`] } : {};

        return {
            level: cacheTask.Level,
            name: cacheTask[`Name_${lang}`],
            issueLocation: cacheTask[`IssueLocation_${lang}`],
            leveZone: cacheTask[`LeveZone_${lang}`],
            ...company
        };
    }

    getCacheKey(appKey: string, lang: Lang): string {
        switch(appKey) {
            case 'id': return 'ID';
            case 'level': return 'Level';
            case 'name': return `Name_${lang}`;
            case 'issueLocation': return `IssueLocation_${lang}`;
            case 'leveZone': return `LeveZone_${lang}`;
        }
    }

    getCachePath(response: Leve_API): string[] {
        const category = response.JournalGenre.JournalCategory;

        let leveDirectory = '_error';
        if(response.BattleLeve || response.CompanyLeve) leveDirectory = 'battlecraft';
        if(response.CraftLeve) leveDirectory = 'tradecraft';
        if(response.GatheringLeve) leveDirectory = 'fieldcraft';

        // xivapi is weird with fishing leves
        if(category.Name.includes('Fishing')) leveDirectory = 'fieldcraft';

        return [
            leveDirectory,
            category.Name.replace(' Leves', '')
        ];
    }

    mapCacheTask(response: Leve_API): Leve_Cache {
        // Can potentially add leve type as a column
        // No connection to NPC leve giver available

        // Company Leves
        let CompanyNames = {};
        if(!!response.CompanyLeve) {
            const company = response.JournalGenre.Name.replace(' Levequests', '');
            CompanyNames = { ...spreadLangs(COMPANIES[company], 'Company') };
        }

        return {
            ID: response.ID,
            Level: response.ClassJobLevel,
            ...spreadLangs(response, 'Name'),
            ...spreadLangs(response.PlaceNameIssued, 'Name', 'IssueLocation'),
            ...spreadLangs(response.PlaceNameStartZone, 'Name', 'LeveZone'),
            ...CompanyNames
        };
    }

}

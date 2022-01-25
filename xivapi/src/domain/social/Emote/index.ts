import { Lang } from '../../../constants';
import { spreadLangs } from '../../../util/spreadLangs';
import { Content } from '../../Content';

type Emote_API = any;
type Emote_Cache = any;
type Emote_App = any;

export class Emote extends Content {
    API_ENDPOINT = 'Emote';
    APP_PATH = 'social/emotes';
    MERGE_KEYS = ['name', 'command'];
    COMMON_KEYS = ['patch'];

    constructor() {
        super('social/Emote');
    }

    mapAppTask(cacheTask: Emote_Cache, lang: Lang): Emote_App {
        return {
            name: cacheTask[`Name_${lang}`],
            command: cacheTask[`Command_${lang}`],
            category: '',
            source: '',
            patch: cacheTask.Patch
        };
    }

    getCacheKey(appKey: string, lang: Lang): string {
        switch(appKey) {
            case 'id': return 'ID';
            case 'name': return `Name_${lang}`;
            case 'command': return `Command_${lang}`;
            case 'method': return `Method`;
            case 'patch': return `Patch`;
        }
    }

    mapCacheTask(response: Emote_API): Emote_Cache {
        return {
            ID: response.ID,
            ...spreadLangs(response, 'Name'),
            ...spreadLangs(response, this.constructCommand, 'Command'),
            Patch: response.GamePatch?.Version
        };
    }

    // Set is used to filter dupe commands
    constructCommand(response: Emote_API, lang: Lang): string {
        return [
            response.TextCommand?.[`Alias_${lang}`],
            response.TextCommand?.[`ShortAlias_${lang}`],
            response.TextCommand?.[`Command_${lang}`],
            response.TextCommand?.[`ShortCommand_${lang}`]
        ].filter((c, i, arr) => c && arr.indexOf(c) === i).join(', ');
    }

}

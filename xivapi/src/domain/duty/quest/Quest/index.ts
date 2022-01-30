import { Lang } from '../../../../constants';
import { spreadLangs } from '../../../../util/spreadLangs';
import { Content } from '../../../Content';
import { quasiQuests } from './quasiQuests';

type Quest_API = any;
type Quest_Cache = any;
type Quest_App = any;

type Chains = {
    cPrev?: number[];
    cPrevAny?: boolean;
    cNext?: number[];
    cExclude?: number[];
};

const chainKeys = [
    'cPrev', 'cPrevAny', 'cNext', 'cExclude'
];

export class Quest extends Content {
    API_ENDPOINT = 'Quest';
    APP_PATH = 'duty/quest';
    MERGE_KEYS = ['name', 'npc', 'reputation', 'level', ...chainKeys];
    COMMON_KEYS = ['level', ...chainKeys];

    constructor() {
        super('duty/quest/Quest');
    }

    getAppPath(appPath: string): string {
        // Main Scenario
        appPath = appPath.replace('seventh-umbral-era.json', 'seventh-umbral-era/index.json');
        appPath = appPath.replace(/\/[\w-]*-main-scenario-quests[\w-]*\//g, '/');
        appPath = appPath.replace(/\/main-scenario-[\w-]*\//, '/main-scenario/');

        // Role Quests
        appPath = appPath.replace(/role-quests-.*\.json/, 'role.json');

        // Beast Tribes
        if(appPath.includes('/beast-tribe-quests')) {
            const tribeQuests = appPath.split('/').reverse()[1];
            const tribe = tribeQuests.split('-')[0];
            const removeAfter = appPath.indexOf('/beast-tribe-quests');
            const questPath = appPath.substr(0, removeAfter);
            appPath = `${questPath}/beast-tribe/${tribe}.json`;
        }

        // CoaNE
        if(appPath.includes('chronicles-of-a-new-era')) {
            appPath = appPath.replace(/chronicles-of-a-new-era-[\w-]*\//, '');
            appPath = appPath.replace('yorha-dark-apocalypse/', '');
        }

        // Remove -quests and -events ending from everything
        appPath = appPath.replace(/-quests/g, '');
        appPath = appPath.replace('-events.json', '.json');

        // Indexes
        const indexify = (name) => {
            appPath = appPath.replace(`${name}/${name}`, `${name}/index`);
        };

        indexify('crystalline-mean');
        indexify('special');
        indexify('studium');
        indexify('role');

        // Cleanup
        appPath = appPath.replace('quasi/quasi.json', 'quasi-quests.json');
        appPath = appPath.replace('/side-story/', '/side-story-quests/');

        return appPath;
    }

    mapAppTask(cacheTask: Quest_Cache, lang: Lang): Quest_App {
        const task: Quest_App = {
            name: cacheTask[`Name_${lang}`],
            npc: cacheTask[`Npc_${lang}`],
            level: cacheTask.Level
        };

        if(cacheTask.cPrev) task.cPrev = cacheTask.cPrev;
        if(cacheTask.cPrevAny) task.cPrevAny = cacheTask.cPrevAny;
        if(cacheTask.cNext) task.cNext = cacheTask.cNext;
        if(cacheTask.cExclude) task.cExclude = cacheTask.cExclude;

        if(cacheTask.Reputation) task.reputation = cacheTask[`Reputation_${lang}`];

        return task;
    }

    getCacheKey(appKey: string, lang: Lang): string {
        switch(appKey) {
            case 'id': return 'ID';
            case 'name': return `Name_${lang}`;
            case 'npc': return `Npc_${lang}`;
            case 'reputation': return `Reputation_${lang}`;
            case 'level': return 'Level';
        }

        return appKey;
    }

    getCachePath(response: Quest_API): string[] {
        const subCategory = Quest.hotfixJournal(response);
        const category = subCategory.JournalCategory;
        const section = category.JournalSection;
        const isLocationSidequests = (category.Name.includes('Sidequests') && section && section.Name === 'Sidequests');

        const path = [
            !section && !!category ? 'Main Scenario Past' : section.Name,
            category.Name,
            isLocationSidequests ? response.PlaceName.Name : subCategory.Name
        ];

        // Split up ARR initial MSQ
        if(subCategory.Name === 'Seventh Umbral Era') {
            if(response.ClassJobLevel0 < 15) {
                let startingZone = response.PlaceName.Name;
                if(startingZone.includes('Shroud')) startingZone = 'Gridania';
                if(startingZone.includes('Thanalan')) startingZone = 'Ul\'dah';
                if(startingZone.includes('Noscea')) startingZone = 'Limsa Lominsa';
                path.push(startingZone);
            }
        }

        return path;
    }

    mapCacheTask(response: Quest_API): Quest_Cache {
        const reputation = !response.BeastReputationRank ? {} : {
            ...spreadLangs(response.BeastReputationRank, 'Name', 'Reputation')
        };

        return {
            ID: response.ID,
            ...spreadLangs(response, 'Name'),
            Level: response.ClassJobLevel0 + (response.QuestLevelOffset || 0),
            Order: response.Order,

            // Quest Giver
            PlaceName: response.PlaceName.Name,
            ...spreadLangs(response.IssuerStart, 'Name', 'Npc'),

            // Linking
            ...this.buildChainProps(response),

            ...reputation
        };
    }

    // Quasi-Quests break mapping since they don't have a journal entry
    private static hotfixJournal(response: Quest_API): Quest_API {
        if(!response.JournalGenre) {
            if(quasiQuests.includes(response.ID)) {
                return Quest.buildJournal('Other Quests', 'Quasi Quests', 'Quasi Quests');
            }
        }

        return response.JournalGenre;
    }

    private static buildJournal(section: string, category: string, genre: string) {
        return {
            Name: genre,
            JournalCategory: {
                Name: category,
                JournalSection: { Name: section }
            }
        };
    }

    //TODO: optimize targeting by prefixing all ids
    private buildChainProps(response: Quest_API): Chains {
        const chains: Chains = {};

        // Previous Chain
        const cPrev = [];
        if(this.chainExists(response.PreviousQuest0TargetID)) cPrev.push(response.PreviousQuest0TargetID);
        if(this.chainExists(response.PreviousQuest1TargetID)) cPrev.push(response.PreviousQuest1TargetID);
        if(this.chainExists(response.PreviousQuest2TargetID)) cPrev.push(response.PreviousQuest2TargetID);

        if(cPrev.length) {
            chains.cPrev = cPrev;

            // cPrevAny means nothing with 1 chained quest
            if(cPrev.length > 1 && response.PreviousQuestJoin === 2) {
                chains.cPrevAny = true;
            }
        }

        // Next Chain
        const unlocks = response?.GameContentLinks?.Quest;
        if(unlocks) {
            let cNext = [];
            if(unlocks.PreviousQuest0) cNext.push(...unlocks.PreviousQuest0);
            if(unlocks.PreviousQuest1) cNext.push(...unlocks.PreviousQuest1);
            if(unlocks.PreviousQuest2) cNext.push(...unlocks.PreviousQuest2);

            cNext = cNext.filter((id) => !this.isRemovedQuest(id));

            if(cNext.length) chains.cNext = cNext;
        }

        // Exclude Chain
        const cExclude = [];
        if(this.chainExists(response.QuestLock0TargetID)) cExclude.push(response.QuestLock0TargetID);
        if(this.chainExists(response.QuestLock1TargetID)) cExclude.push(response.QuestLock1TargetID);

        if(cExclude.length) chains.cExclude = cExclude;

        return chains;
    }

    private chainExists(questID: number): boolean {
        return questID && !this.isRemovedQuest(questID);
    }

    private isRemovedQuest(questID: number): boolean {
        return Object.keys(this.excludedIds).includes(questID.toString());
    }

}

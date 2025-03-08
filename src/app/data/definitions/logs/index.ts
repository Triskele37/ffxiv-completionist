import { GroupDefinition } from '@model/Definition';
import { CRAFTING_LOG_DEFINITION } from './crafting';
import { GATHERING_LOG_DEFINITION } from './gathering';

export const LOGS_DEFINITION: GroupDefinition = {
    path: 'logs',
    subGroups: [
        {
            path: 'hunting',
            subGroups: [
                'arcanist',
                'archer',
                'conjurer',
                'gladiator',
                'lancer',
                'marauder',
                'pugilist',
                'rogue',
                'thaumaturge',
                'maelstrom',
                'twin-adder',
                'immortal-flames',
            ]
        },
        {
            path: 'sightseeing',
            subGroups: [
                'a-realm-reborn',
                'heavensward',
                'stormblood',
                'shadowbringers',
                'endwalker',
                'dawntrail'
            ]
        },
        CRAFTING_LOG_DEFINITION,
        GATHERING_LOG_DEFINITION,
        {
            path: 'orchestrion-list',
            subGroups: [
                'locales-i',
                'locales-ii',
                'dungeons-i',
                'dungeons-ii',
                'trials',
                'raids-i',
                'raids-ii',
                'ambient',
                'quests',
                'others',
                'seasonal',
                'online-store-and-bonuses',
            ]
        }
    ]
};

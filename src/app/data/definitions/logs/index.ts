import { GroupDefinition } from '@domain/Definition';
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
                'arr',
                'hw',
                'sb',
                'shb',
                'ew'
            ]
        },
        CRAFTING_LOG_DEFINITION,
        GATHERING_LOG_DEFINITION,
        {
            path: 'orchestrion',
            subGroups: [
                'locales-i',
                'locales-ii',
                'dungeons',
                'trials',
                'raids-i',
                'raids-ii',
                'ambient',
                'other',
                'seasonal',
                'mogstation',
            ]
        }
    ]
};

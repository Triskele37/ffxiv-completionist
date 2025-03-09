import { GroupDefinition } from '@model/Definition';

export const CHARACTER_DEFINITION: GroupDefinition = {
    path: 'character',
    subGroups: [
        {
            path: 'adventure-plate',
            subGroups: [
                'class-job',
                'minion',
                'pvp'
            ]
        },
        {
            path: 'character',
            subGroups: [
                'aesthetician',
                'title',
                'grand-company-rank',
                'classes-jobs',
                'desynthesis',
                'tribal-relations',
            ]
        },
        {
            path: 'companion',
            subGroups: [
                'companion-rank',
                'companion-skills',
                'barding',
            ]
        },
        'mount-guide',
        'minion-guide',
        'facewear',
        'fashion-accessories',
        {
            path: 'relic-gear',
            subGroups: [
                'zodiac',
                'anima',
                'eureka',
                'resistance',
                'manderville',
                'lucis-tools',
                'skysteel-tools',
                'resplendent-tools',
                'splendorous-tools',
            ]
        },
        {
            path: 'blue-mage',
            subGroups: [
                'spellbook',
                'the-masked-carnivale',
                {
                    path: 'log',
                    subGroups: [
                        'dungeon',
                        'trial',
                        'raid',
                    ]
                }
            ]
        },
        {
            path: 'gold-saucer',
            subGroups: [
                {
                    path: 'chocobo',
                    subGroups: [
                        'challenges',
                        'pedigree'
                    ]
                },
                {
                    path: 'triple-triad-card-list',
                    subGroups: [
                        'page-1',
                        'page-2',
                        'page-3',
                        'page-4',
                        'page-5',
                        'page-6',
                        'page-7',
                        'page-8',
                        'page-9',
                        'page-10',
                        'page-11',
                        'page-12',
                        'page-13',
                        'last-page',
                    ]
                },
                'triple-triad-opponents',
                'mahjong-voices'
            ]
        },
        {
            path: 'achievement',
            subGroups: [
                {
                    path: 'battle',
                    subGroups: [
                        'general',
                        'dungeons',
                        'trials',
                        'raids',
                        'the-hunt',
                        'treasure-hunt',
                        'field-operations',
                    ]
                },
                {
                    path: 'pvp',
                    subGroups: [
                        'general',
                        'ranking',
                        'the-wolves-den',
                        'frontline',
                        'rival-wings',
                    ]
                },
                {
                    path: 'character',
                    subGroups: [
                        'general',
                        'disciples-of-war',
                        'disciples-of-magic',
                        'disciples-of-the-hand',
                        'disciples-of-the-land',
                        'commendation',
                        'gold-saucer',
                    ]
                },
                {
                    path: 'items',
                    subGroups: [
                        'general',
                        'currency',
                        'desynthesis',
                        'collectables',
                        'materia',
                        'relic-weapons',
                        'zodiac-weapons',
                        'anima-weapons',
                        'deep-dungeon-weapons',
                        'eureka-weapons',
                        'resistance-weapons',
                        'manderville-weapons',
                        'skysteel-tools',
                        'splendorous-tools',
                    ]
                },
                {
                    path: 'crafting-and-gathering',
                    subGroups: [
                        'all-disciplines',
                        'carpenter',
                        'blacksmith',
                        'armorer',
                        'goldsmith',
                        'leatherworker',
                        'weaver',
                        'alchemist',
                        'culinarian',
                        'miner',
                        'botanist',
                        'fisher',
                    ]
                },
                {
                    path: 'quests',
                    subGroups: [
                        'general',
                        'main-scenario',
                        'job-and-role-quests',
                        'levequests',
                        'allied-society-quests',
                        'seasonal-events',
                    ]
                },
                {
                    path: 'exploration',
                    subGroups: [
                        'sightseeing-log',
                        'la-noscea',
                        'the-black-shroud',
                        'thanalan',
                        'coerthas',
                        'mor-dhona',
                        'abalathias-spine',
                        'dravania',
                        'gyr-abania',
                        'othard',
                        'norvrandt',
                        'the-northern-empty',
                        'ilsabard',
                        'other',
                        'duty',
                    ]
                },
                {
                    path: 'grand-company',
                    subGroups: [
                        'general',
                        'maelstrom',
                        'order-of-the-twin-adder',
                        'immortal-flames',
                    ]
                },
                {
                    path: 'legacy',
                    subGroups: [
                        'battle',
                        'currency',
                        'gathering',
                        'quests',
                        'seasonal-events',
                        'dungeons',
                        'exploration',
                        'grand-company',
                    ]
                }
            ]
        }
    ]
};

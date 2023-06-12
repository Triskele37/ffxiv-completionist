import { GroupDefinition } from '@domain/Definition';

export const CRAFTING_LOG_DEFINITION: GroupDefinition = {
    path: 'crafting',
    subGroups: [
        'master-crafting-books',
        defineCrafter('carpenter'),
        defineCrafter('blacksmith'),
        defineCrafter('armorer'),
        defineCrafter('goldsmith'),
        defineCrafter('leatherworker'),
        defineCrafter('weaver'),
        defineCrafter('alchemist'),
        defineCrafter('culinarian'),
        {
            path: 'shared',
            subGroups: [
                {
                    path: 'tribal-quests',
                    subGroups: [
                        'ixal-quests',
                        'moogle-quests',
                        'namazu-quests',
                        'dwarf-quests',
                        'loporrit-quests',
                    ]
                },
                {
                    path: 'custom-deliveries',
                    subGroups: [
                        'zhloe-aliapoh',
                        'm-naago',
                        'kurenai',
                        'adkiragh',
                        'kai-shirr',
                        'ehll-tou',
                        'charlemend',
                        'ameliance',
                        'anden',
                    ]
                },
                {
                    path: 'story',
                    subGroups: [
                        'crystarium-deliveries',
                        'studium',
                    ]
                },
                'dyes'
            ]
        }
    ]
};

type Crafter =
    'carpenter'
    | 'blacksmith'
    | 'armorer'
    | 'goldsmith'
    | 'leatherworker'
    | 'weaver'
    | 'alchemist'
    | 'culinarian';

function defineCrafter(crafter: Crafter): GroupDefinition {
    const filterBlankGroups = (x) => x;
    return {
        path: crafter,
        subGroups: [
            {
                path: 'level-based',
                subGroups: [
                    'level-1-5',
                    'level-6-10',
                    'level-11-15',
                    'level-16-20',
                    'level-21-25',
                    'level-26-30',
                    'level-31-35',
                    'level-36-40',
                    'level-41-45',
                    'level-46-50',
                    'level-51-55',
                    'level-56-60',
                    'level-61-65',
                    'level-66-70',
                    'level-71-75',
                    'level-76-80',
                    'level-81-85',
                    'level-86-90',
                ]
            },
            {
                path: 'special-recipes',
                subGroups: [
                    {
                        path:'housing',
                        subGroups: [
                            crafter !== 'culinarian' ? 'fixtures' : null,
                            'outdoor',
                            'indoor',
                            crafter !== 'culinarian' ? 'tables-rugs' : null,
                            'tabletop',
                            crafter !== 'culinarian' ? 'wall-mounted' : null,
                            crafter === 'alchemist' ? 'other' : null,
                        ].filter(filterBlankGroups)
                    },
                    {
                        path: 'collectables',
                        subGroups: [
                            '50-60',
                            '61-70',
                            '71-80',
                            '81-90',
                        ]
                    },
                    // Custom Delievries - Shared
                    // Tribal Quests - Shared
                    {
                        path: 'class',
                        subGroups: [
                            'class-quests',
                            // crystarium-deliveries - Shared
                            // studium-delieveries - Shared
                        ]
                    },
                    {
                        path: 'sidequests',
                        subGroups: [
                            'skysteel-tools',
                            'splendorous-tools',
                            'restoration-1',
                            'restoration-2',
                            'restoration-3',
                            'restoration-4',
                            'other',
                        ]
                    },
                    crafter === 'alchemist' ? {
                        path: 'others',
                        subGroups: [
                            // Dyes - Shared
                            'ornaments-1',
                            'ornaments-2',
                        ]
                    } : null
                ].filter(filterBlankGroups)
            },
            {
                path: 'master-recipes',
                subGroups: [
                    'mr-1',
                    'mr-2',
                    'mr-3',
                    'mr-4',
                    'mr-5',
                    'mr-6',
                    'mr-7',
                    'mr-8',
                    'mr-9',
                    'mr-10',
                    'other',
                ]
            }
        ]
    };
}

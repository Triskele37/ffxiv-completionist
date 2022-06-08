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
                    path: 'beast-tribe-quests',
                    subGroups: [
                        'ixal-quests',
                        'moogle-quests',
                        'namazu-quests',
                        'dwarf-quests',
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
    const definition = {
        path: crafter,
        subGroups: []
    };

    definition.subGroups.push({
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
    });

    definition.subGroups.push({
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
            'other',
        ]
    });

    let housingGroups = ['fixtures', 'outdoor', 'indoor', 'tables-rugs', 'tabletop', 'wall-mounted'];
    if(crafter === 'culinarian') housingGroups = ['outdoor', 'indoor', 'tabletop'];
    if(crafter === 'alchemist') housingGroups.push('other');

    definition.subGroups.push({
        path: 'housing',
        subGroups: housingGroups
    });

    if(crafter === 'alchemist') {
        definition.subGroups.push('ornaments');
    }

    definition.subGroups.push({
        path: 'story',
        subGroups: [
            'class-quests',
            'crystarium-deliveries',
            'studium',
        ]
    });

    definition.subGroups.push({
        path: 'ishgard-restoration',
        subGroups: [
            'restoration-1',
            'restoration-2',
            'restoration-3',
            'restoration-4',
            'skysteel-tools',
            'other',
        ]
    });

    definition.subGroups.push({
        path: 'collectables',
        subGroups: [
            '50-60',
            '61-70',
            '71-80',
            '81-90',
        ]
    });

    return definition;
}

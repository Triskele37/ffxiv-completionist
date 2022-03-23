import { GroupDefinition } from '@domain/Definition';
import { QUEST_DEFINITION } from './quest';
import { Duty_Guildhests } from './guildhests';

export const DUTY_DEFINITION: GroupDefinition = {
    path: 'duty',
    subGroups: [
        {
            path: 'collection',
            subGroups: [
                'yo-kai-medallium',
                {
                    path: 'portable-archive',
                    subGroups: [
                        'the-copied-factory',
                        'the-puppets-bunker',
                        'konoggs-messages',
                    ]
                },
                'field-record'
            ]
        },
        QUEST_DEFINITION,
        {
            path: 'duty-raid-finder',
            subGroups: [
                {
                    path: 'dungeon',
                    subGroups: [
                        'arr',
                        'hw',
                        'sb',
                        'shb',
                        'ew'
                    ]
                },
                {
                    path: 'trials',
                    subGroups: [
                        'arr',
                        'hw',
                        'sb',
                        'shb',
                        'ew'
                    ]
                },
                {
                    path: 'raids',
                    subGroups: [
                        'arr',
                        'hw',
                        'sb',
                        'shb',
                        'ew'
                    ]
                },
                {
                    path: 'guildhests',
                    subGroups: Duty_Guildhests
                },
                'deep-dungeon',
                {
                    path: 'the-hunt',
                    subGroups: [
                        'arr',
                        'hw',
                        'sb',
                        'shb',
                        'ew'
                    ]
                }
            ]
        },
        {
            path: 'trust',
            subGroups: [
                'shb',
                'ew'
            ]
        },
        {
            path: 'hall-of-the-novice',
            subGroups: [
                'tank',
                'dps',
                'healer'
            ]
        },
        {
            path: 'fate',
            subGroups: [
                {
                    path: 'la-noscea',
                    subGroups: [
                        'eastern-la-noscea',
                        'lower-la-noscea',
                        'middle-la-noscea',
                        'outer-la-noscea',
                        'upper-la-noscea',
                        'western-la-noscea',
                    ]
                },
                {
                    path: 'black-shroud',
                    subGroups: [
                        'central-shroud',
                        'east-shroud',
                        'north-shroud',
                        'south-shroud',
                    ]
                },
                {
                    path: 'thanalan',
                    subGroups: [
                        'central-thanalan',
                        'eastern-thanalan',
                        'northern-thanalan',
                        'southern-thanalan',
                        'western-thanalan',
                    ]
                },
                {
                    path: 'coerthas',
                    subGroups: [
                        'central-highlands',
                        'western-highlands',
                    ]
                },
                'mor-dhona',
                {
                    path: 'abalathias-spine',
                    subGroups: [
                        'the-sea-of-clouds',
                        'azys-lla',
                    ]
                },
                {
                    path: 'dravania',
                    subGroups: [
                        'the-churning-mists',
                        'the-dravanian-forelands',
                        'the-dravanian-hinterlands',
                    ]
                },
                {
                    path: 'gyr-abania',
                    subGroups: [
                        'the-fringes',
                        'the-lochs',
                        'the-peaks',
                    ]
                },
                {
                    path: 'othard',
                    subGroups: [
                        'the-azim-steppe',
                        'the-ruby-sea',
                        'yanxia',
                    ]
                },
                {
                    path: 'norvrandt',
                    subGroups: [
                        'amh-araeng',
                        'il-mheg',
                        'kholusia',
                        'lakeland',
                        'the-rak-tika-greatwood',
                        'the-tempest',
                    ]
                },
                {
                    path: 'northern-empty',
                    subGroups: ['labyrinthos']
                },
                {
                    path: 'ilsabard',
                    subGroups: ['thavnair', 'garlemald']
                },
                {
                    path: 'sea-of-stars',
                    subGroups: ['mare-lamentorum', 'ultima-thule']
                },
                {
                    path: 'world-unsundered',
                    subGroups: ['elpis']
                }
            ]
        },
        {
            path: 'exploratory-missions',
            subGroups: [
                {
                    path: 'eureka',
                    subGroups: [
                        'elemental-level',
                        'aetherytes',
                        {
                            path: 'notorious-monsters',
                            subGroups: [
                                'anemos',
                                'pagos',
                                'pyros',
                                'hydatos',
                            ]
                        },
                        'logos-actions',
                        'duties',
                    ]
                },
                {
                    path: 'bozja',
                    subGroups: [
                        'resistance-rank',
                        'resistance-honors',
                        'aetherytes',
                        'events',
                        'lost-actions',
                        'duties',
                    ]
                }
            ]
        }
    ]
};

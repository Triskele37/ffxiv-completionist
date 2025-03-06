import { GroupDefinition } from '@model/Definition';
import { TranslateService } from '@ngx-translate/core';

import { QUEST_DEFINITION } from './quest';
import { Duty_Guildhests } from './guildhests';

type DefinitionCallback = (translate: TranslateService) => GroupDefinition;
export const DUTY_DEFINITION: DefinitionCallback = (translate: TranslateService) => ({
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
                    path: 'dungeons',
                    subGroups: [
                        'arr',
                        'hw',
                        'sb',
                        'shb',
                        'ew',
                        'dt'
                    ]
                },
                {
                    path: 'trials',
                    subGroups: [
                        'arr',
                        'hw',
                        'sb',
                        'shb',
                        'ew',
                        'dt'
                    ]
                },
                {
                    path: 'raids',
                    subGroups: [
                        'arr',
                        'hw',
                        'sb',
                        'shb',
                        'ew',
                        'dt'
                    ]
                },
                {
                    path: 'guildhests',
                    subGroups: Duty_Guildhests(translate)
                },
                'deep-dungeons',
                {
                    path: 'v-and-c-dungeons',
                    subGroups: [
                        { path: 'sildihn-subterrane', subGroups: ['record'] },
                        { path: 'mount-rokkon', subGroups: ['record'] },
                        { path: 'aloalo-island', subGroups: ['record'] },
                    ]
                },
            ]
        },
        {
            path: 'trust',
            subGroups: [
                'shb',
                'ew',
                'dt'
            ]
        },
        {
            path: 'hall-of-the-novice',
            subGroups: [
                'tank',
                'dps',
                'healer',
                'tactical'
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
                        'coerthas-central-highlands',
                        'coerthas-western-highlands',
                    ]
                },
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
                    path: 'ilsabard',
                    subGroups: ['thavnair', 'garlemald']
                },
                {
                    path: 'yok-tural',
                    subGroups: [
                        'urqopacha',
                        'kozamauka',
                        'yak-tel'
                    ]
                },
                {
                    path: 'xak-tural',
                    subGroups: [
                        'shaaloani',
                        'heritage-found'
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
                'mor-dhona',
                {
                    path: 'northern-empty',
                    subGroups: ['labyrinthos']
                },
                {
                    path: 'sea-of-stars',
                    subGroups: ['mare-lamentorum', 'ultima-thule']
                },
                {
                    path: 'world-unsundered',
                    subGroups: ['elpis']
                },
                {
                    path: 'unlost-world',
                    subGroups: ['living-memory']
                }
            ]
        },
        {
            path: 'squadron',
            subGroups: [
                'command-missions',
                'squadron',
                {
                    path: 'stats',
                    subGroups: [
                        'level',
                        'independent',
                        'offensive',
                        'defensive',
                        'balanced',
                    ]
                }
            ]
        },
        {
            path: 'treasure-hunt',
            subGroups: [
                'maps',
                'duties'
            ]
        },
        {
            path: 'the-hunt',
            subGroups: [
                'arr',
                'hw',
                'sb',
                'shb',
                'ew',
                'dt'
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
        },
        {
            path: 'island-sanctuary',
            subGroups: [
                'rank',
                'buildings',
                {
                    path: 'crafting',
                    subGroups: [
                        'tools',
                        'feed',
                        'restraints'
                    ]
                },
                {
                    path: 'isleventory',
                    subGroups: [
                        'materials',
                        'gardening-starters',
                        'produce',
                        'leavings'
                    ]
                },
                'animals'
            ]
        }
    ]
});

import { GroupDefinition } from '@domain/Definition';

export const TRAVEL_DEFINITION: GroupDefinition = {
    path: 'travel',
    subGroups: [
        {
            path: 'aether-currents',
            subGroups: [
                {
                    path: 'hw',
                    subGroups: [
                        'coerthas-western-highlands',
                        'the-dravanian-forelands',
                        'the-dravanian-hinterlands',
                        'the-churning-mists',
                        'the-sea-of-clouds',
                        'azys-lla',
                    ]
                },
                {
                    path: 'sb',
                    subGroups: [
                        'the-fringes',
                        'the-ruby-sea',
                        'the-peaks',
                        'yanxia',
                        'the-lochs',
                        'the-azim-steppe',
                    ]
                },
                {
                    path: 'shb',
                    subGroups: [
                        'lakeland',
                        'amh-araeng',
                        'il-mheg',
                        'kholusia',
                        'the-rak-tika-greatwood',
                        'the-tempest',
                    ]
                },
                {
                    path: 'ew',
                    subGroups: [
                        'labyrinthos',
                        'thavnair',
                        'garlemald',
                        'mare-lamentorum',
                        'elpis',
                        'ultima-thule',
                    ]
                }
            ]
        },
        {
            path: 'aetherytes',
            subGroups: [
                'la-noscea',
                'the-black-shroud',
                'thanalan',
                'ishgard-and-coerthas',
                'gyr-abania',
                'the-far-east',
                'ilsabard',
                'norvrandt',
                'others',
            ]
        },
        {
            path: 'mount-speed',
            subGroups: [
                'la-noscea',
                'the-black-shroud',
                'thanalan',
                'ishgard-and-coerthas',
                'gyr-abania',
                'the-far-east',
                'ilsabard',
                'norvrandt',
                'others',
            ]
        },
        {
            path: 'porters',
            subGroups: [
                'la-noscea',
                'the-black-shroud',
                'thanalan',
                'ishgard-and-coerthas',
                'gyr-abania',
                'the-far-east',
                'ilsabard',
                'norvrandt',
                'others',
            ]
        },
        {
            path: 'shared-fate',
            subGroups: [
                'shb',
                'ew'
            ]
        }
    ]
};

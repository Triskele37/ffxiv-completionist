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
                        'the-peaks',
                        'the-lochs',
                        'the-ruby-sea',
                        'yanxia',
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
                }
            ]
        },
        'aetherytes',
        {
            path: 'mount-speed',
            subGroups: [
                'la-noscea',
                'the-black-shroud',
                'thanalan',
                'ishgard-and-coerthas',
                'gyr-abania',
                'the-far-east',
                'norvrandt',
                'others',
            ]
        },
        'porters',
        {
            path: 'shared-fate',
            subGroups: [
                'shb',
                'ew'
            ]
        }
    ]
};

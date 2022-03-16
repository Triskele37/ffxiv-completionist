import { GroupDefinition } from '@domain/Definition';

export const GATHERING_LOG_DEFINITION: GroupDefinition = {
    path: 'gathering',
    subGroups: [
        'folklore-gathering-books',
        {
            path: 'gathering-log',
            subGroups: [
                makeGatherer('mining'),
                makeGatherer('quarrying'),
                makeGatherer('logging'),
                makeGatherer('harvesting'),
            ]
        },
        {
            path: 'fishing-log',
            subGroups: [
                {
                    path: 'fishing',
                    subGroups: [
                        'la-noscea',
                        'the-black-shroud',
                        'thanalan',
                        'coerthas',
                        'mor-dhona',
                        'abalathias-spine',
                        'dravania',
                        'gyr-abania',
                        'othard',
                        'hingashi',
                        'norvrandt',
                        'the-northern-empty',
                        'ilsabard',
                        'the-sea-of-stars',
                        'the-world-unsundered',
                        'the-high-seas',
                    ]
                },
                {
                    path: 'spearfishing',
                    subGroups: [
                        'gyr-abania',
                        'othard',
                        'norvrandt',
                        'ilsabard'
                    ]
                },
            ]
        },
        {
            path: 'fishing-guide',
            subGroups: [
                {
                    path: 'fishing',
                    subGroups: makePages(46)
                },
                {
                    path: 'spearfishing',
                    subGroups: makePages(10)
                }
            ]
        }
    ]
};

function makePages(pages: number): string[] {
    return new Array(pages).fill('').map((p, i) => `page-${i + 1}`);
}

function makeGatherer(path: string) {
    return {
        path,
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
                path: 'collectables',
                subGroups: [
                    'level-50-70',
                    'level-71-80',
                    'level-81-90',
                ]
            },
            {
                path: 'regional-folklore',
                subGroups: [
                    'coerthas',
                    'dravania',
                    'abalathia',
                    'gyr-abania',
                    'othard',
                    'norvrandt',
                    'ilsabard-northern-empty',
                    'sea-of-stars',
                    'world-unsundered',
                ]
            },
            {
                path: 'ishgard-restoration',
                subGroups: [
                    'ishgard-restoration',
                    'skysteel-tools',
                ]
            }
        ]
    };
}

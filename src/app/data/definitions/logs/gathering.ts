import { GroupDefinition } from '@domain/Definition';

export const GATHERING_LOG_DEFINITION: GroupDefinition = {
    path: 'gathering',
    subGroups: [
        'folklore-gathering-books',
        {
            path: 'mining',
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
                    ]
                },
                {
                    path: 'special',
                    subGroups: [
                        'coerthan-folklore',
                        'dravanian-folklore',
                        'abalathian-folklore',
                        'gyr-abanian-folklore',
                        'othardian-folklore',
                        'vrandtic-folklore',
                        'ishgard-restoration',
                        'skysteel-tools',
                        'collectables-1',
                        'collectables-2',
                    ]
                }
            ]
        },
        {
            path: 'quarrying',
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
                    ]
                },
                {
                    path: 'special',
                    subGroups: [
                        'coerthan-folklore',
                        'dravanian-folklore',
                        'abalathian-folklore',
                        'vrandtic-folklore',
                        'ishgard-restoration',
                        'skysteel-tools',
                        'collectables-1',
                        'collectables-2',
                    ]
                }
            ]
        },
        {
            path: 'logging',
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
                    ]
                },
                {
                    path: 'special',
                    subGroups: [
                        'dravanian-folklore',
                        'abalathian-folklore',
                        'gyr-abanian-folklore',
                        'vrandtic-folklore',
                        'ishgard-restoration',
                        'skysteel-tools',
                        'collectables-1',
                        'collectables-2',
                    ]
                }
            ]
        },
        {
            path: 'harvesting',
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
                    ]
                },
                {
                    path: 'special',
                    subGroups: [
                        'coerthan-folklore',
                        'dravanian-folklore',
                        'abalathian-folklore',
                        'gyr-abanian-folklore',
                        'othardian-folklore',
                        'vrandtic-folklore',
                        'ishgard-restoration',
                        'skysteel-tools',
                        'collectables-1',
                        'collectables-2',
                    ]
                }
            ]
        },
        {
            path: 'fishing',
            subGroups: [
                {
                    path: 'log',
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
                        'the-high-seas',
                    ]
                },
                {
                    path: 'guide',
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
                        'page-14',
                        'page-15',
                        'page-16',
                        'page-17',
                        'page-18',
                        'page-19',
                        'page-20',
                        'page-21',
                        'page-22',
                        'page-23',
                        'page-24',
                        'page-25',
                        'page-26',
                        'page-27',
                        'page-28',
                        'page-29',
                        'page-30',
                        'page-31',
                        'page-32',
                        'page-33',
                        'page-34',
                        'page-35',
                        'page-36',
                        'page-37',
                        'page-38',
                        'page-39',
                        'page-40',
                        'page-41',
                    ]
                }
            ]
        },
        {
            path: 'spearfishing',
            subGroups: [
                {
                    path: 'log',
                    subGroups: [
                        'gyr-abania',
                        'othard',
                        'norvrandt',
                    ]
                },
                {
                    path: 'guide',
                    subGroups: [
                        'page-1',
                        'page-2',
                        'page-3',
                        'page-4',
                        'page-5',
                        'page-6',
                        'page-7',
                    ]
                }
            ]
        }
    ]
};

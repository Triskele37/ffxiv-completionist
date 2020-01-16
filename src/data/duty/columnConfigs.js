export const DutyColumnConfig = [
    {
        header: 'Level',
        key: 'level',
        filterable: true,
        styles: {
            centered: true
        }
    },
    {
        header: 'iLvl',
        key: 'iLvlReq',
        filterable: true,
        styles: {
            centered: true
        }
    },
    { header: 'Name', key: 'name' },
    { header: 'Roulette', key: 'roulette', filterable: true },
    { header: 'Unlock', key: 'unlock' },
];

export const HuntColumnConfig = [
    {
        header: 'Rank',
        key: 'rank',
        filterable: true,
        styles: {
            centered: true
        }
    },
    { header: 'Name', key: 'name' },
    { header: 'Condition', key: 'condition' },
    { header: 'Location', key: 'location', filterable: true },
];

export const HallOfNoviceColumnConfig = [
    {
        header: 'Level',
        key: 'level',
        styles: {
            centered: true
        }
    },
    { header: 'Name', key: 'name' },
    { header: 'Role', key: 'role', filterable: true },
];

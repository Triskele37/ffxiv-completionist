export const combineMainAndDaily = (mainQuests, dailyQuests) => ([
    ...mainQuests.map((quest) => { quest.type = 'Main'; return quest; }),
    ...dailyQuests.map((quest) => { quest.type = 'Daily'; return quest; }),
]);

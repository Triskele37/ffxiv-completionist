module.exports = function mapAppTask(cacheTask, lang) {
    return {
        id: cacheTask.ID,
        name: cacheTask[`Name_${lang}`],
        description: cacheTask[`Description_${lang}`],
        reward: cacheTask[`Reward${lang}`],
        points: cacheTask.Points
    };
};

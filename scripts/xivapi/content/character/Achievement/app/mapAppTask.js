module.exports = function mapAppTask(cacheTask, lang) {
    const appTask = {
        id: cacheTask.ID,
        name: cacheTask[`Name_${lang}`],
        description: cacheTask[`Description_${lang}`],
        reward: cacheTask[`Reward_${lang}`],
        points: cacheTask.Points,
        patch: cacheTask.Patch,
    };

    // Only attach chain lists if they have something
    if(cacheTask.ChainSiblings.length) appTask.cSiblings = cacheTask.ChainSiblings;

    return appTask;
};

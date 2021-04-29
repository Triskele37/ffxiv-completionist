module.exports = function mapAppTask(cacheTask, lang) {
    const task = {
        id: cacheTask.ID,
        name: cacheTask[`Name_${lang}`],
        npc: cacheTask[`Npc_${lang}`],
        level: cacheTask.Level
    };

    if(cacheTask.Reputation) task.reputation = cacheTask[`Reputation_${lang}`];

    return task;
};

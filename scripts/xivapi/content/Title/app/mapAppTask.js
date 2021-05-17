module.exports = function mapAppTask(cacheTask, lang) {
    return {
        id: cacheTask.ID,
        name: constructName(cacheTask, lang),
        category: cacheTask[`Category_${lang}`],
        achievement: cacheTask[`Achievement_${lang}`],
        patch: cacheTask.Patch,
    };
};

function constructName(cacheTask, lang) {
    let name = cacheTask[`Name_${lang}`];
    let fName = cacheTask[`NameFemale_${lang}`];

    if(cacheTask.IsPrefix === 1) {
        name += "…";
        fName += "…";
    }
    else {
        name = `…${name}`;
        fName = `…${fName}`;
    }

    const genderless = name === fName;
    return genderless ? name : `${name} / ${fName}`
}

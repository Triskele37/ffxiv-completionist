// Split common keys from lang task and return both
module.exports = function splitCommonAndLangKeys(content, langTask) {
    if(!content.COMMON_KEYS || !content.COMMON_KEYS.length) {
        return [langTask, null];
    }

    let commonTask = { id: langTask.id };

    (content.COMMON_KEYS || []).forEach((commonKey) => {
        commonTask[commonKey] = langTask[commonKey];
        delete langTask[commonKey];
    });

    return [langTask, commonTask];
};

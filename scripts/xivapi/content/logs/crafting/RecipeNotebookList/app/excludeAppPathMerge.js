module.exports = function excludeAppPathMerge(appPath) {
    const isCarpenter = appPath.includes("/shared/");
    const isShared = appPath.includes("/beast-tribe-quests/") ||
        appPath.includes("/custom-deliveries/") ||
        appPath.includes("/dyes");

    return isShared && !isCarpenter;
};

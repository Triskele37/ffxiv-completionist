module.exports = function getAppPath(cachePath) {
    cachePath = cachePath.replace("/woodworking/", "/carpenter/");
    cachePath = cachePath.replace("/smithing/", "/blacksmith/");
    cachePath = cachePath.replace("/armorcraft/", "/armorer/");
    cachePath = cachePath.replace("/goldsmithing/", "/goldsmith/");
    cachePath = cachePath.replace("/leatherworking/", "/leatherworker/");
    cachePath = cachePath.replace("/clothcraft/", "/weaver/");
    cachePath = cachePath.replace("/alchemy/", "/alchemist/");
    cachePath = cachePath.replace("/cooking/", "/culinarian/");

    if(cachePath.includes("/carpenter/")) {
        cachePath = cachePath.replace("/carpenter/beast-tribe-quests", "shared/beast-tribe-quests");
        cachePath = cachePath.replace("/carpenter/custom-deliveries", "shared/custom-deliveries");
        cachePath = cachePath.replace("/carpenter/dyes", "shared/dyes");
    }

    return cachePath;
};

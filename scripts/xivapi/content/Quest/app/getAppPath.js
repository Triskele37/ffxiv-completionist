module.exports = function(cachePath) {
    // Directory Changes
    cachePath = cachePath.replace("/beast-tribe-quests-arrheavenswardstormblood", "/beast-tribe-quests-past");
    cachePath = cachePath.replace("seventh-umbral-era.json", "seventh-umbral-era/seventh-umbral-era.json");

    // Directory Removal
    cachePath = cachePath.replace("quasi-quests/quasi-quests.json", "quasi-quests.json");
    cachePath = cachePath.replace("/seventh-umbral-era-main-scenario-quests", "");
    cachePath = cachePath.replace("/seventh-astral-era-main-scenario-quests", "");
    cachePath = cachePath.replace("/heavensward-main-scenario-quests", "");
    cachePath = cachePath.replace("/dragonsong-main-scenario-quests", "");
    cachePath = cachePath.replace("/post-dragonsong-main-scenario-quests", "");
    cachePath = cachePath.replace("/stormblood-main-scenario-quests", "");
    cachePath = cachePath.replace("/post-stormblood-main-scenario-quests", "");
    cachePath = cachePath.replace("/post-shadowbringers-main-scenario-quests-ii", "");
    cachePath = cachePath.replace("/post-shadowbringers-main-scenario-quests", "");
    cachePath = cachePath.replace("/shadowbringers-main-scenario-quests", "");

    // CoaNE
    if(cachePath.includes("chronicles-of-a-new-era")) {
        cachePath = cachePath.replace(/chronicles-of-a-new-era-[a-z-]*\//, "");
        cachePath = cachePath.replace("yorha-dark-apocalypse/", "");
        cachePath = cachePath.replace("-quests.json", ".json");
    }

    return cachePath;
};

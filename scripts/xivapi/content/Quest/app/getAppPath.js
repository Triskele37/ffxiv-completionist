module.exports = function(cachePath) {
    // Directory Changes
    cachePath = cachePath.replace("/beast-tribe-quests-arrheavenswardstormblood", "/beast-tribe-quests-past");

    // Directory Removal
    cachePath = cachePath.replace("/dragonsong-main-scenario-quests", "");
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

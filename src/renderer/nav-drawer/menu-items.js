export const MainMenu = {
    name: "FFXIV Completionist",
    disableSelection: true,
    groupKeys: ["Import"],

    Import: { name: "Import", component: "import-sheet", }
};

export const DebugMenu = {
    name: "Debug",
    disableSelection: true,
    groupKeys: ["Log", "Reset", "Nuke"],

    Log: { name: "Log Store", onNavigation: (store) => store.dispatch('logStore') },
    Reset: { name: "Reset Totals", onNavigation: (store) => store.dispatch('resetTotals') },
    Nuke: { name: "Nuke Store", onNavigation: (store) => store.dispatch('nukeStore') }
};

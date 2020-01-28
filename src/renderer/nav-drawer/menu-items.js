export const MainMenu = {
    name: "FFXIV Completionist",
    disableSelection: true,
    subGroups: [{
        name: "Import",
        component: "import-sheet",
    }]
};

export const DebugMenu = {
    name: "Debug",
    disableSelection: true,
    subGroups: [{
        name: "Log Store",
        onNavigation: (store) => store.dispatch('logStore')
    }, {
        name: "Reset Totals",
        onNavigation: (store) => store.dispatch('resetTotals')
    }, {
        name: "Nuke Store",
        onNavigation: (store) => store.dispatch('nukeStore')
    }]
};

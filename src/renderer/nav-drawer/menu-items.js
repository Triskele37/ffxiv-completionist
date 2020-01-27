export const MainMenu = {
    name: "FFXIV Completionist",
    subGroups: [
        { name: "Import" },
    ]
};

export const DebugMenu = {
    name: "Debug",
    disableSelection: true,
    subGroups: [{
        name: "Log Store",
        onNavigation: (store) => store.dispatch('logStore')
    }, {
        name: "Recalculate Summaries",
        onNavigation: (store) => store.dispatch('calculateCompletionSummaries')
    }, {
        name: "Nuke Store",
        onNavigation: (store) => store.dispatch('nukeStore')
    }]
};

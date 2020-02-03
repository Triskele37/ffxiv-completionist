import Store from 'electron-store';
const store = new Store();

export const MainMenu = {
    name: "FFXIV Completionist",
    disableSelection: true,
    groupKeys: ["Import"],

    Import: { name: "Import", component: "import-sheet", }
};

export const DebugMenu = {
    name: "Debug",
    disableSelection: true,
    groupKeys: ["Log", "Nuke"],

    Log: { name: "Log Store", onNavigation: () => console.log(store) },
    Nuke: { name: "Nuke Store", onNavigation: () => store.clear() }
};

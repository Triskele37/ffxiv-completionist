import { versionHistory } from '../../version-history';

export const MainMenu = {
    name: "FFXIV Completionist",
    disableSelection: true,
    subGroups: [
        { name: "Import", component: "import-sheet" },
        versionHistory,
    ],
};

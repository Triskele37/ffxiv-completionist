import { instructions } from '../../info-menus/instructions';
import dev_notes from '../../info-menus/dev-notes';
import { versionHistory } from '../../info-menus/version-history';

export const MainMenu = {
    name: "FFXIV Completionist",
    noContent: true,
    subGroups: [
        instructions,
        { name: "Dev Notes", component: dev_notes },
        { name: "Search", component: "search-data" },
        versionHistory,
    ],
};

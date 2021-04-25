import { instructions } from '../../pages/instructions';
import dev_notes from '../../pages/dev-notes';
import { versionHistory } from '../../pages/version-history';

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

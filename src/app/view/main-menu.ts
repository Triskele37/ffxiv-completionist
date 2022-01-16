import { Instructions } from './instructions';
import { DevNotes } from './dev-notes';
import { SearchComponent } from './search/search.component';
import { VersionHistory } from './version-history';
import { SettingsComponent } from './settings/settings.component';

import { UIGroup } from '@domain/UIGroup';

export const MainMenu: UIGroup = new UIGroup({
    name: 'FFXIV Completionist',
    noContent: true,
    subGroups: [
        Instructions,
        DevNotes,
        { name: 'Search', component: SearchComponent },
        VersionHistory,
        { name: 'Settings', component: SettingsComponent }
    ]
}, null);

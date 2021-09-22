import { Instructions } from './instructions';
import { DevNotes } from './dev-notes';
import { SearchComponent } from './search/search.component';
import { VersionHistory } from './version-history';
import { SettingsComponent } from './settings/settings.component';
import { DataGroup } from '../domain/DataGroup';

export const MainMenu: DataGroup = {
    name: 'FFXIV Completionist',
    noContent: true,
    subGroups: [
        Instructions,
        DevNotes,
        {
            name: 'Search',
            component: SearchComponent
        },
        VersionHistory,
        {
            name: 'Settings',
            component: SettingsComponent
        },
    ],
} as DataGroup;

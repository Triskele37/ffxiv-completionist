import { InstructionsComponent } from './main-menu/instructions/instructions.component';
import { SearchComponent } from './search/search.component';
import { PatchNotesComponent } from './main-menu/patch-notes/patch-notes.component';
import { SettingsComponent } from './main-menu/settings/settings.component';

import { UIGroup } from '@domain/UIGroup';

export const MainMenu: UIGroup = new UIGroup({
    name: 'FFXIV Completionist',
    noContent: true,
    subGroups: [
        { name: 'Instructions', component: InstructionsComponent },
        { name: 'Patch Notes', component: PatchNotesComponent },
        { name: 'Settings', component: SettingsComponent },
        { name: 'Search', component: SearchComponent, visible: false }
    ]
}, null);

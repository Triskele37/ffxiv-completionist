import { InstructionsComponent } from './main-menu/instructions/instructions.component';
import { SearchComponent } from './search/search.component';
import { PatchNotesComponent } from './main-menu/patch-notes/patch-notes.component';
import { SettingsComponent } from './main-menu/settings/settings.component';

import { DataGroup } from '@domain/DataGroup';

export const MainMenu: DataGroup = new DataGroup({
    groupName: 'FFXIV Completionist',
    noContent: true,
    isUiGroup: true
}, null);

MainMenu.subGroups = [];

MainMenu.subGroups.push(new DataGroup({
    groupName: 'Instructions',
    component: InstructionsComponent
}, MainMenu));

MainMenu.subGroups.push(new DataGroup({
    groupName: 'Patch Notes',
    component: PatchNotesComponent
}, MainMenu));

MainMenu.subGroups.push(new DataGroup({
    groupName: 'Settings',
    component: SettingsComponent
}, MainMenu));

MainMenu.subGroups.push(new DataGroup({
    groupName: 'Search',
    component: SearchComponent,
    visible: false
}, MainMenu));

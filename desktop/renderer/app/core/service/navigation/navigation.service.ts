import { Injectable, signal, inject } from '@angular/core';

import { DataService } from '@service/data/data-service';
import type { DataGroup } from '@model/DataGroup';
import type { Task } from '@model/Task';
import { MainMenuService } from '@service/main-menu/main-menu.service';
import { ConfigStoreService } from '@service/store/config-store.service';

//#region ------------------------------------------------------- Methods
import { initService } from './methods/initService';
import { setSelectedContent } from './selected/setSelectedContent';
import { setSelectedGroup } from './selected/setSelectedGroup';
import { setSelectedTask } from './selected/setSelectedTask';
import { getGroupFromBreadcrumbs } from './breadcrumbs/getGroupFromBreadcrumbs';
import { popCrumbsOnce } from './breadcrumbs/popCrumbsOnce';
import { popCrumbsUntil } from './breadcrumbs/popCrumbsUntil';
import { setBreadcrumbs } from './breadcrumbs/setBreadcrumbs';
import { addGroupHistory } from './history/addGroupHistory';
import { goToHistory } from './history/goToHistory';
import { clearHistory } from './history/clearHistory';
import { removeHistory } from './history/removeHistory';

//#endregion

@Injectable({
    providedIn: 'root'
})
export class NavigationService {
    svcData = inject(DataService);
    svcMainMenu = inject(MainMenuService);
    svcConfig = inject(ConfigStoreService);

    breadcrumbs = signal<string[]>(['main-menu']);
    selectedGroup = signal<DataGroup | null>(null);
    selectedTask = signal<Task | null>(null);
    groupHistory = signal<DataGroup[]>([]);
    allTaskViewEnabled = signal(false);

    constructor() {
        initService(this)();
    }

    //#region------------------------------------------------ Selected
    get setSelectedContent() { return setSelectedContent(this); }
    get setSelectedGroup() { return setSelectedGroup(this); }
    get setSelectedTask() { return setSelectedTask(this); }

    //#endregion

    //#region------------------------------------------------ Breadcrumbs
    get getGroupFromBreadcrumbs() { return getGroupFromBreadcrumbs(this); }
    get popCrumbsOnce() { return popCrumbsOnce(this); }
    get popCrumbsUntil() { return popCrumbsUntil(this); }
    get setBreadcrumbs() { return setBreadcrumbs(this); }

    //#endregion

    //#region------------------------------------------------ History
    get addGroupHistory() { return addGroupHistory(this); }
    get goToHistory() { return goToHistory(this); }
    get clearHistory() { return clearHistory(this); }
    get removeHistory() { return removeHistory(this); }

    //#endregion
}

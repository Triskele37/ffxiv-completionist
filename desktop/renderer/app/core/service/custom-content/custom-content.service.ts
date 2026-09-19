import { Injectable, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MessageService } from 'primeng/api';
import { Subject } from 'rxjs';

import type { DataGroup } from '@model/DataGroup';
import { DataService } from '@service/data/data-service';
import { ElectronService } from '@service/electron/electron.service';
import { SaveStoreService } from '@service/store/save-store.service';

//#region ------------------------------------------------------- Methods
import { initGroup } from './methods/initGroup';
import { initService } from './methods/initService';
import { getNextKeyForMeta } from './methods/getNextKeyForMeta';
import { getMetaStorageKey } from './methods/getMetaStorageKey';
import { importGroup } from './methods/importGroup';
import { exportGroup } from './methods/exportGroup';

import { initCustomGroup } from './group/initCustomGroup';
import { createDataGroupObj } from './group/createDataGroupObj';
import { createGroup } from './group/createGroup';
import { editGroupMeta } from './group/editGroupMeta';
import { moveGroup } from './group/moveGroup';
import { changeGroupParent } from './group/changeGroupParent';
import { duplicateGroup } from './group/duplicateGroup';
import { cloneGroupObj } from './group/cloneGroupObj';
import { removeGroup } from './group/removeGroup';

import { createTask } from './task/createTask';
import { editTaskMeta } from './task/editTaskMeta';
import { moveTasks } from './task/moveTasks';
import { changeTaskParent } from './task/changeTaskParent';
import { reorderTasks } from './task/reorderTasks';
import { removeTask } from './task/removeTask';
import { removeTaskFromAppTree } from './task/removeTaskFromAppTree';
import { removeTaskFromStore } from './task/removeTaskFromStore';

//#endregion

@Injectable({
    providedIn: 'root'
})
export class CustomContentService {
    translate = inject(TranslateService);
    svcData = inject(DataService);
    svcMessage = inject(MessageService);
    svcElectron = inject(ElectronService);
    svcSaveStore = inject(SaveStoreService);

    group: DataGroup;

    onGroupUpdated$ = new Subject<void>();

    constructor() {
        this.group = initGroup(this)();
    }

    get initService() { return initService(this); }
    get getNextKeyForMeta() { return getNextKeyForMeta(this); }
    get getMetaStorageKey() { return getMetaStorageKey(this); }

    //#region------------------------------------------------------- Import/Export
    get importGroup() { return importGroup(this); }
    get exportGroup() { return exportGroup(this); }

    //#endregion

    //#region------------------------------------------------------- Custom Group
    get initCustomGroup() { return initCustomGroup(this); }
    get createDataGroupObj() { return createDataGroupObj(this); }
    get createGroup() { return createGroup(this); }
    get editGroupMeta() { return editGroupMeta(this); }
    get moveGroup() { return moveGroup(this); }
    get changeGroupParent() { return changeGroupParent(this); }
    get duplicateGroup() { return duplicateGroup(this); }
    get cloneGroupObj() { return cloneGroupObj(this); }
    get removeGroup() { return removeGroup(this); }

    //#endregion

    //#region------------------------------------------------------- Custom Task
    get createTask() { return createTask(this); }
    get editTaskMeta() { return editTaskMeta(this); }
    get moveTasks() { return moveTasks(this); }
    get changeTaskParent() { return changeTaskParent(this); }
    get reorderTasks() { return reorderTasks(this); }
    get removeTask() { return removeTask(this); }
    get removeTaskFromAppTree() { return removeTaskFromAppTree(this); }
    get removeTaskFromStore() { return removeTaskFromStore(this); }

    //#endregion
}

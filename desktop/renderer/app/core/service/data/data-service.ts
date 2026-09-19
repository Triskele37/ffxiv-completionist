import { Injectable, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AsyncSubject } from 'rxjs';

import { JsonCache } from '@common/JsonCache';
import { DataGroup } from '@model/DataGroup';
import { ElectronService } from '@service/electron/electron.service';
import { ConfigStoreService } from '@service/store/config-store.service';
import { MarkService } from '@service/mark/mark.service';
import { SaveStoreService } from '@service/store/save-store.service';

//#region ------------------------------------------------------- Methods
import { initGroup } from './init/initGroup';
import { initService } from './init/initService';

import { applyStoreToData } from './apply/applyStoreToData';
import { diveForLoad } from './apply/diveForLoad';
import { applyDataToStore } from './apply/applyDataToStore';
import { diveForSave } from './apply/diveForSave';

import { createDataGroup } from './group/createDataGroup';
import { getGroupName } from './group/getGroupName';
import { initColumns } from './group/initColumns';
import { initCompletion } from './group/initCompletion';
import { initDefaultCompletion } from './group/initDefaultCompletion';
import { initTasks } from './group/initTasks';
import { initUi } from './group/initUi';

import { getAnyChild, getChild } from './get/getChild';
import { getChildGroup } from './get/getChildGroup';
import { getChildTask } from './get/getChildTask';
import { getGroup } from './get/getGroup';
import { getTask } from './get/getTask';
import { getTasks } from './get/getTasks';
import { getLinkedPieces } from './get/getLinkedPieces';
import { getLinkedTextFull } from './get/getLinkedTextFull';
import { getLinkedName } from './get/getLinkedName';
import { logGetMiss } from './get/logGetMiss';
import { logGetMismatch } from './get/logGetMismatch';

import { expandLink } from './link/expandLink';
import { expandAllLink } from './link/expandAllLink';
import { expandIdSelector } from './link/expandIdSelector';

import { loadGroupShallow } from './loader/loadGroupShallow';
import { loadGroupDeep } from './loader/loadGroupDeep';
import { loadJson } from './loader/loadJson';
import { shouldTranslate } from './loader/shouldTranslate';
import { mapColumns } from './loader/mapColumns';
import { defaultColumnProps } from './loader/defaultColumnProps';
import { mapTasks } from './loader/mapTasks';
import { translateCommonKeys } from './loader/translateCommonKeys';
import { getCommonTranslation } from './loader/getCommonTranslation';

import { createTask } from './task/createTask';
import { inheritFromParent } from './task/inheritFromParent';
import { concatWithParent } from './task/concatWithParent';
import { deepConcatWithParent } from './task/deepConcatWithParent';
import { flattenLangKeys } from './task/flattenLangKeys';

//#endregion

@Injectable({
    providedIn: 'root'
})
export class DataService {
    svcTranslate = inject(TranslateService);
    svcElectron = inject(ElectronService);
    svcConfig = inject(ConfigStoreService);
    svcMark = inject(MarkService);
    svcSave = inject(SaveStoreService);

    data: DataGroup;
    whenLoaded$ = new AsyncSubject<void>();

    constructor() {
        this.data = initGroup(this)();
    }

    get initService() { return initService(this); }

    //#region ------------------------------------------------------- Apply
    get storeToData() { return applyStoreToData(this); }
    get diveForLoad() { return diveForLoad(this); }
    get dataToStore() { return applyDataToStore(this); }
    get diveForSave() { return diveForSave(this); }

    //#endregion

    //#region ------------------------------------------------------- Group
    get createDataGroup() { return createDataGroup(this); }
    get getGroupName() { return getGroupName(this); }
    get initColumns() { return initColumns(this); }
    get initCompletion() { return initCompletion(this); }
    get initDefaultCompletion() { return initDefaultCompletion(this); }
    get initTasks() { return initTasks(this); }
    get initUi() { return initUi(this); }

    //#endregion

    //#region ------------------------------------------------------- Get
    get getAnyChild() { return getAnyChild(this); }
    get getChild() { return getChild(this); }
    get getChildGroup() { return getChildGroup(this); }
    get getChildTask() { return getChildTask(this); }
    get getGroup() { return getGroup(this); }
    get getTask() { return getTask(this); }
    get getTasks() { return getTasks(this); }
    get getLinkedPieces() { return getLinkedPieces(this); }
    get getLinkedTextFull() { return getLinkedTextFull(this); }
    get getLinkedName() { return getLinkedName(this); }
    get logGetMiss() { return logGetMiss(this); }
    get logGetMismatch() { return logGetMismatch(this); }

    //#endregion

    //#region ------------------------------------------------------- Link
    get expandLink() { return expandLink(this); }
    get expandAllLink() { return expandAllLink(this); }
    get expandIdSelector() { return expandIdSelector(this); }

    //#endregion

    //#region ------------------------------------------------------- Loader
    dataCache: JsonCache | null = null;

    get loadGroupShallow() { return loadGroupShallow(this); }
    get loadGroupDeep() { return loadGroupDeep(this); }
    get loadJson() { return loadJson(this); }
    get shouldTranslate() { return shouldTranslate(this); }
    get mapColumns() { return mapColumns(this); }
    get defaultColumnProps() { return defaultColumnProps(this); }
    get mapTasks() { return mapTasks(this); }
    get translateCommonKeys() { return translateCommonKeys(this); }
    get getCommonTranslation() { return getCommonTranslation(this); }

    //#endregion

    //#region ------------------------------------------------------- Task
    get createTask() { return createTask(this); }
    get inheritFromParent() { return inheritFromParent(this); }
    get concatWithParent() { return concatWithParent(this); }
    get deepConcatWithParent() { return deepConcatWithParent(this); }
    get flattenLangKeys() { return flattenLangKeys(this); }

    //#endregion
}

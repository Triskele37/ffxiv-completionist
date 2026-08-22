import { Injectable, signal, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MessageService } from 'primeng/api';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { DataService } from '@service/data/data-service';
import { DataGroup } from '@model/DataGroup';
import { JsonTasks } from '@model/JSONResource';
import { createDummyGroup } from '@model/DataGroup/createDummyGroup';
import { getContentLink } from '@model/Link/getContentLink';
import { Task } from '@model/Task';
import { ElectronService } from '@service/electron/electron.service';
import { IPC_EVENT } from '@service/electron/IPC_EVENT';
import { SaveStoreService } from '@service/store/save-store.service';

import { CustomGroupMetaMap, CustomTaskMetaMap } from './CustomContentTypes';

@Injectable({
    providedIn: 'root'
})
export class CustomContentService {
    private translate = inject(TranslateService);
    private svcData = inject(DataService);
    private svcMessage = inject(MessageService);
    private svcElectron = inject(ElectronService);
    private svcSaveStore = inject(SaveStoreService);

    group: DataGroup;

    onGroupUpdated$ = new Subject<void>();

    constructor() {
        const group = this.svcData.loader.loadGroupShallow(this.svcData.data, 'custom');

        if(group) {
            this.group = group;
            this.group.isCustomGroup = true;
            this.group.draggable = true;

            // Replace the placeholder for this group
            this.svcData.data.subGroups?.set(this.group._key, this.group);
        }
        else {
            console.error('Failed to load Custom Content group');
            this.group = createDummyGroup();
        }
    }

    //#region------------------------------------------------------- Initialize
    initializeCustomContent(): void {
        this.initializeCustomGroup(this.group);
    }

    initializeCustomGroup(group: DataGroup): void {
        // Make sure 'meta' does not reference the actual store
        const meta: JsonTasks = {};
        const storageKey = this.getMetaStorageKey(group);
        const currentMeta = this.svcSaveStore.get(storageKey) || {};

        for(let key in currentMeta) {
            if(key.startsWith('g')) {
                const subGroup = this.createDataGroupObj(
                    parseInt(key.substring(1), 10),
                    currentMeta[key].name,
                    group
                );

                if(!group.subGroups) group.subGroups = new Map();
                group.subGroups.set(key, subGroup);

                this.initializeCustomGroup(subGroup);
            }
            else if(key.startsWith('x')) {
                meta[key] = {
                    id: parseInt(key.substring(1), 10),
                    ...currentMeta[key]
                };
            }
        }

        this.svcData.group.initTasks(group, meta);
    }

    //#endregion

    getNextKeyForMeta(metaMap: CustomGroupMetaMap | CustomTaskMetaMap, isGroup: boolean): [number, string] {
        const prefix = isGroup ? 'g' : 'x';
        let nextId = 0;
        while(!!metaMap[prefix + nextId]) nextId++;
        return [nextId, prefix + nextId];
    }

    // Custom content meta is one level higher than expected from svcSaveStore
    getMetaStorageKey(data: DataGroup | Task) {
        let modifiedStorageKey = data.fullStorageKey.replace('overall.', '');

        if(data.dataType === 'Group') return modifiedStorageKey;

        modifiedStorageKey = modifiedStorageKey.replace(/\.([0-9]+)$/, '.x$1');
        return modifiedStorageKey;
    }

    //#region------------------------------------------------------- Import/Export
    importGroup(parentGroup: DataGroup): DataGroup | undefined {
        const importedMeta = this.svcElectron.sendSync(IPC_EVENT.IMPORT_CUSTOM);

        if(importedMeta === false) {
            this.svcMessage.add({
                detail: this.translate.instant('APP.CUSTOM_OVERLAY.INVALID'),
                severity: 'error',
                life: 500000
            });
        }
        else if(importedMeta) {
            // Get next safe ID
            const parentMetaStorageKey = this.getMetaStorageKey(parentGroup);
            const parentMeta = this.svcSaveStore.get(parentMetaStorageKey) || {};
            const [nextId, nextKey] = this.getNextKeyForMeta(parentMeta, true);

            // Update saved meta
            this.svcSaveStore.set(`${parentMetaStorageKey}.${nextKey}`, importedMeta);

            const importedGroup = this.createDataGroupObj(nextId, importedMeta.name, parentGroup);
            this.initializeCustomGroup(importedGroup);
            this.changeGroupParent(importedGroup, parentGroup, nextKey);
            this.onGroupUpdated$.next();

            return importedGroup;
        }

        return undefined;
    }

    exportGroup(group: DataGroup): void {
        const metaStorageKey = this.getMetaStorageKey(group);
        const groupMeta = this.svcSaveStore.get(metaStorageKey) || {};

        this.svcElectron.sendSync(IPC_EVENT.EXPORT_CUSTOM, groupMeta);
    }

    //#endregion

    //#region------------------------------------------------------- Custom Group
    createDataGroupObj(id: number, groupName: string, parent: DataGroup): DataGroup {
        const group = this.svcData.group.createDataGroup({ key: `g${id}`, groupName }, parent);
        group.isCustomGroup = true;
        group.draggable = true;
        return group;
    }

    createGroup(parentGroup: DataGroup, name: string): void {
        const metaStorageKey = this.getMetaStorageKey(parentGroup);
        const customMeta = this.svcSaveStore.get(metaStorageKey) || {};

        // Get next safe ID
        const [nextId, nextKey] = this.getNextKeyForMeta(customMeta, true);

        // Update saved meta
        this.svcSaveStore.set(`${metaStorageKey}.${nextKey}`, { name });

        // Update app tree
        const newGroup = this.createDataGroupObj(nextId, name, parentGroup);
        if(!parentGroup.subGroups) parentGroup.subGroups = new Map();
        parentGroup.subGroups.set(newGroup._key, newGroup);
        this.onGroupUpdated$.next();
    }

    editGroupMeta(group: DataGroup, key: 'name', value: string): void {
        const metaStorageKey = this.getMetaStorageKey(group);
        const groupMeta = this.svcSaveStore.get(metaStorageKey) || {};
        groupMeta[key] = value;
        group[key] = value;

        this.svcSaveStore.set(metaStorageKey, groupMeta);
        this.onGroupUpdated$.next();
    }

    moveGroup(targetGroup: DataGroup, group: DataGroup): void {
        if(!group._parent) {
            console.error(`Failed to remove group ${group._key}: no parent`);
            return;
        }

        // Keep reference to old properties
        const oldMetaStorageKey = this.getMetaStorageKey(group);
        const oldMeta = this.svcSaveStore.get(oldMetaStorageKey) || {};
        const { fullStorageKey: oldStorageKey } = group;
        const oldSave = this.svcSaveStore.get(oldStorageKey);

        // Get next safe ID based on new parent
        const parentMetaStorageKey = this.getMetaStorageKey(targetGroup);
        const parentMeta = this.svcSaveStore.get(parentMetaStorageKey) || {};
        const [, newKey] = this.getNextKeyForMeta(parentMeta, true);

        // Change position in app tree
        group._parent.subGroups?.delete(group._key);
        this.changeGroupParent(group, targetGroup, newKey);

        // Change position in completion & meta
        this.svcSaveStore.delete(oldMetaStorageKey);
        this.svcSaveStore.set(this.getMetaStorageKey(group), oldMeta);
        this.svcSaveStore.delete(oldStorageKey);
        this.svcSaveStore.set(group.fullStorageKey, oldSave);

        // Fire updates
        this.onGroupUpdated$.next();
    }

    changeGroupParent(group: DataGroup, newParent: DataGroup, newKey: string): void {
        group._key = newKey;
        group._parent = newParent;
        group.storageKey = newKey;
        group.fullStorageKey = newParent ? `${newParent.fullStorageKey}.${newKey}` : newKey;
        group.contentLink = getContentLink(group);

        if(!newParent.subGroups) newParent.subGroups = new Map();
        newParent.subGroups.set(newKey, group);
    }

    duplicateGroup(targetGroup: DataGroup, group: DataGroup): DataGroup {
        const metaStorageKey = this.getMetaStorageKey(group);
        const meta = this.svcSaveStore.get(metaStorageKey) || {};

        // Get next safe ID based on target group
        const parentMetaStorageKey = this.getMetaStorageKey(targetGroup);
        const parentMeta = this.svcSaveStore.get(parentMetaStorageKey) || {};
        const [, newKey] = this.getNextKeyForMeta(parentMeta, true);

        // Clone the group
        const duplicateMeta = structuredClone(meta);

        // Update app tree
        const clonedGroup = this.cloneGroupObj(group, targetGroup, newKey);

        // Add duplicated meta
        this.svcSaveStore.set(`${parentMetaStorageKey}.${newKey}`, duplicateMeta);

        // Fire updates
        this.onGroupUpdated$.next();
        return clonedGroup;
    }

    cloneGroupObj(group: DataGroup, newParent: DataGroup, newKey: string): DataGroup {
        // Dereference and remove properties structuredClone doesn't like
        const dereferencedGroup: Partial<DataGroup> = { ...group };
        delete dereferencedGroup.updated$;
        delete dereferencedGroup.onUpdated$;
        delete dereferencedGroup.subGroups;
        delete dereferencedGroup.tasks;
        delete dereferencedGroup._parent;

        // Clone the dereferenced group and add back top level
        const clonedGroup = structuredClone(dereferencedGroup) as DataGroup;
        clonedGroup.updated$ = new Subject<void>();
        clonedGroup.onUpdated$ = clonedGroup.updated$.pipe(debounceTime(250));
        clonedGroup.subGroups = new Map();
        clonedGroup.tasks = [];
        this.changeGroupParent(clonedGroup, newParent, newKey);

        // Add back subGroups, ensuring they are properly cloned
        group.subGroups?.forEach((subGroup) => {
            if(!subGroup) return;
            const clonedSubGroup = this.cloneGroupObj(subGroup, clonedGroup, subGroup._key);
            clonedGroup.subGroups!.set(clonedSubGroup._key, clonedSubGroup);
        });

        // Add back tasks, ensuring they are properly cloned
        group.tasks?.forEach((task) => {
            const derefTask: Partial<Task> = { ...task };
            delete derefTask._parent;
            delete derefTask.selected;
            delete derefTask.completionFlag$;

            const clonedTask = structuredClone(derefTask) as Task;
            clonedTask._parent = clonedGroup;
            clonedTask.selected = signal(false);
            clonedTask.completionFlag$ = signal('N');
            clonedGroup.tasks.push(clonedTask);
        });

        return clonedGroup;
    }

    removeGroup(group: DataGroup): void {
        if(!group._parent) {
            console.error(`Failed to remove group ${group._key}: no parent`);
            return;
        }

        // Remove from app tree, saved data, and custom meta
        group._parent.subGroups?.delete(group._key);
        this.svcSaveStore.delete(group.fullStorageKey);
        this.svcSaveStore.delete(this.getMetaStorageKey(group));

        this.onGroupUpdated$.next();
    }

    //#endregion

    //#region------------------------------------------------------- Custom Task
    createTask(group: DataGroup, name: string, notes: string): void {
        const metaStorageKey = this.getMetaStorageKey(group);
        const customMeta = this.svcSaveStore.get(metaStorageKey) || {};

        // Get next safe ID
        const [nextId, nextKey] = this.getNextKeyForMeta(customMeta, false);

        // Update saved meta
        this.svcSaveStore.set(`${metaStorageKey}.${nextKey}`, { name, notes });

        // Update app tree
        const task = this.svcData.task.createTask({ id: nextId, name, notes }, group);
        group.tasks.push(task);
    }

    editTaskMeta(task: Task, key: string, value: string): void {
        const metaStorageKey = this.getMetaStorageKey(task);
        const taskMeta = this.svcSaveStore.get(metaStorageKey) || {};
        taskMeta[key] = value;
        task[key] = value;

        this.svcSaveStore.set(metaStorageKey, taskMeta);
    }

    moveTasks(targetGroup: DataGroup, tasks: Task[]): void {
        const oldParent = tasks[0]._parent;

        for(let task of tasks) {
            // Keep reference to old properties
            const oldMetaStorageKey = this.getMetaStorageKey(task);
            const oldMeta = this.svcSaveStore.get(oldMetaStorageKey) || {};
            const { fullStorageKey: oldStorageKey } = task;
            const oldSave = this.svcSaveStore.get(oldStorageKey);

            // Get next safe ID based on new parent
            const parentMetaStorageKey = this.getMetaStorageKey(targetGroup);
            const parentMeta = this.svcSaveStore.get(parentMetaStorageKey) || {};
            const [newId] = this.getNextKeyForMeta(parentMeta, false);

            // Change position in app tree
            this.changeTaskParent(task, targetGroup, newId);

            // Change position in completion & meta
            this.svcSaveStore.delete(oldMetaStorageKey);
            this.svcSaveStore.set(this.getMetaStorageKey(task), oldMeta);
            this.svcSaveStore.delete(oldStorageKey);
            this.svcSaveStore.set(task.fullStorageKey, oldSave);
        }

        // Trigger rerender (nav drawer stars, summary lines)
        // oldParent.updated$.next();
        // tasks[0]._parent.updated$.next();
        this.onGroupUpdated$.next();
    }

    changeTaskParent(task: Task, newParent: DataGroup, newId: number): void {
        const i = task._parent.tasks.findIndex((t) => t.id === task.id);
        task._parent.tasks.splice(i, 1);

        task.id = newId;
        task._parent = newParent;
        task.contentLink = getContentLink(task);
        task.storageKey = `${newId ?? -1}`;
        task.fullStorageKey = `${newParent.fullStorageKey}.${task.storageKey}`;

        if(!newParent.tasks) newParent.tasks = [];
        newParent.tasks.push(task);
    }

    reorderTasks(tasks: Task[]): void {
        if(!tasks[0]) return;

        // Retrieve the meta and save data for the group with these tasks
        const metaStorageKey = this.getMetaStorageKey(tasks[0]._parent);
        const parentMeta = this.svcSaveStore.get(metaStorageKey);
        const saveStorageKey = tasks[0]._parent.fullStorageKey;
        const parentSave = this.svcSaveStore.get(saveStorageKey);

        // Modify *in place* to ensure non-task properties persist
        for(let task of tasks) {
            const key = `x${task.id}`;
            const tempMeta = parentMeta[key];
            delete parentMeta[key];
            parentMeta[key] = tempMeta;

            const tempSave = parentSave[task.id];
            delete parentSave[task.id];
            parentSave[task.id] = tempSave;
        }

        // Write to file
        this.svcSaveStore.set(metaStorageKey, parentMeta);
        this.svcSaveStore.set(saveStorageKey, parentSave);
    }

    removeTask(group: DataGroup, task: Task) {
        this.removeTaskFromAppTree(group, task);
        this.removeTaskFromStore(task);
    }

    // Remove from app tree
    removeTaskFromAppTree(group: DataGroup, task: Task): void {
        const index = group.tasks.findIndex((t) => t.id === task.id);
        group.tasks.splice(index, 1);
    }

    // Remove from save & meta stores
    removeTaskFromStore(task: Task): void {
        this.svcSaveStore.delete(task.fullStorageKey);
        this.svcSaveStore.delete(this.getMetaStorageKey(task));
    }

    //#endregion
}

import type { PlayerSave } from '@common/PlayerSave';
import type { ConfigStoreService } from '@service/store/config-store.service';
import type { SaveStoreService } from '@service/store/save-store.service';

import { deleteTask, deleteTasks } from '@model/Migrate/delete/deleteTask';
import { deleteGroup } from '@model/Migrate/delete/deleteGroup';
import { changeKey, changeKeys } from '@model/Migrate/move/changeKey';
import { moveTask, moveTasks } from '@model/Migrate/move/moveTask';
import { moveGroup } from '@model/Migrate/move/moveGroup';
import { changeAndMoveTasks, moveAndChangeTasks } from '@model/Migrate/multi/changeMoveTasks';
import { matchLeft } from '@model/Migrate/multi/match';
import { mergeTask } from '@model/Migrate/multi/mergeTask';
import { getTask, setTask } from '@model/Migrate/retrieve/task';

export class ChangeStore {
    svcConfigStore: ConfigStoreService;
    svcSaveStore: SaveStoreService;
    newSave: PlayerSave;

    constructor(
        svcConfigStore: ConfigStoreService,
        svcSaveStore: SaveStoreService,
        version: string
    ) {
        console.log(`Migrating to ${version}`);
        this.svcConfigStore = svcConfigStore;
        this.svcSaveStore = svcSaveStore;

        // Create the initial store object for new users
        const save: PlayerSave = this.svcSaveStore.data || {
            overall: {},
            custom: {},
            notes: {},
            'bookmarked-groups': [],
            'bookmarked-tasks': [],
            'starting-class': '',
            version
        };

        // Create a cloned working copy of the save
        this.newSave = structuredClone(save);
        this.newSave.version = version;
    }

    // Function to run when finished migrating that actually commits the changes
    write(): void {
        this.svcSaveStore.data = this.newSave;
        this.svcSaveStore.save();
    }

    changeAndMoveTasks = this.curryHarness(changeAndMoveTasks);
    changeKey = this.curryHarness(changeKey);
    changeKeys = this.curryHarness(changeKeys);
    deleteGroup = this.curryHarness(deleteGroup);
    deleteTask = this.curryHarness(deleteTask);
    deleteTasks = this.curryHarness(deleteTasks);
    matchLeft = this.curryHarness(matchLeft);
    mergeTask = this.curryHarness(mergeTask);
    moveAndChangeTasks = this.curryHarness(moveAndChangeTasks);
    moveGroup = this.curryHarness(moveGroup);
    moveTask = this.curryHarness(moveTask);
    moveTasks = this.curryHarness(moveTasks);

    getTask = this.curryHarness(getTask);
    setTask = this.curryHarness(setTask);

    curryHarness<Ret, Args extends unknown[]>(
        func: (save: PlayerSave, ...args: Args) => Ret
    ) {
        return (...args: Args) => func(this.newSave, ...args);
    }
}

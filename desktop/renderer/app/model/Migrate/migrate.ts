import type { ConfigStoreService } from '@service/store/config-store.service';
import type { SaveStoreService } from '@service/store/save-store.service';

import { ChangeStore } from './ChangeStore';
import type { Migration, MigrationActions, MultiAction } from '@common/Migration';

/**
 *
 * */
export function migrate(
    svcConfigStore: ConfigStoreService,
    svcSaveStore: SaveStoreService,
    migration: Migration,
): void {
    const store = new ChangeStore(svcConfigStore, svcSaveStore, migration.resultVersion);

    if(migration.actionGroups) {
        for(const actionGroup in migration.actionGroups) {
            for(const action of migration.actionGroups[actionGroup]) {
                performAction(action, store);
            }
        }
    }

    store.write();
}

function performAction(
    action: MigrationActions,
    store: ChangeStore,
    replace?: string,
    value?: string,
): void {
    const rep = (v: string) => replaceVar(v, replace, value);

    if(action.type === 'MultiAction') {
        performMultiAction(action, store);
    }
    else if(action.type === 'changeAndMoveTasks') {
        const { from, to, ids } = action;
        store.changeAndMoveTasks(rep(from), rep(to), ids);
    }
    else if(action.type === 'changeKey') {
        const { group, from, to } = action;
        store.changeKey(rep(group), from, to);
    }
    else if(action.type === 'changeKeys') {
        const { group, ids } = action;
        store.changeKeys(rep(group), ids);
    }
    else if(action.type === 'deleteGroup') {
        const { group } = action;
        store.deleteGroup(rep(group));
    }
    else if(action.type === 'deleteTask') {
        const { group, id } = action;
        store.deleteTask(rep(group), id);
    }
    else if(action.type === 'deleteTasks') {
        const { group, ids } = action;
        store.deleteTasks(rep(group), ids);
    }
    else if(action.type === 'matchLeft') {
        const { leftGroup, rightGroup, ids } = action;
        store.matchLeft(leftGroup, rightGroup, ids);
    }
    else if(action.type === 'mergeTask') {
        const { from, fromId, to, toId } = action;
        store.mergeTask(rep(from), fromId, rep(to), toId);
    }
    else if(action.type === 'moveAndChangeTasks') {
        const { from, to, ids } = action;
        store.moveAndChangeTasks(rep(from), rep(to), ids);
    }
    else if(action.type === 'moveGroup') {
        const { from, to } = action;
        store.moveGroup(rep(from), rep(to));
    }
    else if(action.type === 'moveTask') {
        const { from, to, id } = action;
        store.moveTask(rep(from), rep(to), id);
    }
    else if(action.type === 'moveTasks') {
        const { from, to, ids } = action;
        store.moveTasks(rep(from), rep(to), ids);
    }
}

function performMultiAction(multiAction: MultiAction, store: ChangeStore): void {
    const { withValues, as, actions } = multiAction;
    for(const subAction of actions) {
        for(const value of withValues) {
            performAction(subAction, store, as, value);
        }
    }
}

function replaceVar(target: string, replace?: string, value?: string): string {
    if(!replace || !value) return target;
    return target.replaceAll(`{${replace}}`, value);
}

import { DataServiceContext } from '../types';

export function applyDataToStore(
    this: DataServiceContext,
): void {
    this.svcSave.set(
        this.data.storageKey,
        this.apply.diveForSave(this.data)
    );
}

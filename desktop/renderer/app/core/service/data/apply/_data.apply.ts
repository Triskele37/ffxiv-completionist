import type { DataServiceContext } from '../types';
import { applyStoreToData } from './applyStoreToData';
import { diveForLoad } from './diveForLoad';
import { applyDataToStore } from './applyDataToStore';
import { diveForSave } from './diveForSave';

export type DataApplyFacet = ReturnType<typeof createApplyFacet>;

export function createApplyFacet(this: DataServiceContext) {
    return {
        storeToData: applyStoreToData.bind(this),
        diveForLoad: diveForLoad.bind(this),
        dataToStore: applyDataToStore.bind(this),
        diveForSave: diveForSave.bind(this),
    };
}

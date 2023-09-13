import { DataGroup } from '@model/DataGroup';
import { ConfigStore } from '@service/store/Store.d';

/**
 * Figure out a better way to share this data
 * with the model
 * */
type GlobalNaughtyStore = {
    config?: ConfigStore;
    allData?: DataGroup;
};

export const Globals: GlobalNaughtyStore = {};

import { DataGroup } from '@model/DataGroup';

import { Lang } from './';

/**
 * Figure out a better way to share this data
 * with the model
 * */
type GlobalNaughtyStore = {
    allData: DataGroup;
    chainingEnabled: boolean;
    lang: Lang;
};

export const Globals: GlobalNaughtyStore = {
    allData: undefined,
    chainingEnabled: undefined,
    lang: undefined,
};

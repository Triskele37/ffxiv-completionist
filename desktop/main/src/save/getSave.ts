import { SaveLoad } from '../../../common/PlayerSave';
import { GlobalStore } from '../globalStore';
import { loadConfig } from '../config';
import { loadSave } from './loadSave';

export function getSave(): SaveLoad {
    if(!GlobalStore.config) loadConfig();
    return loadSave();
}

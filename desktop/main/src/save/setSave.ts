import { PlayerSave } from '../../../common/PlayerSave';
import { GlobalStore } from '../globalStore';
import { saveSave } from './saveSave';

export function setSave(newSave: PlayerSave): void {
    GlobalStore.save = newSave;
    saveSave();
}

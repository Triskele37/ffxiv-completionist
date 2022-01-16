import { onLoadJson } from './onLoadJson';
import { onGetConfig } from './onGetConfig';
import { onSetConfig } from './onSetConfig';
import { onGetSave } from './onGetSave';
import { onSetSave } from './onSetSave';

export function initActions() {
    onLoadJson();
    onGetConfig();
    onSetConfig();
    onGetSave();
    onSetSave();
}

import { PlayerSave } from '../../../common/PlayerSave';

export function getDefaultSave(): PlayerSave {
    return {
        'overall': {},
        'custom': {},
        notes: {},
        'bookmarked-groups': [],
        'bookmarked-tasks': [],
        'starting-class': '',
        'version': ''
    };
}

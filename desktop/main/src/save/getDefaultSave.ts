import { PlayerSave } from '../../../common/PlayerSave';

export function getDefaultSave(): PlayerSave {
    return {
        'game': {},
        'custom': {},
        notes: {},
        'bookmarked-groups': [],
        'bookmarked-tasks': [],
        'starting-class': '',
        'version': ''
    };
}

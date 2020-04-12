import { getPlayerStore } from "../index";

export class ChangeStore {
    constructor() {
        this.store = getPlayerStore().get('overall');
    }

    write() {
        getPlayerStore.set('overall', this.store);
    }

    // Change Helper when task is in same group
    change(basePath, oldKey, newKey) {
        const obj = this.dive(basePath);

        if(obj[oldKey]) {
            delete obj[oldKey];
            obj[newKey] = value;
        }
    }

    // Change helper when task is in different group
    move(oldPath, newPath, key) {
        const obj = this.dive(oldPath);

        if(obj[key]) {
            this.dive(newPath)[key] = obj[key];
            delete obj[key];
        }
    }

    //
    delete(path) {

    }

    //
    dive(path) {
        const split = path.split('.');

        // dive path 'stop' indexes back
        let cur = this.store;
        for(let i = 0; i < split.length; i++) {
            cur = cur[split[i]];
        }

        return cur;
    }
}

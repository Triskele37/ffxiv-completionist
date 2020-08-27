import { getPlayerStore } from "../index";

export class ChangeStore {
    constructor(version) {
        console.log(`Migrating to ${version}`);

        if(!getPlayerStore().get('overall')) getPlayerStore().set('overall', {});
        this.store = getPlayerStore().get('overall');
        this.version = version;
    }

    write() {
        getPlayerStore().set('overall', this.store);
        getPlayerStore().set('version', this.version);
    }

    // Change Helper when task is in same group
    change(basePath, oldKey, newKey) {
        const obj = this.dive(basePath);

        if(obj && obj[oldKey]) {
            const value = obj[oldKey];
            delete obj[oldKey];
            obj[newKey] = value;
        }
    }

    // Change helper when task is in different group
    move(oldPath, newPath, key) {
        const obj = this.dive(oldPath);

        if(obj && obj[key]) {
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
            if(!cur) return null;
        }

        return cur;
    }
}

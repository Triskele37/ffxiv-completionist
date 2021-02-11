import { getPlayerStore } from "../index";

export class ChangeStore {
    constructor(version, isTesting) {
        console.log(`Migrating to ${version}`);

        if(!getPlayerStore().get('overall')) getPlayerStore().set('overall', {});
        this.store = getPlayerStore().get('overall');
        this.version = version;

        this.isTesting = isTesting;
    }

    write() {
        getPlayerStore().set('overall', this.store);
        if(!this.isTesting) getPlayerStore().set('version', this.version);
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
            if(this.dive(newPath) === null) console.error(`${newPath} does not exist, create it first`);
            this.dive(newPath)[key] = obj[key];
            delete obj[key];
        }
    }

    // Change helper to move an entire group of tasks
    moveGroup(oldPath, newPath) {
        const obj = this.dive(oldPath);

        if(obj) {
            if(this.dive(newPath) === null) console.error(`${newPath} does not exist, create it first`);

            // Get left/right of new path so assignment can take place
            let newLeftHand = newPath.split('.');
            const newRightHand = newLeftHand.pop();
            newLeftHand = newLeftHand.join('.');

            this.dive(newLeftHand)[newRightHand] = {
                ...this.dive(newPath),
                ...obj
            };

            // Get left/right of old path so deletion can take place
            let oldLeftHand = oldPath.split('.');
            const oldRightHand = oldLeftHand.pop();
            oldLeftHand = oldLeftHand.join('.');

            delete this.dive(oldLeftHand)[oldRightHand];
        }
    }

    // Change helper to create a group
    create(pathStart, pathEnd) {
        const obj = this.dive(pathStart);
        if(!obj[pathEnd]) obj[pathEnd] = {};
    }

    // Change helper when task is removed
    delete(path, key) {
        const obj = this.dive(path);

        if(obj && obj[key]) {
            delete obj[key];
        }
    }

    // Dives a given path, creating object along the way, returning the final object
    dive(path) {
        const split = path.split('.');

        let cur = this.store;
        for(let i = 0; i < split.length; i++) {
            if(!cur[split[i]]) cur[split[i]] = {};
            cur = cur[split[i]];
        }

        return cur;
    }
}

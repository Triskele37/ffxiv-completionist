import { data } from '../../../data';
// import Store from 'electron-store';
// const store = new Store();

export const state = {
//    data
};

const test = {
    total: 0,
    completed: 1,
    excluded: 0,

    Achievements: {
        total: 0,
        completed: 1,
        excluded: 0,

        addCompleted() {
            this.completed++;
            this.parent.addCompleted();
        },

        Battle: {
            total: 0,
            completed: 1,
            excluded: 0,

            addCompleted() {
                this.completed++;
                this.parent.addCompleted();
            },

            Dungeon: {
                total: 0,
                completed: 1,
                excluded: 0,

                addCompleted() {
                    this.completed++;
                    this.parent.addCompleted();
                },

            },
            Raid: {
                total: 0,
                completed: 1,
                excluded: 0,
            }
        }
    }
};

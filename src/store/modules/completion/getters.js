import Store from 'electron-store';
const store = new Store();

export const getters = {
    getCompletionFlag: (state) => (storageKey) => {
        return store.get(storageKey) || 'N';
    },
    getTotals: (state) => (storageKey) => {
        return store.get(`${storageKey}.totals`);
    }
};

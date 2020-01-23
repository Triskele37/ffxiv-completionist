import Store from 'electron-store';
const store = new Store();

export const getters = {
    getCompletionFlag: (state) => (storageKey) => {
        return store.get(storageKey) || 'N';
    },
    getTotals: (state) => (storageKey) => {
        const storedTotals = store.get(`${storageKey}.totals`);
        return !storedTotals ? { completed: 0, excluded: 0, total: 0 } : storedTotals;
    }
};

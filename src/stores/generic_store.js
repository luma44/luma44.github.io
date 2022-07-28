import {defineStore} from 'pinia'

export const createStore = (storeType, database) => {
    const store = {};
    database.forEach(function (value) {
        value.image = new URL(`../assets/${storeType}/${value.name}.png`, import.meta.url).href
        value.thumbnail = new URL(`../assets/${storeType}/Thumbnails/${value.name}.png`, import.meta.url).href
        store[value.name] = value;
    })

    return defineStore(storeType, {
        state: () => ({
            db: store,
        }),
        actions: {
            findById(id) {
                return this.db[id];
            },
            random(excludeId) {
                excludeId = excludeId || '';
                const all_else = Object.entries(this.db).filter((id, value) => id !== excludeId)
                return all_else[Math.floor(Math.random() * all_else.length)][1];
            },
            all() {
                return Object.entries(this.db);
            }
        },
    })
}

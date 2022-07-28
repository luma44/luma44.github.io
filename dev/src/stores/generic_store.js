import {defineStore} from 'pinia'

export const createStore = (id, storeType) => {
    return defineStore(id, {
        state: () => ({
            db: {},
        }),
        actions: {
            async fetchData() {
                console.log("fetching data")
                const data = await fetch(`src/assets/${storeType}/${storeType}.json`).then(function (response) {
                    return response.json();
                })
                const store = {};
                data.forEach(function (value, i) {
                    value.image = `src/assets/${storeType}/${value.name}.png`
                    value.thumbnail = `src/assets/${storeType}/Thumbnails/${value.name}.png`
                    store[value.name] = value;
                })
                this.db = store;
                console.log("stored data")
            },
            findById(id) {
                return this.db[id];
            },
            random(excludeId) {
                console.log(this.db)
                excludeId = excludeId || '';
                const all_else = Object.entries(this.db).filter((id, value) => id !== excludeId)
                return all_else[Math.floor(Math.random() * all_else.length)][1];
            }
        },
    })
}

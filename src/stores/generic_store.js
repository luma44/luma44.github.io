import {defineStore} from 'pinia'

export const createStore = (storeType, database) => {
    const store = {};
    database.forEach(function (value) {
        let imgName = value.name;
        if (!value.external_url || value.external_url.length === 0) {
            imgName = "null";
        }
        value.image = new URL(`../generated/${storeType}/${imgName}.png`, import.meta.url).href;
        value.thumbnail = new URL(`../generated/${storeType}/${imgName}_t.png`, import.meta.url).href;
        store[value.name] = value;
    })

    return defineStore(storeType, {
        state: () => ({
            db: store,
            filters: new Map()
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
                return Object.entries(this.db).map(e => e[1]);
            },
            filtered(filters) {
                if (filters.size !== 0) {
                    return this.all()
                        .filter(nft => {
                            let allMatches = nft.attributes.map(att => {
                                if (filters.has(att.trait_type)) {
                                    return att.value === filters.get(att.trait_type);
                                }
                                return true;
                            });
                            return allMatches.every(element => element)
                        });
                } else {
                    return this.all();
                }
            },
            traitTypes() {
                return Object.entries(this.db)
                    .map(e => e[1])[0].attributes.map(att => att.trait_type)
            },
            traitValues(trait_type) {
                let values = Object.entries(this.db)
                    .map(e => e[1].attributes
                        .filter(att => att.trait_type === trait_type)
                        .map(att => att.value)[0]
                    )
                return new Set(values);
            },
            getFilters() {
                return this.filters;
            },
            setFilter(trait_type, trait_value) {
                if (trait_value) {
                    this.filters.set(trait_type, trait_value);
                } else {
                    this.filters.delete(trait_type);
                }
            }
        },
    })
}

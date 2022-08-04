import {createStore} from "./generic_store";
import playerGloveJson from '@/generated/player_glove/db.json';
export const playerGloveStore = createStore('player_glove', playerGloveJson);
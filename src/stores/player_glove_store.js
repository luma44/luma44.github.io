import {createStore} from "./generic_store";
import playerGloveJson from '@/assets/player_glove/player_glove.json';
export const playerGloveStore = createStore('player_glove', playerGloveJson);
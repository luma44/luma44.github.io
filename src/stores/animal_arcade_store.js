import {createStore} from "./generic_store";
import animal_arcade_json from '@/assets/animal_arcade/animal_arcade.json';
export const animalArcadeStore = createStore('animal_arcade', animal_arcade_json);
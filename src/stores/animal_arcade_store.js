import {createStore} from "./generic_store";
import animal_arcade_json from '@/generated/animal_arcade/db.json';
export const animalArcadeStore = createStore('animal_arcade', animal_arcade_json);
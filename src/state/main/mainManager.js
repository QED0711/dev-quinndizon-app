
import Spiccato from 'spiccato';

import stateSchema from './stateSchema'
import getters from './getters'
import setters from './setters'
import methods, {restAPI} from './methods'


const mainManager = new Spiccato(stateSchema, {id: "main"})

mainManager.addCustomGetters(getters)
mainManager.addCustomSetters(setters)
mainManager.addCustomMethods(methods)
mainManager.addNamespacedMethods({restAPI})

// Uncomment below to connect state to localStorage
/*
mainManager.connectToLocalStorage({ 
    persistKey: "main"
})
*/

mainManager.init();

export default mainManager; 
export const mainPaths = mainManager.paths;

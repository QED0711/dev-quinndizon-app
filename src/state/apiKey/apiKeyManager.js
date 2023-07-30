
import Spiccato from 'spiccato';

import stateSchema from './stateSchema'
import getters from './getters'
import setters from './setters'
import methods from './methods'


const apiKeyManager = new Spiccato(stateSchema, {id: "main"})

apiKeyManager.addCustomGetters(getters)
apiKeyManager.addCustomSetters(setters)
apiKeyManager.addCustomMethods(methods)

apiKeyManager.connectToLocalStorage({ 
    providerID: "apiKey",
    persistKey: "apiKey",
    initializeFromLocalStorage: true,
    clearStorageOnUnload: false,
    privateState: [],
})


apiKeyManager.init();

export default apiKeyManager; 
export const apiKeyPaths = apiKeyManager.paths;

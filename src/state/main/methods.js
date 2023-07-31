import axios from "axios";
import { API_BASE_URL } from "../../config/parsed";
import apiKeyManager from "../apiKey/apiKeyManager";

const methods = {

    // your methods here...

}

export default methods;

export const restAPI = {
    getSnapshot() {
        const apiKey = apiKeyManager.getters.getApiKey();
        return new Promise(resolve => {
            axios.get(API_BASE_URL + `/system/status`, {headers: {"x-api-key": apiKey}})
                .then(response => {
                    if(response.status === 200) {
                        const {data} = response;
                        data.datetime = new Date(data.time).toLocaleString();
                        this.setters.setSnapshot(data)
                        resolve(data)
                    }
                })
                .catch(err => {
                    console.error(err)
                    resolve(null)
                })
            })
        },
        
        getValueByKey(key) {
            const apiKey = apiKeyManager.getters.getApiKey();
            return new Promise(resolve => {
                axios.get(API_BASE_URL + `/system/status/${key}`, {headers: {"x-api-key": apiKey}})
                .then(response => {
                    if(response.status === 200) {
                        resolve(response.data)
                    }
                })
                .catch(err => {
                    console.error(err)
                    resolve(null)
                })
            })
    },



}
